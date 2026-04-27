/**
 * Kilo Sofia Chat Widget
 * - Injects a fixed chat button and an accessible slide-in panel.
 * - Loads the AI Studio applet inside a lazy-loaded iframe.
 * - Isolated selectors to avoid collisions with existing CSS/JS.
 */

(function () {
    'use strict';

    const CONFIG = {
        AGENT_NAME: 'Sofía',
        IFRAME_SRC: 'https://ai.studio/apps/drive/1FAK0YcUXgtUfc_BK2NwWaJKIXsvgYcgH?fullscreenApplet=true',
        IFRAME_TITLE: 'Chat con Sofía',
        ID_ROOT: 'kilo-sofia-chat-root',
        ID_OVERLAY: 'kilo-sofia-chat-overlay',
        ID_PANEL: 'kilo-sofia-chat-panel',
        ID_IFRAME: 'kilo-sofia-chat-iframe',
        ID_LOADING: 'kilo-sofia-chat-loading',
        ID_CLOSE: 'kilo-sofia-chat-close',
        ID_FAB: 'kilo-sofia-chat-fab'
    };

    function onIdle(cb) {
        if (typeof window.requestIdleCallback === 'function') {
            window.requestIdleCallback(() => cb(), { timeout: 1500 });
            return;
        }
        window.setTimeout(cb, 0);
    }

    function createEl(tag, attrs = {}) {
        const el = document.createElement(tag);
        Object.entries(attrs).forEach(([key, value]) => {
            if (value === undefined || value === null) return;
            if (key === 'class') el.className = String(value);
            else if (key === 'text') el.textContent = String(value);
            else el.setAttribute(key, String(value));
        });
        return el;
    }

    function getFocusable(container) {
        return Array.from(
            container.querySelectorAll(
                'button, [href], iframe, input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
        ).filter((el) => {
            const style = window.getComputedStyle(el);
            return style.visibility !== 'hidden' && style.display !== 'none' && !el.hasAttribute('disabled');
        });
    }

    function init() {
        if (document.getElementById(CONFIG.ID_ROOT) || document.getElementById(CONFIG.ID_OVERLAY)) return;

        // FAB (fixed position)
        const root = createEl('div', { id: CONFIG.ID_ROOT });

        const fab = createEl('button', {
            id: CONFIG.ID_FAB,
            class: 'kilo-sofia-chat__fab',
            type: 'button',
            'aria-label': CONFIG.IFRAME_TITLE,
            'aria-haspopup': 'dialog',
            'aria-expanded': 'false',
            'aria-controls': CONFIG.ID_OVERLAY
        });

        // Inline SVG icon (chat bubble)
        fab.insertAdjacentHTML(
            'beforeend',
            [
                '<svg class="kilo-sofia-chat__fabIcon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">',
                '<path fill="currentColor" d="M20 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h3v3.2c0 .7.8 1.1 1.3.6L12.2 19H20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 15h-8.1l-.3.3-2.6 2.6V17H4V4h16v13Z"/>',
                '</svg>'
            ].join('')
        );

        const fabText = createEl('span', { class: 'kilo-sofia-chat__fabText', text: 'Sofía' });
        fab.appendChild(fabText);

        const tooltip = createEl('span', { class: 'kilo-sofia-chat__tooltip', text: 'Chat con Sofía' });
        fab.appendChild(tooltip);

        root.appendChild(fab);
        document.body.appendChild(root);

        // Overlay + Panel
        const overlay = createEl('div', {
            id: CONFIG.ID_OVERLAY,
            class: 'kilo-sofia-chat__overlay',
            'data-open': 'false'
        });

        const panel = createEl('section', {
            id: CONFIG.ID_PANEL,
            class: 'kilo-sofia-chat__panel',
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': CONFIG.IFRAME_TITLE,
            tabindex: '-1'
        });

        const header = createEl('div', { class: 'kilo-sofia-chat__panelHeader' });
        const titleWrap = createEl('div', { class: 'kilo-sofia-chat__panelTitle' });
        titleWrap.appendChild(createEl('span', { class: 'kilo-sofia-chat__badge', text: 'IA' }));
        titleWrap.appendChild(createEl('span', { class: 'kilo-sofia-chat__titleText', text: CONFIG.IFRAME_TITLE }));
        header.appendChild(titleWrap);

        const closeBtn = createEl('button', {
            id: CONFIG.ID_CLOSE,
            class: 'kilo-sofia-chat__close',
            type: 'button',
            'aria-label': 'Cerrar chat'
        });
        closeBtn.innerHTML = '&times;';
        header.appendChild(closeBtn);

        const body = createEl('div', { class: 'kilo-sofia-chat__panelBody' });
        const iframe = createEl('iframe', {
            id: CONFIG.ID_IFRAME,
            class: 'kilo-sofia-chat__iframe',
            title: CONFIG.IFRAME_TITLE,
            loading: 'lazy',
            referrerpolicy: 'no-referrer-when-downgrade',
            allow: 'fullscreen; clipboard-read; clipboard-write; microphone; camera',
            // NOTE: AI Studio may require same-origin scripts; keep sandbox permissive enough while still scoped.
            sandbox: 'allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox'
        });
        // Lazy: set src only when opening
        iframe.dataset.src = CONFIG.IFRAME_SRC;

        const loading = createEl('div', {
            id: CONFIG.ID_LOADING,
            class: 'kilo-sofia-chat__loading',
            'data-loading': 'false'
        });
        const spinner = createEl('span', { class: 'kilo-sofia-chat__spinner', 'aria-hidden': 'true' });
        const loadingText = createEl('span', { text: 'Cargando chat…' });
        loading.appendChild(spinner);
        loading.appendChild(loadingText);

        body.appendChild(iframe);
        body.appendChild(loading);

        panel.appendChild(header);
        panel.appendChild(body);
        overlay.appendChild(panel);
        document.body.appendChild(overlay);

        // State
        let isOpen = false;
        let lastActive = null;
        let previousBodyOverflow = '';
        let focusTrapHandler = null;
        let iframeLoaded = false;

        function setLoading(v) {
            loading.setAttribute('data-loading', v ? 'true' : 'false');
        }

        function ensureIframeLoaded() {
            if (iframeLoaded) return;
            const src = iframe.dataset.src;
            if (!src) return;

            setLoading(true);
            iframe.src = src;
            iframeLoaded = true;

            const onLoad = () => {
                setLoading(false);
                iframe.removeEventListener('load', onLoad);
            };
            iframe.addEventListener('load', onLoad);
        }

        function trapFocus() {
            const focusables = getFocusable(panel);
            if (focusables.length === 0) return;

            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            focusTrapHandler = (e) => {
                if (!isOpen) return;
                if (e.key !== 'Tab') return;

                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            };
            document.addEventListener('keydown', focusTrapHandler);

            // Prefer close button, fallback to first focusable
            (closeBtn || first).focus();
        }

        function releaseFocusTrap() {
            if (!focusTrapHandler) return;
            document.removeEventListener('keydown', focusTrapHandler);
            focusTrapHandler = null;
        }

        function open() {
            if (isOpen) return;
            isOpen = true;

            lastActive = document.activeElement;
            previousBodyOverflow = document.body.style.overflow;

            overlay.setAttribute('data-open', 'true');
            fab.setAttribute('aria-expanded', 'true');

            // Prevent background scroll while preserving existing inline overflow
            document.body.style.overflow = 'hidden';

            ensureIframeLoaded();
            trapFocus();
        }

        function close() {
            if (!isOpen) return;
            isOpen = false;

            overlay.setAttribute('data-open', 'false');
            fab.setAttribute('aria-expanded', 'false');

            releaseFocusTrap();
            document.body.style.overflow = previousBodyOverflow;

            if (lastActive && typeof lastActive.focus === 'function') {
                lastActive.focus();
            } else {
                fab.focus();
            }
        }

        // Events
        fab.addEventListener('click', (e) => {
            e.preventDefault();
            open();
        });

        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            close();
        });

        overlay.addEventListener('click', (e) => {
            // Close when clicking outside the panel
            if (e.target === overlay) close();
        });

        document.addEventListener('keydown', (e) => {
            if (!isOpen) return;
            if (e.key === 'Escape') {
                e.preventDefault();
                close();
            }
        });

        // Defensive: if another script removes body overflow, keep UI consistent on close
        window.addEventListener('resize', () => {
            if (!isOpen) return;
            // Keep panel visible on resize without further logic.
        });
    }

    // Defer injection so we don't block first render.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => onIdle(init));
    } else {
        onIdle(init);
    }
})();

