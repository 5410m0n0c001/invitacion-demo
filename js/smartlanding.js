// SUPABASE CONFIG
const SUPABASE_URL = 'https://fhnnqmbbeeobassvfeox.supabase.co';
// IMPORTANTE: Si la subida falla, verifica que esta sea la clave 'anon public' de:
// Supabase Dashboard > Settings > API > Project API keys > anon public
const SUPABASE_ANON_KEY = 'sb_publishable_JV54Q8BDmg5XDXsq7NwO6Q_YDPBOLrm';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const BUCKET_NAME = 'fotos-album';
const ALBUM_ID = 'boda-demo';

// Sanitizar nombre de archivo
function sanitizeFileName(name) {
    return name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9._-]/g, '_')
        .replace(/_+/g, '_')
        .toLowerCase();
}

// Mostrar error en UI
function showUploadError(message) {
    const statusEl = document.getElementById('upload-status');
    const cameraBtn = document.getElementById('btn-camera');
    if (statusEl) statusEl.style.display = 'none';
    if (cameraBtn) cameraBtn.style.display = 'flex';
    const galleryEl = document.getElementById('photo-gallery');
    if (galleryEl) {
        const errDiv = document.createElement('div');
        errDiv.innerHTML = `<i class='bx bx-error-circle'></i> <span>${message}</span>`;
        errDiv.style.cssText = 'color:#e74c3c;background:rgba(231,76,60,0.1);border:1px solid rgba(231,76,60,0.3);border-radius:10px;padding:12px 16px;margin:10px 0;display:flex;align-items:center;gap:8px;font-size:0.9rem;';
        galleryEl.insertAdjacentElement('beforebegin', errDiv);
        setTimeout(() => errDiv.remove(), 5000);
    }
}

const btnCamera = document.getElementById('btn-camera');
const photoInput = document.getElementById('photo-input');
const uploadStatus = document.getElementById('upload-status');
const uploadSuccess = document.getElementById('upload-success');
const photoGallery = document.getElementById('photo-gallery');

// Handle Camera Button
if (btnCamera) {
    btnCamera.addEventListener('click', () => photoInput.click());
}

// Handle Upload
if (photoInput) {
    photoInput.addEventListener('change', async function(e) {
        const file = e.target.files[0];
        if (!file) return;

        // UI State: Uploading
        btnCamera.style.display = 'none';
        uploadStatus.style.display = 'block';
        uploadSuccess.style.display = 'none';

        try {
            // 1. Upload to Supabase Storage — nombre sanitizado
            const safeFileName = `${Date.now()}-${sanitizeFileName(file.name)}`;
            console.log('[SmartLanding] Subiendo:', safeFileName, 'Tamaño:', file.size);

            const { data: uploadData, error: uploadError } = await supabaseClient.storage
                .from(BUCKET_NAME)
                .upload(safeFileName, file, { cacheControl: '3600', upsert: false });

            if (uploadError) {
                console.error('[SmartLanding] Error Storage:', uploadError);
                if (uploadError.message && uploadError.message.includes('security policy')) {
                    throw new Error('Sin permiso RLS. Configura políticas en Supabase Storage.');
                } else if (uploadError.message && uploadError.message.includes('Bucket not found')) {
                    throw new Error(`Bucket "${BUCKET_NAME}" no encontrado.`);
                } else if (uploadError.statusCode === '401' || uploadError.status === 401) {
                    throw new Error('API Key inválida. Revisa la clave anon en Supabase.');
                }
                throw uploadError;
            }

            // 2. Get Public URL
            const { data: urlData } = supabaseClient.storage
                .from(BUCKET_NAME)
                .getPublicUrl(safeFileName);

            const publicUrl = urlData.publicUrl;
            console.log('[SmartLanding] URL pública:', publicUrl);

            // 3. Insert into Table
            const { error: dbError } = await supabaseClient
                .from('fotos')
                .insert([{ url: publicUrl, album_id: ALBUM_ID }]);

            if (dbError) {
                console.error('[SmartLanding] Error DB:', dbError);
                if (dbError.message && dbError.message.includes('security policy')) {
                    throw new Error('Sin permiso RLS en tabla fotos. Revisa las políticas.');
                }
                throw dbError;
            }
            
            // UI State: Success
            uploadStatus.style.display = 'none';
            uploadSuccess.style.display = 'block';
            console.log('[SmartLanding] ✅ Foto subida:', publicUrl);
            
            // Refresh gallery after a short delay
            setTimeout(() => { fetchSupabaseGallery(); }, 1500);
            
            // Reset after 3 seconds
            setTimeout(function() {
                uploadSuccess.style.display = 'none';
                btnCamera.style.display = 'flex';
                photoInput.value = '';
            }, 3000);

        } catch (err) {
            console.error('[SmartLanding] Upload error:', err);
            const errorMsg = err.message || 'Error desconocido al subir.';
            showUploadError(errorMsg);
            photoInput.value = '';
        }
    });
}

// Fetch Gallery
async function fetchSupabaseGallery() {
    try {
        const { data: resources, error } = await supabaseClient
            .from('fotos')
            .select('*')
            .eq('album_id', ALBUM_ID)
            .order('created_at', { ascending: false })
            .limit(6);

        if (error) throw error;
        renderGallery(resources);
    } catch (err) { 
        console.error('Error fetching gallery:', err); 
        if (photoGallery) photoGallery.innerHTML = '<p class="text-error">Error al cargar.</p>';
    }
}

function renderGallery(resources) {
    if (!photoGallery) return;
    
    if (!resources || resources.length === 0) {
        photoGallery.innerHTML = '<p class="text-muted">No hay recuerdos aún.</p>';
        return;
    }
    
    let html = '';
    for (let i = 0; i < resources.length; i++) {
        const r = resources[i];
        html += `<img src="${r.url}" alt="Recuerdo" style="animation-delay: ${i * 0.1}s">`;
    }
    
    photoGallery.innerHTML = html;
}

// REAL-TIME SUBSCRIPTION
function initRealtimeSubscription() {
    supabaseClient
        .channel('public:fotos_smart')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'fotos', filter: `album_id=eq.${ALBUM_ID}` }, (payload) => {
            fetchSupabaseGallery();
        })
        .subscribe();
}

// Initial Load
window.addEventListener('load', () => {
    fetchSupabaseGallery();
    initRealtimeSubscription();
});
