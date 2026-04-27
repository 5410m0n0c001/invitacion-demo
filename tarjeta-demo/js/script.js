/**
 * All In One Cabo - Digital Business Card JavaScript
 * Handles all interactive functionality including modals, notifications, and accessibility
 */

(function () {
    'use strict';

    // Configuration
    const CONFIG = {
        PHONE_NUMBER: '+52 624 137 8636',
        PHONE_DIGITS: '526241378636',
        VCARD_PATH: 'assets/allinonecabo.vcf',
        WHATSAPP_MESSAGE: 'Hi%2C%20I%20would%20like%20to%20book%20an%20activity%20with%20All%20In%20One%20Cabo.%20Please%20share%20availability.',
        EMAIL_SUBJECT: 'Booking%20Inquiry',
        EMAIL_BODY: 'Hi%20Christian%2C%0A%0AI\'d%20like%20to%20ask%20about%20...',
        TOAST_DURATION: 3000,
        MODAL_FOCUS_SELECTOR: '.modal-close, .copy-btn',
        ANIMATION_DURATION: 300
    };

    // Utility Functions
    const utils = {
        // Check if device is mobile
        isMobile() {
            return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        // Check if motion preference is reduced
        prefersReducedMotion() {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },

        // Add event listener with passive option for scroll events
        addEventListener(element, event, handler, options = {}) {
            if (event === 'scroll' || event === 'wheel') {
                element.addEventListener(event, handler, { passive: false, ...options });
            } else {
                element.addEventListener(event, handler, options);
            }
        },

        // Debounce function for performance optimization
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Copy text to clipboard
        async copyToClipboard(text) {
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                    return true;
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = text;
                    textArea.style.position = 'fixed';
                    textArea.style.left = '-999999px';
                    textArea.style.top = '-999999px';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    const result = document.execCommand('copy');
                    document.body.removeChild(textArea);
                    return result;
                }
            } catch (error) {
                console.error('Failed to copy text: ', error);
                return false;
            }
        }
    };

    // Toast Notification System
    class ToastManager {
        constructor() {
            this.container = document.querySelector('.toast-container');
            this.toasts = new Map();
            this.init();
        }

        init() {
            if (!this.container) {
                console.warn('Toast container not found');
                return;
            }
        }

        show(message, type = 'info', duration = CONFIG.TOAST_DURATION) {
            const toastId = 'toast-' + Date.now();
            const toast = this.createToast(toastId, message, type);

            this.container.appendChild(toast);
            this.toasts.set(toastId, toast);

            // Trigger animation
            requestAnimationFrame(() => {
                toast.classList.add('show');
            });

            // Auto remove
            if (duration > 0) {
                setTimeout(() => {
                    this.hide(toastId);
                }, duration);
            }

            return toastId;
        }

        hide(toastId) {
            const toast = this.toasts.get(toastId);
            if (!toast) return;

            toast.classList.remove('show');

            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
                this.toasts.delete(toastId);
            }, CONFIG.ANIMATION_DURATION);
        }

        createToast(id, message, type) {
            const toast = document.createElement('div');
            toast.className = `toast toast-${type}`;
            toast.id = id;

            toast.innerHTML = `
                <span class="toast-message">${message}</span>
                <button class="toast-close" aria-label="Close notification">&times;</button>
            `;

            // Add close button functionality
            const closeBtn = toast.querySelector('.toast-close');
            closeBtn.addEventListener('click', () => this.hide(id));

            return toast;
        }

        success(message, duration) {
            return this.show(message, 'success', duration);
        }

        error(message, duration) {
            return this.show(message, 'error', duration);
        }

        info(message, duration) {
            return this.show(message, 'info', duration);
        }
    }

    // Modal Manager
    class ModalManager {
        constructor() {
            this.modal = document.getElementById('callModal');
            this.isOpen = false;
            this.focusTrap = null;
            this.init();
        }

        init() {
            if (!this.modal) return;

            this.bindEvents();
        }

        bindEvents() {
            // Close modal events
            const closeBtn = this.modal.querySelector('.modal-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.close());
            }

            // Close on background click
            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) {
                    this.close();
                }
            });

            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });

            // Copy button functionality
            const copyBtn = this.modal.querySelector('.copy-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => this.copyNumber());
            }
        }

        open() {
            if (!this.modal || this.isOpen) return;

            this.modal.classList.add('show');
            this.modal.setAttribute('aria-hidden', 'false');
            this.isOpen = true;

            // Focus management
            this.trapFocus();

            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            // Analytics
            this.trackEvent('modal_opened', 'call_modal');
        }

        close() {
            if (!this.modal || !this.isOpen) return;

            this.modal.classList.remove('show');
            this.modal.setAttribute('aria-hidden', 'true');
            this.isOpen = false;

            // Release focus trap
            this.releaseFocus();

            // Restore body scroll
            document.body.style.overflow = '';

            // Analytics
            this.trackEvent('modal_closed', 'call_modal');
        }

        trapFocus() {
            const focusableElements = this.modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements.length === 0) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            const focusHandler = (e) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            lastElement.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            firstElement.focus();
                            e.preventDefault();
                        }
                    }
                }
            };

            this.focusTrap = focusHandler;
            document.addEventListener('keydown', focusHandler);

            // Focus first element
            firstElement.focus();
        }

        releaseFocus() {
            if (this.focusTrap) {
                document.removeEventListener('keydown', this.focusTrap);
                this.focusTrap = null;
            }
        }

        async copyNumber() {
            const toastManager = new ToastManager();
            const success = await utils.copyToClipboard(CONFIG.PHONE_NUMBER);

            if (success) {
                toastManager.success('Phone number copied to clipboard!');
                this.trackEvent('phone_number_copied', 'call_modal');
            } else {
                toastManager.error('Failed to copy number. Please copy manually.');
            }
        }

        trackEvent(action, label) {
            // Analytics hook - replace with your analytics service
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: 'user_interaction',
                    event_label: label
                });
            }
        }
    }

    // Button Handler
    class ButtonHandler {
        constructor() {
            this.toastManager = new ToastManager();
            this.modalManager = new ModalManager();
            this.init();
        }

        init() {
            this.bindEvents();
        }

        bindEvents() {
            // Call buttons - show modal on desktop, call on mobile
            const callButtons = document.querySelectorAll('a[href^="tel:"]');
            callButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    if (utils.isMobile()) {
                        this.trackEvent('phone_call', 'mobile_call');
                    } else {
                        e.preventDefault();
                        this.modalManager.open();
                        this.trackEvent('phone_modal', 'desktop_modal');
                    }
                });
            });

            // WhatsApp button
            const whatsappBtn = document.querySelector('a[href*="wa.me"]');
            if (whatsappBtn) {
                whatsappBtn.addEventListener('click', () => {
                    this.trackEvent('whatsapp_clicked', 'social_action');
                });
            }

            // Location button
            const locationBtn = document.querySelector('a[href*="maps.app.goo.gl"]');
            if (locationBtn) {
                locationBtn.addEventListener('click', () => {
                    this.trackEvent('maps_opened', 'navigation_action');
                });
            }

            // Add to Contacts button
            const contactsBtn = document.querySelector('.contacts-btn');
            if (contactsBtn) {
                contactsBtn.addEventListener('click', () => this.handleAddToContacts());
            }

            // Email button
            const emailBtn = document.querySelector('a[href^="mailto:"]');
            if (emailBtn) {
                emailBtn.addEventListener('click', () => {
                    this.trackEvent('email_clicked', 'contact_action');
                });
            }

            // Social media links
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const platform = this.getSocialPlatform(link.href);
                    this.trackEvent('social_clicked', platform);
                });
            });

            // Share button listener
            const shareBtn = document.querySelector('.share-btn');
            if (shareBtn) {
                shareBtn.addEventListener('click', () => this.handleShare());
            }
        }

        async handleAddToContacts() {
            try {
                // Create a temporary anchor element to trigger download
                const link = document.createElement('a');
                link.href = CONFIG.VCARD_PATH;
                link.download = 'allinonecabo.vcf';
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Show success message
                this.toastManager.success('Contact added! Check your downloads.');
                this.trackEvent('vcard_downloaded', 'contact_action');

                // If on mobile, show additional instructions
                if (utils.isMobile()) {
                    setTimeout(() => {
                        this.toastManager.info('Open the downloaded file to add the contact');
                    }, 1500);
                }

            } catch (error) {
                console.error('Error adding contact:', error);
                this.toastManager.error('Failed to add contact. Please try again.');
            }
        }

        async handleShare() {
            try {
                await navigator.share({
                    title: 'ALL IN ONE CABO | Digital Business Card',
                    text: 'Discover what ALL IN ONE CABO has to offer. View our digital business card and connect with us easily.',
                    url: 'https://5410m0n0c001.github.io/ALL-IN-ONE-CABO-/'
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        }

        getSocialPlatform(url) {
            if (url.includes('facebook.com')) return 'facebook';
            if (url.includes('instagram.com')) return 'instagram';
            if (url.includes('youtube.com')) return 'youtube';
            if (url.includes('linkedin.com')) return 'linkedin';
            if (url.includes('tiktok.com')) return 'tiktok';
            if (url.includes('twitter.com')) return 'twitter';
            if (url.includes('pinterest.com')) return 'pinterest';
            if (url.includes('twitch.tv')) return 'twitch';
            return 'social';
        }

        trackEvent(action, label) {
            // Analytics hook - replace with your analytics service
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: 'user_interaction',
                    event_label: label
                });
            }
        }
    }

    // Video Manager
    class VideoManager {
        constructor() {
            this.videos = document.querySelectorAll('video');
            this.init();
        }

        init() {
            if (!this.videos.length) return;

            this.bindEvents();
            this.optimizeLoading();
        }

        bindEvents() {
            this.videos.forEach(video => {
                // Error handling
                video.addEventListener('error', (e) => {
                    console.warn('Video failed to load:', video.src);
                    this.handleVideoError(video);
                });

                // Load success
                video.addEventListener('loadeddata', () => {
                    console.log('Video loaded successfully:', video.src);
                });

                // Pause on visibility change (for performance)
                document.addEventListener('visibilitychange', () => {
                    if (document.hidden) {
                        video.pause();
                    } else if (video.dataset.autoplay === 'true') {
                        video.play().catch(e => console.log('Autoplay prevented:', e));
                    }
                });
            });
        }

        optimizeLoading() {
            // Intersection Observer for lazy loading videos
            if ('IntersectionObserver' in window) {
                const videoObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            this.loadVideo(entry.target);
                            videoObserver.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.1 });

                this.videos.forEach(video => {
                    if (video.dataset.lazy !== 'true') return;
                    videoObserver.observe(video);
                });
            }
        }

        loadVideo(video) {
            if (video.dataset.loaded === 'true') return;

            video.load();
            video.dataset.loaded = 'true';

            // Auto-play if not in reduced motion mode
            if (!utils.prefersReducedMotion() && video.dataset.autoplay === 'true') {
                video.play().catch(e => {
                    console.log('Autoplay prevented:', e);
                });
            }
        }

        handleVideoError(video) {
            // Hide video and show poster image or fallback
            video.style.display = 'none';

            // Create fallback element
            const fallback = document.createElement('div');
            fallback.className = 'video-fallback';
            fallback.style.cssText = `
                background: linear-gradient(135deg, #000000, #C49A3A);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 1.2rem;
                text-align: center;
                min-height: 200px;
            `;
            fallback.innerHTML = 'Video not available';

            video.parentNode.insertBefore(fallback, video);
        }
    }

    // Social Media Mobile Menu
    class MobileSocialMenu {
        constructor() {
            this.toggleBtn = document.querySelector('.mobile-social-toggle');
            this.socialStrip = document.querySelector('.social-strip');
            this.isOpen = false;
            this.init();
        }

        init() {
            if (!this.toggleBtn || !this.socialStrip) return;

            this.bindEvents();
            this.setupMobileStyles();
        }

        bindEvents() {
            this.toggleBtn.addEventListener('click', () => this.toggle());

            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (this.isOpen &&
                    !this.toggleBtn.contains(e.target) &&
                    !this.socialStrip.contains(e.target)) {
                    this.close();
                }
            });

            // Close on escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });
        }

        setupMobileStyles() {
            // Add mobile-specific styles to social strip
            this.socialStrip.classList.add('mobile-menu');
        }

        toggle() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        }

        open() {
            this.socialStrip.classList.add('mobile-open');
            this.toggleBtn.setAttribute('aria-expanded', 'true');
            this.isOpen = true;

            // Focus management
            const firstLink = this.socialStrip.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        }

        close() {
            this.socialStrip.classList.remove('mobile-open');
            this.toggleBtn.setAttribute('aria-expanded', 'false');
            this.isOpen = false;
        }
    }

    // Collapsible Menu Manager
    class CollapsibleMenuManager {
        constructor() {
            this.menus = document.querySelectorAll('.collapsible-menu');
            this.openMenus = new Set();
            this.init();
        }

        init() {
            if (!this.menus.length) return;

            this.bindEvents();
            this.setupAccessibility();
        }

        bindEvents() {
            // Toggle button click handlers
            this.menus.forEach(menu => {
                const toggleBtn = menu.querySelector('.menu-toggle');
                if (toggleBtn) {
                    toggleBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        this.toggleMenu(menu);
                    });
                }
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                const clickedOutside = Array.from(this.menus).every(menu =>
                    !menu.contains(e.target)
                );

                if (clickedOutside) {
                    this.closeAllMenus();
                }
            });

            // Close menu with escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeAllMenus();
                }
            });

            // Handle window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    this.closeAllMenus();
                }
            });
        }

        setupAccessibility() {
            this.menus.forEach(menu => {
                const toggleBtn = menu.querySelector('.menu-toggle');
                const content = menu.querySelector('.menu-content');

                if (toggleBtn && content) {
                    // Set initial ARIA state
                    toggleBtn.setAttribute('aria-expanded', 'false');

                    // Add keyboard navigation for menu items
                    const menuLinks = content.querySelectorAll('a, button');
                    menuLinks.forEach((link, index) => {
                        link.addEventListener('keydown', (e) => {
                            if (e.key === 'Tab') {
                                if (e.shiftKey) {
                                    // Shift+Tab - previous item
                                    if (index === 0) {
                                        e.preventDefault();
                                        toggleBtn.focus();
                                    }
                                } else {
                                    // Tab - next item
                                    if (index === menuLinks.length - 1) {
                                        e.preventDefault();
                                        this.focusNextMenu();
                                    }
                                }
                            }
                        });
                    });
                }
            });
        }

        toggleMenu(menu) {
            const isOpen = menu.classList.contains('open');

            if (isOpen) {
                this.closeMenu(menu);
            } else {
                this.openMenu(menu);
            }
        }

        openMenu(menu) {
            const toggleBtn = menu.querySelector('.menu-toggle');

            // Add open class
            menu.classList.add('open');
            toggleBtn.setAttribute('aria-expanded', 'true');

            // Track open menu
            this.openMenus.add(menu);

            // Focus management
            setTimeout(() => {
                const firstLink = menu.querySelector('.menu-content a');
                if (firstLink) {
                    firstLink.focus();
                }
            }, 100);

            // Analytics
            const menuType = menu.dataset.menu;
            this.trackEvent('collapsible_menu_opened', menuType);
        }

        closeMenu(menu) {
            const toggleBtn = menu.querySelector('.menu-toggle');

            // Remove open class
            menu.classList.remove('open');
            toggleBtn.setAttribute('aria-expanded', 'false');

            // Remove from open menus set
            this.openMenus.delete(menu);

            // Return focus to toggle button
            toggleBtn.focus();

            // Analytics
            const menuType = menu.dataset.menu;
            this.trackEvent('collapsible_menu_closed', menuType);
        }

        closeAllMenus() {
            if (this.openMenus.size === 0) return;

            const menusToClose = Array.from(this.openMenus);
            menusToClose.forEach(menu => this.closeMenu(menu));
        }

        focusNextMenu() {
            // Find the next menu after the current one
            const allToggleBtns = Array.from(this.menus).map(menu =>
                menu.querySelector('.menu-toggle')
            );

            const currentIndex = allToggleBtns.findIndex(btn =>
                btn.getAttribute('aria-expanded') === 'true'
            );

            if (currentIndex >= 0) {
                const nextIndex = (currentIndex + 1) % allToggleBtns.length;
                allToggleBtns[nextIndex].focus();
            }
        }

        trackEvent(action, menuType) {
            // Analytics hook - replace with your analytics service
            if (typeof gtag !== 'undefined') {
                gtag('event', action, {
                    event_category: 'collapsible_menu',
                    event_label: menuType
                });
            }
        }
    }

    // Accessibility Manager
    class AccessibilityManager {
        constructor() {
            this.init();
        }

        init() {
            this.setupKeyboardNavigation();
            this.setupScreenReaderSupport();
            this.setupFocusManagement();
        }

        setupKeyboardNavigation() {
            // Custom keyboard navigation for custom elements
            document.addEventListener('keydown', (e) => {
                // Handle Enter/Space for buttons that aren't native buttons
                if (e.key === 'Enter' || e.key === ' ') {
                    const target = e.target;
                    if (target.classList.contains('action-btn') &&
                        !target.href &&
                        !target.tagName.toLowerCase() === 'button') {
                        e.preventDefault();
                        target.click();
                    }
                }
            });
        }

        setupScreenReaderSupport() {
            // Add live region for dynamic content updates
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.style.cssText = 'position: absolute; left: -10000px; width: 1px; height: 1px; overflow: hidden;';
            document.body.appendChild(liveRegion);

            this.liveRegion = liveRegion;
        }

        setupFocusManagement() {
            // Ensure focus indicators are always visible
            const style = document.createElement('style');
            style.textContent = `
                *:focus {
                    outline: 2px solid #C49A3A !important;
                    outline-offset: 2px !important;
                }
                
                *:focus:not(:focus-visible) {
                    outline: none !important;
                }
            `;
            document.head.appendChild(style);
        }

        announce(message) {
            if (this.liveRegion) {
                this.liveRegion.textContent = message;
                setTimeout(() => {
                    this.liveRegion.textContent = '';
                }, 1000);
            }
        }
    }

    // Performance Manager
    class PerformanceManager {
        constructor() {
            this.init();
        }

        init() {
            this.setupIntersectionObserver();
            this.optimizeImages();
            this.setupServiceWorker();
        }

        setupIntersectionObserver() {
            // Lazy load images and other content
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.removeAttribute('data-src');
                                imageObserver.unobserve(img);
                            }
                        }
                    });
                }, { rootMargin: '50px' });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }
        }

        optimizeImages() {
            // Add loading="lazy" to all images that don't have it
            document.querySelectorAll('img:not([loading])').forEach(img => {
                img.setAttribute('loading', 'lazy');
            });
        }

        setupServiceWorker() {
            // Register service worker if available
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js').catch(err => {
                    console.log('Service Worker registration failed:', err);
                });
            }
        }
    }

    // Main Application
    class App {
        constructor() {
            this.components = {};
            this.init();
        }

        init() {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.initComponents());
            } else {
                this.initComponents();
            }
        }

        initComponents() {
            try {
                // Initialize all components
                this.components.toastManager = new ToastManager();
                this.components.modalManager = new ModalManager();
                this.components.buttonHandler = new ButtonHandler();
                this.components.videoManager = new VideoManager();
                this.components.mobileSocialMenu = new MobileSocialMenu();
                this.components.collapsibleMenuManager = new CollapsibleMenuManager();
                this.components.accessibilityManager = new AccessibilityManager();
                this.components.performanceManager = new PerformanceManager();

                console.log('All In One Cabo Digital Business Card initialized successfully');

                // Show welcome message for development
                if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                    setTimeout(() => {
                        this.components.toastManager.info('Digital Business Card loaded successfully!', 2000);
                    }, 1000);
                }

            } catch (error) {
                console.error('Error initializing components:', error);
            }
        }
    }

    // Initialize the application
    const app = new App();

    // Expose global functions for testing/debugging
    window.AllInOneCabo = {
        app,
        utils,
        ToastManager,
        ModalManager,
        ButtonHandler,
        VideoManager,
        MobileSocialMenu,
        CollapsibleMenuManager,
        AccessibilityManager,
        PerformanceManager
    };

})();