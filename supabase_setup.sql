-- ============================================================
-- EJECUTA ESTE SQL EN: Supabase Dashboard > SQL Editor
-- Proyecto: fhnnqmbbeeobassvfeox
-- ============================================================

-- 1. TABLA "fotos" — Habilitar lectura y escritura anónima
-- ============================================================

-- Eliminar políticas existentes para recrearlas limpias
DROP POLICY IF EXISTS "Permitir inserción anónima de fotos" ON fotos;
DROP POLICY IF EXISTS "Permitir lectura pública de fotos" ON fotos;
DROP POLICY IF EXISTS "Allow anonymous insert" ON fotos;
DROP POLICY IF EXISTS "Allow public select" ON fotos;

-- Asegurar que RLS esté habilitado
ALTER TABLE fotos ENABLE ROW LEVEL SECURITY;

-- Permitir SELECT (leer fotos) a cualquier usuario
CREATE POLICY "Permitir lectura pública de fotos"
ON fotos
FOR SELECT
TO anon
USING (true);

-- Permitir INSERT (subir fotos) a cualquier usuario
CREATE POLICY "Permitir inserción anónima de fotos"
ON fotos
FOR INSERT
TO anon
WITH CHECK (true);


-- 2. STORAGE — Políticas en storage.objects
-- ============================================================

-- Eliminar políticas anteriores del bucket fotos-album
DROP POLICY IF EXISTS "Permitir subida anónima al álbum" ON storage.objects;
DROP POLICY IF EXISTS "Permitir lectura pública del álbum" ON storage.objects;
DROP POLICY IF EXISTS "Allow anonymous upload fotos-album" ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;

-- Permitir INSERTAR (subir) archivos al bucket "fotos-album"
CREATE POLICY "Permitir subida anónima al álbum"
ON storage.objects
FOR INSERT
TO anon
WITH CHECK (bucket_id = 'fotos-album');

-- Permitir LEER (ver) archivos del bucket "fotos-album"  
CREATE POLICY "Permitir lectura pública del álbum"
ON storage.objects
FOR SELECT
TO anon
USING (bucket_id = 'fotos-album');

-- Permitir ACTUALIZAR archivos (necesario para algunos clientes Supabase)
CREATE POLICY "Permitir actualización en álbum"
ON storage.objects
FOR UPDATE
TO anon
USING (bucket_id = 'fotos-album');

-- ============================================================
-- VERIFICACIÓN: confirma que las políticas existen
-- ============================================================
SELECT schemaname, tablename, policyname, roles, cmd 
FROM pg_policies 
WHERE tablename IN ('fotos', 'objects')
ORDER BY tablename, cmd;
