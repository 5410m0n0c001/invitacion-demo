const driver = window.driver.js.driver;

const driverObj = driver({
    showProgress: true,
    steps: [
        {
            element: '.hero',
            popover: {
                title: 'Personalización Total',
                description: 'Esta portada es <b>100% personalizable</b>. Podemos colocar tu marca, logotipo animado, videos exclusivos y álbumes de fotos para impactar desde el primer segundo.',
                side: "bottom",
                align: 'center'
            }
        },
        {
            element: '#social-toggle',
            popover: {
                title: 'Tus Redes Sociales',
                description: '<b>Todas tus redes</b> (Facebook, Instagram, LinkedIn, TikTok, etc.) se despliegan aquí de forma elegante. Conecta con tus clientes en cada plataforma con un solo toque.',
                side: "left",
                align: 'center'
            },
            onHighlightStarted: () => {
                const menu = document.querySelector('.collapsible-menu-right');
                if (!menu.classList.contains('open')) {
                    document.getElementById('social-toggle').click();
                }
            }
        },
        {
            element: '#services-toggle',
            popover: {
                title: 'Nuestros Servicios',
                description: 'Aquí puedes mostrar <b>todos tus servicios o navegar directamente a tu sitio web</b>. Si aún no tienes uno, podemos diseñarlo para que esta función sea aún más poderosa y profesional.',
                side: "right",
                align: 'center'
            },
            onHighlightStarted: () => {
                const menu = document.querySelector('.collapsible-menu-left');
                if (!menu.classList.contains('open')) {
                    document.getElementById('services-toggle').click();
                }
            }
        },
        {
            element: '.share-btn',
            popover: {
                title: 'Compartir Inteligente',
                description: 'Este botón te permite compartir tu tarjeta por <b>WhatsApp, Facebook, Email o cualquier app</b> instalada. Incluye un mensaje precargado para que tus contactos sepan quién eres al instante.',
                side: "top",
                align: 'center'
            }
        },
        {
            element: '.hero-title',
            popover: {
                title: 'Siempre Activa',
                description: 'Tu tarjeta digital <b>no tiene vigencia</b>. Permanecerá en línea por tiempo indefinido, siendo tu herramienta de ventas más poderosa las 24 horas del día.',
                side: "center",
                align: 'center'
            }
        }
    ],
    onDestroyStarted: () => {
        document.querySelectorAll('.collapsible-menu').forEach(m => m.classList.remove('open'));
    }
});

document.getElementById('start-tour').addEventListener('click', () => {
    driverObj.drive();
});

// Auto-activate tour on every reload as requested
window.addEventListener('load', () => {
    // Small delay to ensure all assets (videos/images) are ready
    setTimeout(() => {
        driverObj.drive();
    }, 1000);
});
