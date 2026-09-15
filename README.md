# Portfolio — Joaquín Orlandau Rosso

Sitio personal de una sola página: trabajo seleccionado, experiencia, formación y contacto.
En producción en [portfolio-joaquin-orlandau-rosso.vercel.app](https://portfolio-joaquin-orlandau-rosso.vercel.app/).

## Stack

- React 18 (Create React App) + Sass
- Sin librerías de animación ni UI: aparición al scroll con `IntersectionObserver`, tema claro/oscuro y ES/EN con `localStorage`
- Tipografía: Instrument Serif (títulos) + IBM Plex Sans (texto), vía Google Fonts

## Estructura

```
public/
  cv/            CV en PDF
  imgs/          foto y miniaturas de proyectos (3:2, 1200×800)
src/
  content.js     todo el texto y los datos de proyectos, en ES y EN
  styles/        tokens de color y tipografía (index.scss)
  hooks/         useReveal (aparición al scroll)
  components/    Navbar · Hero · Work · Experience · About · Contact · Footer
```

Para cambiar textos, proyectos o experiencia alcanza con editar `src/content.js`.
Los colores viven como variables CSS en `src/styles/index.scss` (`:root` claro, `.dark` oscuro).

## Comandos

```bash
npm install
npm start       # desarrollo en http://localhost:3000
npm run build   # producción en /build
```

## Deploy

Push a `main` → Vercel construye y publica automáticamente.
