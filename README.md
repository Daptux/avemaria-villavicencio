# AVEMARÍA Villavicencio

Landing page inmersiva y mobile-first del restaurante **AVEMARÍA** (Villavicencio, Colombia) — *Asado · Parche · Picnic*.

🔗 **Sitio en producción:** https://avemaria-psi.vercel.app
📷 **Instagram:** [@avemaria_villavicencio](https://www.instagram.com/avemaria_villavicencio/)

## Sobre el proyecto

- **Página única** construida en [`immersive.html`](immersive.html) — HTML + Tailwind CSS (vía CDN) + JavaScript vanilla, sin paso de build.
- **Carta interactiva** ("El Altar del Fuego"): 7 categorías (Entradas, Carnes, Acompañamientos, Armados, Bebidas, Postres, Licores) con paneles desplegables, sub-pestañas y precios reales.
- Imágenes del menú con marca de agua de la marca, optimizadas para web.
- Despliegue continuo en **Vercel**.

## Estructura

- `immersive.html` — el sitio completo (markup, estilos y lógica).
- `assets/` — imágenes y videos usados por el sitio.
- `vercel.json` — configuración de despliegue (rewrites).
- `.vercelignore` — carpetas de material fuente excluidas del despliegue.
- Carpetas de material fuente (`Carta menú`, `Fondo`, `Lianas`, etc.) — insumos de diseño.

## Desarrollo

No requiere instalación. Abre `immersive.html` en el navegador, o sírvelo con cualquier servidor estático.

Despliegue a producción (Vercel CLI):

```bash
vercel deploy --prod
```
