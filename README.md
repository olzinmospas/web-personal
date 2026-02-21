# Antonio Romeo — Sitio Web Personal
## Guía de despliegue en GitHub Pages

---

## PASO 1 — Requisitos previos

Necesitas tener instalado en tu ordenador:
- **Git**: https://git-scm.com/downloads
- Una cuenta de **GitHub**: https://github.com

Comprueba que Git está instalado abriendo la terminal y escribiendo:
```bash
git --version
```

---

## PASO 2 — Clona tu repositorio

```bash
git clone https://github.com/TU-USUARIO/web-personal.git
cd web-personal
```

Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub.

---

## PASO 3 — Copia los archivos del proyecto

Descomprime el ZIP `antonio-romeo-web.zip` que te ha dado Claude.
Copia TODO su contenido dentro de la carpeta `web-personal`:

```bash
# En Mac/Linux:
cp -r /ruta/donde/descomprimiste/web-personal/* ~/web-personal/

# En Windows (PowerShell):
Copy-Item -Recurse C:\ruta\web-personal\* C:\Users\TU-USUARIO\web-personal\
```

---

## PASO 4 — Configura el CMS (Decap CMS)

Abre el archivo `admin/config.yml` con cualquier editor de texto
y cambia esta línea:

```yaml
repo: TU-USUARIO/web-personal
```

por tu usuario real de GitHub. Ejemplo:

```yaml
repo: antonioromeo/web-personal
```

---

## PASO 5 — Sube el proyecto a GitHub

```bash
cd web-personal
git add .
git commit -m "feat: sitio web Antonio Romeo v1"
git push origin main
```

---

## PASO 6 — Activa GitHub Pages

1. Ve a tu repositorio en https://github.com/TU-USUARIO/web-personal
2. Haz clic en **Settings** (arriba a la derecha)
3. En el menú izquierdo, haz clic en **Pages**
4. En "Source", selecciona **Deploy from a branch**
5. En "Branch", selecciona **main** y la carpeta **/ (root)**
6. Haz clic en **Save**

En 1-2 minutos tu sitio estará en:
**https://TU-USUARIO.github.io/web-personal/**

---

## PASO 7 — Configura el CMS para editar crónicas

El panel de administración del CMS estará en:
**https://TU-USUARIO.github.io/web-personal/admin/**

Para que funcione necesitas activar la autenticación OAuth con GitHub:

1. Ve a https://github.com/settings/developers
2. Haz clic en **New OAuth App**
3. Rellena:
   - Application name: `Antonio Romeo CMS`
   - Homepage URL: `https://TU-USUARIO.github.io/web-personal`
   - Authorization callback URL: `https://api.netlify.com/auth/done`
4. Guarda el **Client ID** y **Client Secret**
5. En Netlify (https://app.netlify.com), conecta tu repo y activa el Identity service

**Alternativa más sencilla**: usa **Forestry.io** o **TinaCMS** que requieren menos configuración.

---

## PASO 8 — Dominio personalizado (opcional)

Si quieres usar `antonioromeo.es` en lugar de `github.io`:

1. En tu proveedor de dominio, añade un registro CNAME:
   ```
   www → TU-USUARIO.github.io
   ```
2. En GitHub Pages (Settings → Pages), escribe tu dominio en "Custom domain"
3. Marca "Enforce HTTPS"

---

## Estructura del proyecto

```
web-personal/
├── index.html              ← HOME (página principal)
├── hemeroteca/
│   └── index.html          ← Grid de 60+ crónicas con filtros
├── obra/
│   └── index.html          ← Catálogo de libros
├── admin/
│   ├── index.html          ← Panel CMS (Decap)
│   └── config.yml          ← Configuración del CMS ← EDITA TU USUARIO AQUÍ
└── assets/
    ├── css/
    │   ├── style.css       ← Estilos globales
    │   └── home.css        ← Estilos de la home
    ├── js/
    │   └── main.js         ← JavaScript (filtros, animaciones)
    └── img/
        ├── foto-autor.jpg
        ├── justo-portada.jpg
        └── luces-avion.png
```

---

## Añadir una nueva crónica manualmente

1. Crea un nuevo archivo HTML en `hemeroteca/` con el slug de la crónica.
   Ejemplo: `hemeroteca/nombre-de-la-cronica.html`

2. En `hemeroteca/index.html`, añade una tarjeta nueva al grid:

```html
<a class="cronica-item" data-tematica="concierto" href="nombre-de-la-cronica.html">
  <div class="ci-top">
    <span class="ci-tag">Concierto</span>
    <span class="ci-date">Mes, Año</span>
    <span class="ci-medio">Rockdelux</span>
  </div>
  <h2 class="ci-title">Título de la crónica</h2>
  <p class="ci-excerpt">Extracto de 2-3 líneas...</p>
  <span class="ci-more">Leer crónica</span>
</a>
```

3. Guarda, añade al commit y sube:
```bash
git add .
git commit -m "add: nueva crónica - nombre-de-la-cronica"
git push
```

---

## Soporte

Proyecto desarrollado con Claude (Anthropic).
Para modificaciones, continúa la conversación en claude.ai.
