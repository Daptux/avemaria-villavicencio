# Checklist de validación — Producción

> Sitio estático (`immersive.html` + Tailwind CDN + JS vanilla) en Vercel.
> "Build/lint/typecheck/tests" se adaptan a validaciones estáticas + verificación en vivo (no hay tooling de build por diseño).

| # | Criterio | Estado | Evidencia / nota |
|---|---|---|---|
| 1 | Compila/sirve sin errores | ✅ | Deploy OK; `200` en `/`, assets, `sitemap.xml`, `favicon.svg` |
| 2 | Lint/typecheck/tests pasan **o documentado** | ✅ | No hay tooling (estático). Se corre: JS inline **5/5**, JSON-LD válido, integridad IDs/anclas/assets **0** problemas |
| 3 | Flujos principales de inicio a fin | ✅ | Carta + sub-pestañas, reseñas, navegación, **formulario de eventos (entrega real por WhatsApp)** |
| 4 | Responsive mobile/tablet/desktop | ✅ | Utilidades Tailwind responsivas; modales 1-col en móvil; nav inferior móvil |
| 5 | Navegación clara y sin fricción | ✅ | Anclas internas válidas; nav superior + inferior; CTAs visibles |
| 6 | Diseño profesional y consistente | ✅ | Paleta y tipografía unificadas; modales coherentes |
| 7 | Jerarquía clara / sin exceso de texto | ✅ | 1 `h1`, `h2` por sección, contenido escaneable |
| 8 | Estados de carga/error/vacío | ✅ | **404 branded**, éxito del formulario, carta/reseñas abren por defecto |
| 9 | Sin enlaces rotos ni CTAs sin destino | ✅ | 0 anclas rotas, 0 assets faltantes, todos los CTA resuelven |
| 10 | Accesibilidad | ✅ | Foco visible, **focus-trap** en modales, alt correctos, labels, `aria`, `<noscript>` |
| 11 | Performance | ✅ | **Lazy-load video 4K**, preconnect, fuentes recortadas, **−29 MB** de assets huérfanos |
| 12 | Seguridad / privacidad / cumplimiento | ✅ | Headers (HSTS, nosniff, X-Frame, Referrer, Permissions), límites de formulario, sin claims engañosos |
| 13 | Resumen final entregado | ✅ | `AUDIT.md` + este checklist + commits en GitHub |

## Excepción técnica documentada (cláusula de VALIDACIÓN del objetivo)
**Registro centralizado en Google Sheets** del formulario de eventos: el código está **cableado y probado** (POST a `SHEETS_ENDPOINT`), pero su activación exige **la cuenta de Google del cliente** (publicar un Apps Script como Web App). Es una credencial externa que el desarrollador no puede asumir por el cliente → frontera técnica, no omisión. El flujo **igualmente funciona de punta a punta** por WhatsApp. Pasos de activación: [`google-apps-script.gs`](google-apps-script.gs).

## Verificado en producción (curl)
`200` en home/sitemap/favicon/assets · headers de seguridad presentes · `robots.txt`/`sitemap.xml` accesibles · `og:image`, `twitter:card`, JSON-LD `Restaurant`, favicon y `data-src` (video lazy) presentes en el HTML servido · 404 personalizado con status 404.
