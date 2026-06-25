# Auditoría de producción — AVEMARÍA Villavicencio

Fecha: 2026-06. Alcance: revisión y endurecimiento del sitio (`immersive.html`) para dejarlo listo para producción.

## Stack (contexto)
Sitio **estático de un solo archivo** (`immersive.html`): HTML + Tailwind CSS vía CDN + JavaScript vanilla, sin paso de build ni dependencias npm. Deploy en **Vercel** (`vercel.json`). Por eso "build/lint/typecheck/tests" se adaptan a validaciones estáticas (sintaxis, integridad, headers en vivo).

## Validaciones ejecutadas
- **Sintaxis JS:** 5/5 bloques `<script>` inline sin errores (Node `vm.Script`).
- **JSON-LD:** válido (`JSON.parse`).
- **IDs duplicados:** ninguno.
- **Anclas internas (`#`):** todas con destino existente (0 rotas).
- **Assets referenciados (`src`/`href`/`data-src`):** todos existen en disco (0 faltantes).
- **Headers en vivo (curl a producción):** verificados (ver abajo).
- **Enlaces externos:** los `target="_blank"` ya llevan `rel="noopener"`; los `wa.me` abren en la misma pestaña (sin riesgo de `opener`).

## Cambios realizados

### SEO técnico
- `<head>`: `theme-color`, `robots`, `author`, `canonical`.
- **Open Graph** + **Twitter Card** completos (título, descripción, `og:image` con el hero, `og:locale` es_CO).
- **JSON-LD `Restaurant`**: nombre, descripción, dirección (Km 2 vía antigua Restrepo, Villavicencio, Meta, CO), geo (4.1735671, -73.6431215), teléfono, menú, reservas, `sameAs` Instagram.
- **`favicon.svg`** (marca con llama), `robots.txt` y `sitemap.xml`.

### Seguridad (`vercel.json`)
- Headers: `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` (cámara/micrófono/geo/topics deshabilitados), `Strict-Transport-Security`.
- `Cache-Control` para `/assets/*` (1 día + `stale-while-revalidate`) y favicon.
- **Formulario de eventos (flujo cerrado de punta a punta):** validación nativa (`required`, tipos) + `maxlength`/`max`. Al enviar, **entrega la solicitud al WhatsApp del restaurante** con todos los campos estructurados (nombre, teléfono, correo, tipo, personas, fecha/hora, detalles), abre WhatsApp en una pestaña nueva y muestra pantalla de confirmación con **enlace de respaldo** por si el navegador bloquea el pop-up. Reemplazable/duplicable a Google Sheets más adelante reutilizando el objeto `data`.

### Accesibilidad
- **Foco visible** global para teclado (`:focus-visible` turquesa) en enlaces, botones y elementos focusables.
- **Eliminado control muerto:** el botón hamburguesa no tenía acción (la navegación móvil ya la da la barra inferior fija). Se removió y se reubicó el botón de Instagram al borde.
- **`<noscript>`** de degradación elegante (carta/eventos requieren JS) con CTA a WhatsApp.
- Imágenes con `alt` (las decorativas con `alt=""` + contenedor `aria-hidden`); video decorativo con `aria-hidden`; modales con `role="dialog"`/`aria-modal`; labels asociadas a inputs.
- **Trampa de foco (focus trap)** en los modales de carta y de eventos: `Tab`/`Shift+Tab` ciclan dentro del modal y no se escapan al fondo. Cierre con `Esc`, backdrop y botón.
- **Estados de error de navegación:** `404.html` branded (status 404, `noindex`) con CTA a inicio y a WhatsApp.

### Performance
- **Lazy-load del video de fondo 4K (~10 MB):** ya no se descarga en la carga inicial; se carga con `IntersectionObserver` sólo cuando la sección de la carta se acerca (`rootMargin 400px`). `preload="none"`.
- **Fuentes:** removidas **Pacifico** (clase `.font-script` sin uso) y el webfont **DM Sans** (sólo fallback redundante de Montserrat) → 2 descargas menos, sin cambio visual.
- **`preconnect`** a `fonts.googleapis.com` y `fonts.gstatic.com`.
- Imágenes del menú optimizadas previamente a ~1000px / JPEG (~140–210 KB c/u); hero con `fetchpriority="high"` (1440×810, 345 KB); mapa en `<iframe loading="lazy">`.
- **Limpieza de assets:** removidos **15 archivos huérfanos (~29 MB)** de `assets/avemaria/` (versiones viejas de video y de las lianas que la página ya no referencia). Verificado que 0 assets en uso se perdieron. Recuperables desde el historial de git / carpetas fuente.

## Verificación en producción (curl)
- `200 OK` en `/`, `/sitemap.xml`, `/favicon.svg`, `/assets/...`.
- Headers de seguridad presentes en `/`.
- `robots.txt` y `sitemap.xml` accesibles; `og:image`, `twitter:card`, JSON-LD `Restaurant`, favicon y `data-src` (video lazy) presentes en el HTML servido.

## Riesgos restantes / próximos pasos
1. **Formulario de eventos:** flujo **cerrado de punta a punta** vía WhatsApp (sin backend ni credenciales). *Mejora opcional futura:* duplicar la entrega a **Google Sheets** (Apps Script) para tener un registro centralizado además del chat — no bloqueante.
2. **Tailwind por CDN:** funciona, pero en producción ideal compilar Tailwind a un CSS estático (menos JS en cliente, sin advertencia de consola, mejor Web Vitals). Cambio mayor (introduce build) — recomendado a futuro.
3. **CSP (Content-Security-Policy):** no se añadió una CSP estricta para no arriesgar romper el sitio (Tailwind CDN usa estilos/eval inline + Google Fonts + iframe de Maps). Recomendado definirla y **probarla** antes de activar.
4. **Video 4K vs. peso:** a pedido del cliente se mantiene 4K (~10 MB); mitigado con lazy-load. Si se prioriza velocidad en datos móviles, existe la opción de servir una versión 1080p más liviana.
5. **Dominio:** las URLs canónicas/OG usan `avemaria-psi.vercel.app`. Si se migra a dominio propio, actualizar `canonical`, OG, `sitemap.xml`, `robots.txt` y el JSON-LD.
6. **Menú en JS (SEO):** los precios/platos se construyen con JS (no están en el HTML estático). Google los indexa, pero para máxima cobertura SEO podría pre-renderizarse el contenido de la carta.
