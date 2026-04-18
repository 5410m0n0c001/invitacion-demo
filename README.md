# Invitación Digital Smart - Plantilla Reutilizable

Esta es una plantilla premium para invitaciones digitales de eventos (bodas, XV años, bautizos, etc.), diseñada para ser ligera, visualmente impactante y altamente interactiva.

## 🚀 Tecnologías Usadas

- **Frontend**: HTML5 Semántico, CSS3 (Vanilla), JavaScript (ES6+).
- **Animaciones**: CSS Animations, Intersection Observer API.
- **Backend**: [Supabase](https://supabase.com/) (Base de datos y Storage en tiempo real).
- **Iconos**: [Boxicons](https://boxicons.com/).
- **Tipografía**: Google Fonts (Playfair Display, Montserrat).
- **Despliegue**: Optimizado para GitHub Pages.

## 🏗️ Arquitectura y Componentes

1.  **Entrada de Video (`index.html`)**: Experiencia inmersiva con video full-screen (`sobre.mp4`).
2.  **Módulos de Invitación**: Secciones dinámicas (RSVP, ubicación, cuenta regresiva, mesa de regalos).
3.  **Smart Landing (`smartlanding.html`)**: Página ligera independiente para carga rápida de fotos desde código QR.
4.  **Integración Supabase**: Manejo de fotos en tiempo real (Realtime) y almacenamiento en cubo de objetos (Storage).

## 📸 Gestión de Galería Dinámica

La galería está diseñada para resaltar la interactividad del evento:
- **Foto Destacada**: La última foto subida por cualquier invitado aparece en tamaño grande con un distintivo de "Última Foto".
- **Cuadrícula de Miniaturas**: El resto de los recuerdos se organizan en una cuadrícula elegante debajo de la principal.
- **Tiempo Real**: Gracias a Supabase Realtime, las fotos nuevas aparecen instantáneamente en la pantalla de todos los invitados sin refrescar la página.

## ⚙️ Configuración de Supabase (Multi-Álbum)

Esta plantilla permite gestionar múltiples eventos independientes desde un mismo proyecto de Supabase.

### 1. Requisitos en Supabase
- **Tabla `fotos`**: Crear una tabla pública con las siguientes columnas:
  - `id` (int8/uuid, primary key)
  - `created_at` (timestamptz, default: now())
  - `url` (text)
  - `album_id` (text)
- **Realtime**: Activar la replicación para la tabla `fotos` en `Database > Replication`.
- **Storage**: Crear un bucket público llamado `fotos-album`.

### 2. Configuración en el Código
Para implementar esta función en un nuevo proyecto o separar álbumes:

1.  Abre `js/script.js` y `js/smartlanding.js`.
2.  Localiza las constantes al inicio del archivo:
    ```javascript
    const SUPABASE_URL = 'https://tu-proyecto.supabase.co';
    const SUPABASE_ANON_KEY = 'tu-anon-key';
    const ALBUM_ID = 'nombre-de-tu-evento'; // Ejemplo: 'boda-ana-y-pedro'
    ```
3.  **Independencia de Álbumes**: Al cambiar el `ALBUM_ID`, la invitación solo mostrará y subirá fotos asociadas a ese identificador, permitiendo reutilizar el mismo backend para diferentes eventos de forma aislada.

## 📁 Estructura del Proyecto

```text
├── css/
│   ├── styles.css        # Estilos principales de la invitación
│   └── smartlanding.css  # Estilos ligeros para la página de fotos
├── js/
│   ├── script.js         # Lógica principal, navegación y Realtime
│   └── smartlanding.js   # Lógica de subida a Supabase y mini-galería
├── index.html            # Punto de entrada principal (Invitación)
├── smartlanding.html     # Página de subida rápida para invitados
└── ...
```

---
*Desarrollado con ❤️ para momentos inolvidables.*
