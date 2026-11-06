# Portfolio — Joaquín Orlandau Rosso

Sitio personal de una sola página: sitios para clientes, proyectos propios, experiencia, formación y contacto.
En producción en [portfolio-joaquin-orlandau-rosso.vercel.app](https://portfolio-joaquin-orlandau-rosso.vercel.app/).

## Stack

- React 18 (Create React App) + Sass, sin librerías de UI ni de animación.
- Español e inglés (se elige solo por el idioma del navegador, se puede forzar con `?lang=en` y queda guardado).
- Tema claro y oscuro (sigue al sistema, queda guardado y se aplica antes del primer pintado).
- Animación con CSS y `IntersectionObserver`: el título del hero entra palabra por palabra, la foto y las
  capturas se mueven apenas con el mouse y el scroll (`src/lib/capas.js`) y los bloques aparecen al
  scrollear. Solo se anima `transform` y `opacity`, el scroll es el nativo y con "reducir movimiento"
  todo queda quieto.
- Tipografía: Hanken Grotesk (variable, vía Google Fonts). Íconos: Phosphor (`react-icons/pi`).

## Estructura

```
public/
  index.html     metas, Open Graph, JSON-LD y el script que aplica el tema antes de pintar
  404.html       página de error autónoma (ver vercel.json)
  cv/            CV en PDF
  imgs/          foto, capturas de proyectos (3:2, 1200×800) y de sitios de clientes (página entera, 880 px)
  og.jpg         imagen para compartir (1200×630)
src/
  content.js     todo el texto y los datos, en ES y EN
  styles/        tokens de color, tipografía y utilidades (index.scss)
  hooks/         useReveal (aparición al scroll) y useActiveSection (enlace activo del menú)
  lib/           capas.js (movimiento de la foto y las capturas del hero)
  components/    Navbar · Hero · Clients · Work · More · Experience · About · Contact · Footer
vercel.json      las rutas que no existen devuelven 404 con public/404.html
```

Para cambiar textos, proyectos o experiencia alcanza con editar `src/content.js` (cada elemento tiene un
`id` estable y las dos versiones, `es` y `en`, llevan las mismas claves).
Los colores viven como variables CSS en `src/styles/index.scss` (`:root` claro, `.dark` oscuro) y las
medidas están en `rem`: el tamaño base crece de a poco en pantallas grandes.

## Comandos

```bash
npm install
npm start       # desarrollo en http://localhost:3000
npm run build   # producción en /build
```

## Deploy

Push a `main` → Vercel construye y publica automáticamente. Cualquier otra rama genera una vista previa.
