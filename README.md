# Invitación Digital Smart - Plantilla Reutilizable

Plantilla premium para invitaciones digitales de eventos (bodas, XV años, bautizos, etc.), diseñada para ser ligera, visualmente impactante e interactiva.

## 🚀 Tecnologías Usadas

- **Frontend**: HTML5 Semántico, CSS3 (Vanilla), JavaScript (ES6+).
- **Animaciones**: CSS Animations, Intersection Observer API.
- **Backend de Galería**: [Supabase](https://supabase.com/) (Base de datos PostgreSQL + Storage + Realtime).
- **Iconos**: [Boxicons](https://boxicons.com/).
- **Tipografía**: Google Fonts (Playfair Display, Montserrat).
- **Despliegue**: Optimizado para GitHub Pages.

## 🏗️ Arquitectura y Componentes

1. **Entrada de Video (`index.html`)**: Experiencia inmersiva con video full-screen (`sobre.mp4`).
2. **Módulos de Invitación**: Secciones dinámicas (RSVP, ubicación, cuenta regresiva, mesa de regalos).
3. **Smart Landing (`smartlanding.html`)**: Página ligera independiente para carga rápida de fotos desde código QR.
4. **Integración Supabase**: Galería dinámica en tiempo real con Storage para archivos y Realtime para actualizaciones instantáneas.

## 📸 Gestión de Galería Dinámica

- **Foto Destacada**: La última foto subida aparece en tamaño grande con distintivo "Última Foto".
- **Cuadrícula de Miniaturas**: El resto se organiza en cuadrícula elegante.
- **Tiempo Real**: Gracias a Supabase Realtime, las fotos aparecen instantáneamente en todos los dispositivos sin recargar.
- **Multi-Álbum**: Un mismo proyecto de Supabase puede servir múltiples eventos usando el campo `album_id`.

## 📁 Estructura del Proyecto

```text
├── css/
│   ├── styles.css            # Estilos principales de la invitación
│   └── smartlanding.css      # Estilos ligeros para la página de fotos
├── js/
│   ├── script.js             # Lógica principal, navegación, galería y Realtime
│   └── smartlanding.js       # Lógica de subida a Supabase y mini-galería QR
├── supabase_setup.sql        # Script SQL listo para ejecutar en Supabase
├── index.html                # Punto de entrada principal (Invitación)
├── smartlanding.html         # Página de subida rápida para invitados
└── ...
```

---

# 🔄 Manual de Migración: Cloudinary → Supabase

> Este manual documenta el proceso exacto que se siguió para migrar la galería de fotos de este repositorio de Cloudinary a Supabase. Está diseñado para replicarse en proyectos independientes basados en esta plantilla.

## ¿Por qué migrar?

| Aspecto | Cloudinary | Supabase |
|---|---|---|
| Subida de fotos | Via API con firma backend | Directa desde el browser con SDK |
| Tiempo real | No nativo (polling) | Sí, nativo con Realtime |
| Multi-álbum | Por carpetas | Por columna `album_id` en tabla |
| Autenticación | API Key con secret | Anon Key pública (segura con RLS) |
| Costo | Límite mensual de ancho de banda | 1 GB Storage gratis |
| Complejidad | Requiere backend o Cloudinary Widget | 100% frontend, sin servidor |

---

## PASO 1 — Crear el Proyecto en Supabase

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta gratuita.
2. Haz clic en **"New Project"**.
3. Asigna un nombre (ej. `invitaciones-eventos`) y una contraseña segura.
4. Selecciona la región más cercana (ej. `South America (São Paulo)`).
5. Espera ~2 minutos a que se inicialice el proyecto.

---

## PASO 2 — Crear la Tabla `fotos`

Ve a **Table Editor** → **New Table** y configura:

| Campo | Tipo | Opciones |
|---|---|---|
| `id` | `int8` | Primary Key, Auto-increment |
| `created_at` | `timestamptz` | Default: `now()` |
| `url` | `text` | NOT NULL |
| `album_id` | `text` | NOT NULL |

O ejecuta directamente en **SQL Editor** (`Database > SQL Editor > New Query`):

```sql
CREATE TABLE fotos (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  url text NOT NULL,
  album_id text NOT NULL
);
```

---

## PASO 3 — Crear el Bucket de Storage

1. Ve a **Storage** en el panel lateral.
2. Clic en **"New bucket"**.
3. Nombre: `fotos-album` *(exactamente así, con guión)*.
4. Marcar como **Public bucket** ✅.
5. Clic en **Create bucket**.

---

## PASO 4 — Configurar Políticas RLS

Las **Row Level Security (RLS)** controlan quién puede leer/escribir. Sin ellas, la subida fallará con error `security policy`.

Ve a **SQL Editor** y ejecuta el contenido del archivo `supabase_setup.sql` incluido en este repositorio:

```sql
-- Habilitar RLS en la tabla
ALTER TABLE fotos ENABLE ROW LEVEL SECURITY;

-- Permitir SELECT (leer fotos) a usuarios anónimos
CREATE POLICY "Permitir lectura pública de fotos"
ON fotos FOR SELECT TO anon
USING (true);

-- Permitir INSERT (subir fotos) a usuarios anónimos
CREATE POLICY "Permitir inserción anónima de fotos"
ON fotos FOR INSERT TO anon
WITH CHECK (true);

-- Permitir subida al bucket de Storage
CREATE POLICY "Permitir subida anónima al álbum"
ON storage.objects FOR INSERT TO anon
WITH CHECK (bucket_id = 'fotos-album');

-- Permitir lectura pública del bucket
CREATE POLICY "Permitir lectura pública del álbum"
ON storage.objects FOR SELECT TO anon
USING (bucket_id = 'fotos-album');
```

---

## PASO 5 — Activar Realtime

1. Ve a **Database → Replication**.
2. Busca la tabla `fotos` en la lista.
3. Activa el toggle de **Realtime** para esa tabla ✅.

---

## PASO 6 — Obtener las Credenciales

1. Ve a **Settings → API**.
2. Copia los valores de:
   - **Project URL**: `https://xxxxxxxxxxxx.supabase.co`
   - **anon public key**: `sb_publishable_...` *(NO uses la `service_role` key)*

---

## PASO 7 — Implementar en el Proyecto

### 7a. Incluir el SDK de Supabase en el HTML

Agrega este script **antes** de tu `script.js`:

```html
<!-- En el <head> o antes del cierre </body> -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/script.js"></script>
```

### 7b. Configurar las constantes en `script.js`

Al inicio del archivo de JavaScript principal, define:

```javascript
// =============================================
// CONFIGURACIÓN SUPABASE — CAMBIAR POR PROYECTO
// =============================================
const SUPABASE_URL = 'https://TU_PROYECTO.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_TU_CLAVE_ANON';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const BUCKET_NAME = 'fotos-album';
const ALBUM_ID = 'nombre-unico-de-tu-evento'; // ej. 'boda-ana-pedro-2026'
```

> ⚠️ **El `ALBUM_ID` es la clave del sistema multi-álbum.** Cada proyecto o evento debe tener un `ALBUM_ID` único. Todos los proyectos pueden compartir el mismo proyecto de Supabase.

### 7c. Función de sanitización de nombres (obligatoria)

Para evitar errores con archivos que tengan espacios, acentos o caracteres especiales:

```javascript
function sanitizeFileName(name) {
    return name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')      // eliminar acentos
        .replace(/[^a-zA-Z0-9._-]/g, '_')    // caracteres inválidos → _
        .replace(/_+/g, '_')                   // múltiples _ → uno
        .toLowerCase();
}
```

### 7d. Función de subida de foto

```javascript
async function uploadPhoto(file) {
    const safeFileName = `${Date.now()}-${sanitizeFileName(file.name)}`;

    // 1. Subir archivo al Storage
    const { error: uploadError } = await supabaseClient.storage
        .from(BUCKET_NAME)
        .upload(safeFileName, file, { cacheControl: '3600', upsert: false });

    if (uploadError) throw uploadError;

    // 2. Obtener URL pública
    const { data: urlData } = supabaseClient.storage
        .from(BUCKET_NAME)
        .getPublicUrl(safeFileName);

    // 3. Registrar en la tabla con album_id
    const { error: dbError } = await supabaseClient
        .from('fotos')
        .insert([{ url: urlData.publicUrl, album_id: ALBUM_ID }]);

    if (dbError) throw dbError;

    return urlData.publicUrl;
}
```

### 7e. Función para cargar la galería

```javascript
async function fetchSupabaseGallery() {
    const { data, error } = await supabaseClient
        .from('fotos')
        .select('*')
        .eq('album_id', ALBUM_ID)
        .order('created_at', { ascending: false });

    if (error) { console.error(error); return; }
    renderGallery(data);
}
```

### 7f. Suscripción a Realtime (actualizaciones instantáneas)

```javascript
function initRealtimeSubscription() {
    supabaseClient
        .channel('fotos_canal')
        .on('postgres_changes', {
            event: 'INSERT',
            schema: 'public',
            table: 'fotos',
            filter: `album_id=eq.${ALBUM_ID}`
        }, () => {
            fetchSupabaseGallery(); // Recarga la galería al detectar una foto nueva
        })
        .subscribe();
}
```

---

## PASO 8 — Replicar en un Álbum Independiente (Nuevo Proyecto)

Para implementar esta galería en un proyecto basado en esta plantilla con su **propio álbum aislado**:

1. **Reutiliza el mismo proyecto de Supabase** (no necesitas crear uno nuevo).
2. **Copia `script.js`** y `smartlanding.js` al nuevo proyecto.
3. **Cambia únicamente el `ALBUM_ID`**:
   ```javascript
   const ALBUM_ID = 'xv-sofia-2026'; // Nombre único del nuevo evento
   ```
4. El nuevo proyecto mostrará y recibirá **solo las fotos de ese álbum**, completamente aislado de otros eventos.
5. Los archivos en Storage se guardan todos en el mismo bucket `fotos-album` pero se identifican por la URL que contiene el nombre único generado con `Date.now()`.

---

## 🛠️ Diagnóstico de Errores Comunes

| Error | Causa | Solución |
|---|---|---|
| `security policy` en Storage | Falta política RLS de INSERT en `storage.objects` | Ejecutar el SQL del Paso 4 |
| `security policy` en tabla | Falta política RLS en tabla `fotos` | Ejecutar el SQL del Paso 4 |
| `Bucket not found` | El bucket no se creó o tiene otro nombre | Verificar nombre exacto: `fotos-album` |
| `401 Unauthorized` | API Key incorrecta | Usar la clave `anon public`, NO la `service_role` |
| Fotos no aparecen en tiempo real | Realtime no activado | Activar en `Database → Replication → fotos` |
| Nombre de archivo con error | Espacios o acentos en el nombre del archivo | Aplicar la función `sanitizeFileName()` |

---

*Desarrollado con ❤️ para momentos inolvidables.*
