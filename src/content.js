// Todo el texto del sitio en un solo lugar, por idioma.
// Los componentes reciben `t = content[language]` y no llevan strings propios.

export const links = {
  github: 'https://github.com/Joaquin-Orlandau-Rosso',
  linkedin: 'https://www.linkedin.com/in/joaquin-orlandau-rosso/',
  email: 'joaquin.orlandau.rosso@gmail.com',
  whatsapp: 'https://wa.me/541134372005',
  phoneLabel: '+54 11 3437 2005',
  cv: '/cv/Joaquin-Orlandau-Rosso-CV.pdf',
};

const projects = {
  despensa: {
    image: '/imgs/despensa.jpg',
    tech: ['React', 'Vite', 'Tailwind', 'Capacitor', 'Supabase', 'Gemini'],
    demo: null,
    code: null,
  },
  ruleta: {
    image: '/imgs/ruleta-gamer.jpg',
    tech: ['Python', 'pywebview', 'Canvas', 'Twitch EventSub', 'PyInstaller'],
    demo: null,
    code: null,
  },
  clips: {
    image: '/imgs/twitch-clips.jpg',
    tech: ['Python', 'yt-dlp', 'ffmpeg', 'Gemini API'],
    demo: null,
    code: null,
  },
};

// Sitios de clientes: captura de la página entera (880 px de ancho) para recorrerla al pasar el mouse.
const clients = {
  novagraf: {
    url: 'https://novagraf.com.ar/',
    domain: 'novagraf.com.ar',
    year: 2026,
    image: '/imgs/clientes/novagraf.jpg',
    size: [880, 2078],
  },
  marsela: {
    url: 'https://www.marsselarosso.com/',
    domain: 'marsselarosso.com',
    year: 2026,
    image: '/imgs/clientes/marsela.jpg',
    size: [880, 1833],
  },
  danel: {
    url: 'https://portafolio-danel-nine.vercel.app/',
    domain: 'portafolio-danel-nine.vercel.app',
    year: 2025,
    image: '/imgs/clientes/danel.jpg',
    size: [880, 2078],
  },
  maria: {
    url: 'https://mariaasastrocoach.vercel.app/',
    domain: 'mariaasastrocoach.vercel.app',
    year: 2026,
    image: '/imgs/clientes/maria.jpg',
    size: [880, 2078],
  },
};

const demos = 'https://ejemplos-joaquin.vercel.app';

const minis = {
  turnos: { icon: 'calendar', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/turnos/` },
  consorcio: { icon: 'building', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/consorcio/` },
  cotizador: { icon: 'box', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/cotizador/` },
  sysvital: { icon: 'monitor', tech: ['PowerShell', 'WinForms', 'C#'], demo: null },
  web2app: { icon: 'phone', tech: ['Node.js', 'Capacitor', 'Android'], demo: null },
  paneles: { icon: 'twitch', tech: ['Node.js', 'Chrome headless', 'ffmpeg'], demo: null },
};

export const content = {
  es: {
    lang: 'es',
    htmlTitle: 'Joaquín Orlandau Rosso – Desarrollador Full Stack',
    nav: {
      clients: 'Clientes',
      work: 'Proyectos',
      experience: 'Experiencia',
      about: 'Sobre mí',
      contact: 'Contacto',
      available: 'Disponible',
      menu: 'Menú',
      close: 'Cerrar',
      toggleLang: 'Switch to English',
      toggleTheme: { toDark: 'Cambiar a modo oscuro', toLight: 'Cambiar a modo claro' },
    },
    hero: {
      eyebrow: 'Buenos Aires, Argentina',
      // TODO (Joaquín): reescribí título y párrafo con tus palabras; esto es un borrador simple
      title: 'Desarrollador full stack.',
      lead:
        'Soy Joaquín. Hago sitios web para negocios y apps propias con React, Supabase y Capacitor. Trabajé cinco meses en Viupik, una empresa española de visualización 3D, en frontend y backend con React, Node.js y MongoDB. Hoy tomo proyectos y busco sumarme a un equipo.',
      cta: 'Hablemos',
      cv: 'Descargar CV',
      photoAlt: 'Joaquín Orlandau Rosso en su escritorio',
    },
    clients: {
      eyebrow: 'Sitios de clientes',
      note: 'Publicados y en uso',
      lead: 'Pasá el mouse por un sitio para recorrerlo; con un clic lo abrís.',
      leadTouch: 'Tocá un sitio para abrirlo.',
      items: [
        { ...clients.novagraf, name: 'Novagraf', kind: 'Fabricante de máquinas para packaging' },
        { ...clients.marsela, name: 'Marsela Rosso', kind: 'Masajes, cosmiatría y aceites' },
        { ...clients.danel, name: 'Danel', kind: 'Editor de video' },
        { ...clients.maria, name: 'María AstroCoach', kind: 'Astrología y coaching' },
      ],
    },
    minis: {
      eyebrow: 'Mini proyectos',
      note: 'Ideas chicas, terminadas',
      demo: 'Probarlo',
      private: 'Sin demo pública',
      items: [
        {
          ...minis.turnos,
          title: 'Turnos con seña',
          platform: 'Web · demo',
          summary: 'El cliente reserva y paga la seña desde el celular; el negocio ve la agenda del día sin turnos encimados.',
        },
        {
          ...minis.consorcio,
          title: 'Portal de consorcio',
          platform: 'Web · demo',
          summary: 'Expensas, gastos del edificio y reclamos con fotos, con una vista para propietarios y otra para la administración.',
        },
        {
          ...minis.cotizador,
          title: 'Cotizador con stock por fecha',
          platform: 'Web · demo',
          summary: 'Para alquiler de mobiliario o equipos: muestra lo que queda libre para cada fecha y reserva con seña.',
        },
        {
          ...minis.sysvital,
          title: 'SysVital',
          platform: 'Windows',
          summary: 'Diagnóstico de PCs para técnicos: analiza el equipo, arregla lo común y prueba cámara, micrófono y puertos antes de entregar.',
        },
        {
          ...minis.web2app,
          title: 'web2app',
          platform: 'CLI',
          summary: 'Convierte un sitio en una app Android con comportamiento nativo: volver atrás, sin conexión y deslizar para recargar.',
        },
        {
          ...minis.paneles,
          title: 'Paneles de Twitch',
          platform: 'CLI',
          summary: 'Genera los paneles de un canal a partir de un JSON con sus textos, en tres paletas, listos para subir.',
        },
      ],
    },
    work: {
      eyebrow: 'Proyectos propios',
      kind: { own: 'Producto propio', tool: 'Herramienta propia', client: 'Cliente' },
      demo: 'Ver sitio',
      code: 'Código',
      privateCode: 'Repositorio privado',
      items: [
        {
          ...projects.despensa,
          title: 'Despensa',
          kind: 'own',
          platform: 'Android + web',
          summary: 'Inventario del hogar con escaneo de tickets por IA.',
          detail:
            'Auth y base de datos en Supabase (Postgres con RLS y Edge Functions), OCR de tickets y sugerencia de recetas con Gemini, lector de códigos de barras, listas compartidas por hogar y cola de operaciones offline.',
        },
        {
          ...projects.ruleta,
          title: 'Ruleta Gamer',
          kind: 'own',
          platform: 'Windows',
          summary: 'Ruleta de escritorio que detecta los juegos instalados y gira con bits de Twitch.',
          detail:
            'Lee las bibliotecas de Steam, Epic, Riot, Xbox y otras desde manifests y registro para saber qué se jugó en esa PC; se conecta a Twitch (Device Code Flow + EventSub por WebSocket) para que el chat dispare giros.',
        },
        {
          ...projects.clips,
          title: 'Twitch Clips AI',
          kind: 'tool',
          platform: 'CLI',
          summary: 'Encuentra los mejores momentos de un VOD por picos de chat y los puntúa con Gemini.',
          detail:
            'Descarga el chat por GraphQL, detecta picos con z-score sobre ventanas de 5 segundos, baja solo esos fragmentos y Gemini titula y rankea cada clip. Perfiles de humor por streamer que aprenden con ejemplos.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      workTitle: 'Trabajo',
      educationTitle: 'Formación',
      present: 'Actualidad',
      jobs: [
        {
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'España',
          period: 'Dic 2025 – Abr 2026',
          description:
            'Desarrollo frontend y backend para una empresa especializada en visualización 3D arquitectónica en tiempo real y tours virtuales interactivos para proyectos inmobiliarios.',
          tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
        },
      ],
      education: [
        {
          title: 'Cursos de desarrollo con IA',
          org: 'Anthropic Academy',
          period: '2026 – Actualidad',
          description: 'API de Claude, ingeniería de prompts, integración de LLMs en aplicaciones y Model Context Protocol (MCP).',
        },
        {
          title: 'Licenciatura en Programación',
          org: 'UCES',
          period: '2024 – Actualidad',
          description: 'Fundamentos, algoritmos, bases de datos y desarrollo de software.',
        },
        {
          title: 'Carrera Full Stack',
          org: 'Digital House',
          period: '2025 – 2026',
          description: 'Programa intensivo orientado a proyectos reales, buenas prácticas y trabajo colaborativo.',
        },
        {
          title: 'Desarrollo Web',
          org: 'Coderhouse',
          period: '2023 – 2024',
          description: 'Frontend con HTML, CSS, JavaScript y React, con foco en proyectos prácticos.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      // TODO (Joaquín): reescribí estos dos párrafos con tus palabras
      paragraphs: [
        'Empecé por el frontend en Coderhouse y después seguí con la Licenciatura en Programación en UCES y la carrera Full Stack en Digital House. En Viupik trabajé por primera vez en un equipo con código en producción.',
        'Fuera del trabajo hago apps para resolver cosas que necesito: un inventario de despensa, una ruleta para elegir a qué jugar, un programa que saca clips de streams. En varias uso la API de Gemini.',
      ],
      stackTitle: 'Stack',
      stack: [
        { group: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS / Sass', 'Tailwind'] },
        { group: 'Backend', items: ['Node.js', 'MongoDB', 'Supabase (Postgres, Auth, Edge Functions)'] },
        { group: 'Mobile y escritorio', items: ['Capacitor (Android)', 'Python (pywebview)'] },
        { group: 'Herramientas', items: ['Git', 'GitHub', 'Vite', 'Vercel'] },
        { group: 'En aprendizaje', items: ['TypeScript', 'Next.js', 'Angular'] },
      ],
      factsTitle: 'Datos',
      facts: [
        { label: 'Ubicación', value: 'Buenos Aires, Argentina' },
        { label: 'Modalidad', value: 'Remoto' },
        { label: 'Idiomas', value: 'Español · Inglés' },
      ],
    },
    contact: {
      // TODO (Joaquín): si querés, cambiá el título por algo tuyo
      title: 'Contacto',
      lead: 'Si querés hablar de un proyecto o de un puesto, escribime por mail o WhatsApp.',
      copy: 'Copiar email',
      copied: 'Copiado',
      whatsapp: 'WhatsApp',
    },
    footer: {
      rights: 'Joaquín Orlandau Rosso',
      location: 'Buenos Aires, Argentina',
    },
  },

  en: {
    lang: 'en',
    htmlTitle: 'Joaquín Orlandau Rosso – Full Stack Developer',
    nav: {
      clients: 'Clients',
      work: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      available: 'Available',
      menu: 'Menu',
      close: 'Close',
      toggleLang: 'Cambiar a español',
      toggleTheme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
    },
    hero: {
      eyebrow: 'Buenos Aires, Argentina',
      // TODO (Joaquín): rewrite title and paragraph in your own words; this is a plain draft
      title: 'Full stack developer.',
      lead:
        'I am Joaquín. I build websites for businesses and my own apps with React, Supabase and Capacitor. I worked five months at Viupik, a Spanish 3D visualization company, doing frontend and backend with React, Node.js and MongoDB. I take on projects and I am looking to join a team.',
      cta: "Let's talk",
      cv: 'Download CV',
      photoAlt: 'Joaquín Orlandau Rosso at his desk',
    },
    clients: {
      eyebrow: 'Client websites',
      note: 'Live and in use',
      lead: 'Hover over a site to scroll through it; click to open it.',
      leadTouch: 'Tap a site to open it.',
      items: [
        { ...clients.novagraf, name: 'Novagraf', kind: 'Packaging machinery manufacturer' },
        { ...clients.marsela, name: 'Marsela Rosso', kind: 'Massage, skincare and essential oils' },
        { ...clients.danel, name: 'Danel', kind: 'Video editor' },
        { ...clients.maria, name: 'María AstroCoach', kind: 'Astrology and coaching' },
      ],
    },
    minis: {
      eyebrow: 'Mini projects',
      note: 'Small ideas, finished',
      demo: 'Try it',
      private: 'No public demo',
      items: [
        {
          ...minis.turnos,
          title: 'Bookings with deposit',
          platform: 'Web · demo',
          summary: 'Customers book and pay a deposit from their phone; the business sees the day’s schedule with no double bookings.',
        },
        {
          ...minis.consorcio,
          title: 'Building management portal',
          platform: 'Web · demo',
          summary: 'Fees, building expenses and complaints with photos, with one view for owners and another for the administration.',
        },
        {
          ...minis.cotizador,
          title: 'Quote builder with stock by date',
          platform: 'Web · demo',
          summary: 'For furniture or equipment rental: shows what is still free on each date and books with a deposit.',
        },
        {
          ...minis.sysvital,
          title: 'SysVital',
          platform: 'Windows',
          summary: 'PC diagnostics for technicians: analyzes the machine, fixes the usual issues and tests camera, mic and ports before handover.',
        },
        {
          ...minis.web2app,
          title: 'web2app',
          platform: 'CLI',
          summary: 'Turns a website into an Android app with native behavior: back navigation, offline screen and pull to refresh.',
        },
        {
          ...minis.paneles,
          title: 'Twitch panels',
          platform: 'CLI',
          summary: 'Generates a channel’s panels from a JSON with its texts, in three palettes, ready to upload.',
        },
      ],
    },
    work: {
      eyebrow: 'Own projects',
      kind: { own: 'Own product', tool: 'Own tool', client: 'Client' },
      demo: 'Visit site',
      code: 'Code',
      privateCode: 'Private repository',
      items: [
        {
          ...projects.despensa,
          title: 'Despensa',
          kind: 'own',
          platform: 'Android + web',
          summary: 'Home inventory app with AI receipt scanning.',
          detail:
            'Auth and database on Supabase (Postgres with RLS and Edge Functions), receipt OCR and recipe suggestions with Gemini, barcode scanner, shared household lists and an offline operation queue.',
        },
        {
          ...projects.ruleta,
          title: 'Ruleta Gamer',
          kind: 'own',
          platform: 'Windows',
          summary: 'Desktop roulette that detects installed games and spins with Twitch bits.',
          detail:
            'Reads Steam, Epic, Riot, Xbox and other libraries from manifests and the registry to know what was played on that PC; connects to Twitch (Device Code Flow + EventSub over WebSocket) so chat can trigger spins.',
        },
        {
          ...projects.clips,
          title: 'Twitch Clips AI',
          kind: 'tool',
          platform: 'CLI',
          summary: 'Finds the best moments of a VOD from chat spikes and scores them with Gemini.',
          detail:
            'Downloads chat over GraphQL, detects spikes with a z-score over 5-second windows, fetches only those fragments, and Gemini titles and ranks each clip. Per-streamer humor profiles that learn from examples.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      workTitle: 'Work',
      educationTitle: 'Education',
      present: 'Present',
      jobs: [
        {
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'Spain',
          period: 'Dec 2025 – Apr 2026',
          description:
            'Frontend and backend development for a company specialized in real-time 3D architectural visualization and interactive virtual tours for real estate projects.',
          tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
        },
      ],
      education: [
        {
          title: 'AI development courses',
          org: 'Anthropic Academy',
          period: '2026 – Present',
          description: 'Claude API, prompt engineering, integrating LLMs into applications and Model Context Protocol (MCP).',
        },
        {
          title: "Bachelor's Degree in Programming",
          org: 'UCES',
          period: '2024 – Present',
          description: 'Fundamentals, algorithms, databases and software development.',
        },
        {
          title: 'Full Stack Program',
          org: 'Digital House',
          period: '2025 – 2026',
          description: 'Intensive program focused on real projects, best practices and collaborative work.',
        },
        {
          title: 'Web Development',
          org: 'Coderhouse',
          period: '2023 – 2024',
          description: 'Frontend with HTML, CSS, JavaScript and React, focused on hands-on projects.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      // TODO (Joaquín): rewrite these two paragraphs in your own words
      paragraphs: [
        'I started with frontend at Coderhouse and went on to a Programming degree at UCES and the Full Stack program at Digital House. Viupik was my first time working on a team with code in production.',
        'Outside work I build apps for things I need: a pantry inventory, a roulette to pick what to play, a program that pulls clips from streams. Several of them use the Gemini API.',
      ],
      stackTitle: 'Stack',
      stack: [
        { group: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS / Sass', 'Tailwind'] },
        { group: 'Backend', items: ['Node.js', 'MongoDB', 'Supabase (Postgres, Auth, Edge Functions)'] },
        { group: 'Mobile and desktop', items: ['Capacitor (Android)', 'Python (pywebview)'] },
        { group: 'Tools', items: ['Git', 'GitHub', 'Vite', 'Vercel'] },
        { group: 'Learning', items: ['TypeScript', 'Next.js', 'Angular'] },
      ],
      factsTitle: 'Facts',
      facts: [
        { label: 'Location', value: 'Buenos Aires, Argentina' },
        { label: 'Work mode', value: 'Remote' },
        { label: 'Languages', value: 'Spanish · English' },
      ],
    },
    contact: {
      // TODO (Joaquín): change the title to your own if you like
      title: 'Contact',
      lead: 'If you want to talk about a project or a role, reach me by email or WhatsApp.',
      copy: 'Copy email',
      copied: 'Copied',
      whatsapp: 'WhatsApp',
    },
    footer: {
      rights: 'Joaquín Orlandau Rosso',
      location: 'Buenos Aires, Argentina',
    },
  },
};
