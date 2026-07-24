# Lander Lliguicota — Portfolio

Portafolio personal construido con React + Vite + Tailwind CSS v4 + Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
```

El resultado queda en `dist/`, listo para desplegar en Vercel o Netlify (framework preset: Vite).

## Pendiente de tu parte

- **Foto de perfil**: coloca tu foto en `public/images/profile.jpg` (se usa tal cual, sin recortes automáticos). Mientras no exista, se muestra un placeholder.
- **Repos de proyectos**: los botones "GitHub" y "View Project" en `Projects.jsx` apuntan a `#` — enlázalos a tus repos reales.
- **Project Gallery**: las tarjetas en `Gallery.jsx` son marcadores de posición con etiqueta; reemplázalas con capturas reales cuando las tengas.

Ya actualizados con tus datos del CV: email (`landerx345@gmail.com`), GitHub (`github.com/LanderXavier`), LinkedIn (`linkedin.com/in/lander-lliguicota`), certificaciones (Scrum Foundation, Samsung Innovation Campus) y el proyecto 03 (automatización en Policía Nacional del Ecuador). Se quitó el proyecto del catálogo de Cauchos Junior.

## Estructura

```
src/
  components/
    Navbar, Hero, About, Expertise, Projects,
    Journey, Skills, Research, Certifications,
    Gallery, Contact, Footer, SectionLabel, BrandIcons
  index.css   -> tokens de diseño (colores, tipografía) vía @theme de Tailwind v4
  App.jsx     -> ensambla todas las secciones
```

## Sistema de diseño

- **Paleta**: fondo casi negro (#0B0E13), acento cian-señal (#4CE0C7) e indigo secundario (#6C7CF0).
- **Tipografía**: Space Grotesk (display), Inter (cuerpo), IBM Plex Mono (etiquetas/datos).
- **Elemento de firma**: líneas de "trace" tipo señal/pipeline en el Hero y un diagrama de arquitectura SVG en el proyecto AI Dental Assistant, evocando el mundo de pipelines de IA/automatización.
