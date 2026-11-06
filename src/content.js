// Todo el texto del sitio en un solo lugar, por idioma.
// Los componentes reciben `t = content[language]` y no llevan strings propios.
// Los `id` son estables (no cambian con el idioma): se usan como `key` en las listas.

const WHATSAPP = '5491134372005';

export const links = {
  github: 'https://github.com/Joaquin-Orlandau-Rosso',
  linkedin: 'https://www.linkedin.com/in/joaquin-orlandau-rosso/',
  email: 'joaquin.orlandau.rosso@gmail.com',
  whatsapp: `https://wa.me/${WHATSAPP}`,
  whatsappText: (text) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`,
  phoneLabel: '+54 9 11 3437-2005',
  cv: '/cv/Joaquin-Orlandau-Rosso-CV.pdf',
  repo: 'https://github.com/Joaquin-Orlandau-Rosso/Portfolio-Joaquin-Orlandau-Rosso',
};

// Sitios de clientes: captura de la página entera (880 px de ancho) para recorrerla al pasar el mouse.
const clients = {
  novagraf: {
    id: 'novagraf',
    name: 'Novagraf',
    url: 'https://novagraf.com.ar/',
    domain: 'novagraf.com.ar',
    year: 2026,
    image: '/imgs/clientes/novagraf.jpg',
    size: [880, 2078],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  marsela: {
    id: 'marsela',
    name: 'Marsela Rosso',
    url: 'https://www.marsselarosso.com/',
    domain: 'marsselarosso.com',
    year: 2026,
    image: '/imgs/clientes/marsela.jpg',
    size: [880, 1833],
    tech: ['React', 'Vite', 'React Three Fiber'],
  },
  danel: {
    id: 'danel',
    name: 'Danel',
    url: 'https://portafolio-danel-nine.vercel.app/',
    domain: 'portafolio-danel-nine.vercel.app',
    year: 2025,
    image: '/imgs/clientes/danel.jpg',
    size: [880, 2078],
    tech: ['React', 'Tailwind'],
  },
  maria: {
    id: 'maria',
    name: 'María AstroCoach',
    url: 'https://mariaasastrocoach.vercel.app/',
    domain: 'mariaasastrocoach.vercel.app',
    year: 2026,
    image: '/imgs/clientes/maria.jpg',
    size: [880, 2078],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
};

// Proyectos propios: los dos primeros se cuentan como caso; los otros dos, como tarjeta.
const projects = {
  elodiff: {
    id: 'elodiff',
    title: 'EloDiff',
    image: '/imgs/elodiff.webp',
    demo: 'https://elodiff.app/?demo',
    site: 'https://elodiff.app/',
    siteLabel: 'elodiff.app',
  },
  despensa: {
    id: 'despensa',
    title: 'Despensa',
    image: '/imgs/despensa.jpg',
    tech: ['React', 'Vite', 'Tailwind', 'Capacitor', 'Supabase', 'Gemini'],
    demo: 'https://despensa-app-delta.vercel.app/',
  },
  ruleta: {
    id: 'ruleta',
    title: 'Ruleta Gamer',
    image: '/imgs/ruleta-gamer.jpg',
    tech: ['Python', 'pywebview', 'Canvas', 'Twitch EventSub'],
  },
  clips: {
    id: 'clips',
    title: 'Twitch Clips AI',
    image: '/imgs/twitch-clips.jpg',
    tech: ['Python', 'yt-dlp', 'ffmpeg', 'Gemini API'],
  },
};

const demos = 'https://ejemplos-joaquin.vercel.app';

const more = {
  turnos: { id: 'turnos', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/turnos/` },
  consorcio: { id: 'consorcio', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/consorcio/` },
  cotizador: { id: 'cotizador', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/cotizador/` },
  sysvital: { id: 'sysvital', tech: ['PowerShell', 'WinForms', 'C#'] },
  web2app: { id: 'web2app', tech: ['Node.js', 'Capacitor', 'Android'] },
  paneles: { id: 'paneles', tech: ['Node.js', 'Chrome headless', 'ffmpeg'] },
};

export const content = {
  es: {
    lang: 'es',
    htmlTitle: 'Joaquín Orlandau Rosso – Desarrollador Full Stack',
    htmlDescription:
      'Desarrollador full stack en Buenos Aires: webs y apps con React, Next.js, Node.js y TypeScript. Experiencia en Viupik (España), sitios para clientes y productos propios.',
    skip: 'Saltar al contenido',
    nav: {
      label: 'Secciones',
      clients: 'Clientes',
      work: 'Proyectos',
      experience: 'Experiencia',
      about: 'Sobre mí',
      contact: 'Contacto',
      menu: 'Menú',
      close: 'Cerrar',
      toggleLang: 'Switch to English',
      toggleTheme: { toDark: 'Cambiar a modo oscuro', toLight: 'Cambiar a modo claro' },
    },
    hero: {
      status: 'Disponible para trabajar',
      place: 'Buenos Aires, Argentina',
      title: 'Desarrollador full stack.',
      tagline: 'Webs y apps de punta a punta, con React, Node.js y TypeScript.',
      lead:
        'Soy Joaquín. Desarrollé funciones de IA en producción para Viupik (España), hago sitios y sistemas para negocios, y construyo productos propios como EloDiff.',
      cta: 'Ver proyectos',
      cv: 'Descargar CV',
      photoAlt: 'Joaquín Orlandau Rosso en su escritorio',
    },
    clients: {
      title: 'Sitios para clientes',
      note: 'Publicados y en uso',
      lead: 'Pasá el mouse por un sitio para recorrerlo; con un clic lo abrís.',
      leadTouch: 'Tocá un sitio para abrirlo.',
      shotAlt: (name) => `Captura del sitio de ${name}`,
      items: [
        {
          ...clients.novagraf,
          kind: 'Fabricante de máquinas para packaging',
          did: 'Sitio nuevo con catálogo de siete líneas de máquinas, fichas técnicas, pedido de cotización y redirecciones desde el sitio anterior.',
        },
        {
          ...clients.marsela,
          kind: 'Masajes, cosmiatría y aceites',
          did: 'Sitio con tienda de aceites esenciales, productos en 3D que se giran con el mouse y pedido por WhatsApp.',
        },
        {
          ...clients.danel,
          kind: 'Editor de video',
          did: 'Portfolio en español e inglés con sus trabajos, precios y contacto.',
        },
        {
          ...clients.maria,
          kind: 'Astrología y coaching',
          did: 'Página de servicios con las sesiones, cómo funcionan, preguntas frecuentes y contacto.',
        },
      ],
      ask: '¿Tenés un negocio y necesitás un sitio o un sistema?',
      askCta: 'Pedir presupuesto',
      askMessage: 'Hola Joaquín, vi tu portfolio y quiero pedirte un presupuesto.',
    },
    work: {
      title: 'Proyectos propios',
      note: 'Los pensé, los diseñé y los programé yo',
      points: { problem: 'El problema', built: 'Lo que hice', hard: 'Lo difícil' },
      shotAlt: (title) => `Captura de ${title}`,
      cases: [
        {
          ...projects.elodiff,
          tech: ['Next.js', 'TypeScript', 'Tailwind', 'Electron', 'API de Riot', 'API de Claude', 'Supabase'],
          platform: 'Web y programa de Windows',
          status: 'En acceso anticipado',
          summary: 'Coach de League of Legends con IA: analiza tus partidas y te deja metas que mide solo.',
          problem:
            'Los sitios de estadísticas muestran números, pero no dicen qué cambiar. EloDiff explica cada muerte de tus partidas más difíciles y te deja hasta tres focos con metas concretas.',
          built:
            'Todo: la web en Next.js y TypeScript, el programa de Windows en Electron que detecta el final de cada partida y arma el análisis solo, y los informes con la API de Claude, en español e inglés.',
          hard:
            'La API de Riot permite 100 llamadas cada dos minutos. Armé un limitador con dos prioridades para que el análisis que alguien está esperando no quede atrás de las tareas de fondo. Y cada meta es una regla que se evalúa sola contra las partidas nuevas: el informe siguiente arranca con cuáles cumpliste.',
          demoLabel: 'Ver la demo',
        },
        {
          ...projects.despensa,
          platform: 'Android y web',
          summary: 'Inventario del hogar: escaneás el ticket del súper y los productos se cargan solos.',
          problem:
            'Saber qué hay en casa, qué está por vencer y qué falta comprar, entre varias personas y sin cargar todo a mano.',
          built:
            'App en React con Capacitor para Android y versión web. Lee tickets con Gemini, escanea códigos de barras, sugiere recetas con lo que tenés y comparte la despensa con tu familia, con permisos por persona.',
          hard:
            'Que las reglas vivan en la base y no en la app: seguridad por filas en Postgres (RLS), los cupos del plan gratis se descuentan en el servidor y lo que cargás sin conexión queda en una cola que se sincroniza al volver la señal.',
          demoLabel: 'Abrir la versión web',
        },
      ],
      cards: [
        {
          ...projects.ruleta,
          platform: 'Programa de Windows',
          summary:
            'Ruleta para decidir a qué jugar: detecta los juegos instalados de Steam, Epic, Riot y Xbox, y el chat de Twitch la hace girar con bits.',
        },
        {
          ...projects.clips,
          platform: 'Línea de comandos',
          summary:
            'Encuentra los mejores momentos de un stream: detecta los picos del chat, baja solo esos fragmentos y Gemini les pone título y puntaje.',
        },
      ],
    },
    more: {
      title: 'Demos y herramientas',
      note: 'Más chicas, terminadas',
      try: 'Probar',
      items: [
        {
          ...more.turnos,
          title: 'Turnos con seña',
          platform: 'Demo web',
          summary:
            'El cliente reserva desde el celular y deja una seña (el pago es simulado); el negocio ve la agenda del día sin turnos encimados.',
        },
        {
          ...more.consorcio,
          title: 'Portal de consorcio',
          platform: 'Demo web',
          summary:
            'Expensas, gastos del edificio y reclamos con fotos, con una vista para propietarios y otra para la administración.',
        },
        {
          ...more.cotizador,
          title: 'Cotizador con stock por fecha',
          platform: 'Demo web',
          summary:
            'Para alquiler de mobiliario o equipos: muestra lo que queda libre en cada fecha y arma la reserva con seña (el pago es simulado).',
        },
        {
          ...more.sysvital,
          title: 'SysVital',
          platform: 'Windows',
          summary:
            'Diagnóstico de PCs para técnicos: analiza el equipo, arregla lo común y prueba cámara, micrófono y puertos antes de entregar. Más de 3.300 pruebas automatizadas.',
        },
        {
          ...more.web2app,
          title: 'web2app',
          platform: 'Línea de comandos',
          summary:
            'Convierte un sitio en una app Android con comportamiento nativo: volver atrás, pantalla sin conexión y deslizar para recargar.',
        },
        {
          ...more.paneles,
          title: 'Paneles de Twitch',
          platform: 'Línea de comandos',
          summary: 'Genera los paneles de un canal a partir de un archivo con sus textos, en tres paletas, listos para subir.',
        },
      ],
    },
    experience: {
      title: 'Experiencia',
      workTitle: 'Trabajo',
      educationTitle: 'Formación',
      jobs: [
        {
          id: 'freelance',
          role: 'Desarrollador web freelance',
          org: 'Clientes propios',
          period: 'Oct 2025 – Actualidad',
          points: [
            'Sitios y sistemas para negocios, de punta a punta: relevamiento, diseño, desarrollo, dominio y puesta en producción.',
            'Entre otros, el sitio de Novagraf (catálogo, fichas técnicas y cotizaciones) y la tienda con productos en 3D de Marsela Rosso.',
          ],
          tech: ['React', 'TypeScript', 'Vite', 'Three.js'],
        },
        {
          id: 'viupik',
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'España',
          period: 'Dic 2025 – Abr 2026',
          points: [
            'Desarrollé y mantuve IA Studio 2, la herramienta en React y TypeScript con la que profesionales inmobiliarios generan home staging virtual con IA.',
            'Armé flujos de agentes de IA de varios pasos: home staging, editores de paredes y pisos, y mejora de imagen.',
            'Trabajé en el backend en Node.js y MongoDB: procesamiento de imágenes por lotes, usuarios e historial de renders.',
          ],
          tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        },
        {
          id: 'marsela',
          role: 'Desarrollador full stack freelance',
          org: 'Marsela Rosso',
          place: 'Buenos Aires',
          period: 'Ene 2024 – Nov 2025',
          points: [
            'Único desarrollador de un negocio de bienestar: hice su sitio web, que es su principal canal para conseguir clientes.',
            'Reemplacé la agenda manual por un bot de WhatsApp en Node.js con MongoDB: reserva turnos, manda recordatorios y acepta comandos de administración.',
          ],
          tech: ['Node.js', 'MongoDB', 'whatsapp-web.js'],
        },
      ],
      education: [
        {
          id: 'uces',
          title: 'Licenciatura en Programación',
          org: 'UCES',
          period: '2023 – 2026',
          description: 'En curso. Algoritmos, bases de datos y desarrollo de software.',
        },
        {
          id: 'dh',
          title: 'Certified Tech Developer',
          org: 'Digital House',
          period: '2025 – Actualidad',
          description:
            'Programa full stack de Digital House con Mercado Libre y Globant. Completé Front End Developer, Testing automatizado e Infraestructura avanzada.',
        },
        {
          id: 'coder',
          title: 'Carrera de Desarrollo Frontend React',
          org: 'Coderhouse',
          period: '2024 – 2025',
          description: 'Desarrollo web, JavaScript y React.',
        },
        {
          id: 'anthropic',
          title: 'Cursos de Claude (9 certificados)',
          org: 'Anthropic Academy',
          period: '2026',
          description: 'API de Claude, Claude Code, MCP, subagentes y agent skills.',
        },
      ],
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        'Me gusta hacerme cargo de todo el recorrido: entender qué necesita la persona, diseñarlo, programarlo y dejarlo funcionando en producción. En Viupik lo hice dentro de un equipo, con revisión de código y entregas a producción; con mis clientes lo hago de punta a punta.',
        'Uso IA todos los días para desarrollar y también la integro en lo que hago: EloDiff y Despensa funcionan con modelos de Anthropic y Google.',
        'Cuando no trabajo, juego League of Legends y hago streams. De ahí salieron EloDiff, la Ruleta Gamer y Twitch Clips AI: casi todo lo que programo por mi cuenta arranca por algo que necesitaba yo.',
      ],
      stackTitle: 'Stack',
      stack: [
        { id: 'front', group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Sass'] },
        { id: 'back', group: 'Backend', items: ['Node.js', 'Express', 'APIs REST', 'Python', 'Supabase Edge Functions'] },
        { id: 'data', group: 'Datos y nube', items: ['PostgreSQL (Supabase, RLS)', 'MongoDB', 'Vercel', 'AWS (EC2, S3)'] },
        { id: 'mobile', group: 'Mobile y escritorio', items: ['Capacitor (Android)', 'Electron', 'PWA'] },
        { id: 'ai', group: 'IA', items: ['API de Claude', 'MCP', 'Claude Code', 'Gemini API'] },
      ],
      facts: [
        { id: 'place', label: 'Ubicación', value: 'Buenos Aires, Argentina' },
        { id: 'mode', label: 'Modalidad', value: 'Remoto o híbrido' },
        { id: 'langs', label: 'Idiomas', value: 'Español nativo · Inglés B2' },
      ],
    },
    contact: {
      title: 'Hablemos.',
      lead: 'Si tenés un puesto o un proyecto en mente, escribime por mail o por WhatsApp.',
      copy: 'Copiar',
      copyLabel: 'Copiar el email',
      copied: 'Copiado',
      whatsapp: 'WhatsApp',
      cv: 'Descargar CV',
    },
    footer: {
      rights: 'Joaquín Orlandau Rosso',
      location: 'Buenos Aires, Argentina',
      source: 'Código de este sitio',
      top: 'Volver arriba',
    },
  },

  en: {
    lang: 'en',
    htmlTitle: 'Joaquín Orlandau Rosso – Full Stack Developer',
    htmlDescription:
      'Full stack developer in Buenos Aires: websites and apps with React, Next.js, Node.js and TypeScript. Experience at Viupik (Spain), client websites and my own products.',
    skip: 'Skip to content',
    nav: {
      label: 'Sections',
      clients: 'Clients',
      work: 'Projects',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      toggleLang: 'Cambiar a español',
      toggleTheme: { toDark: 'Switch to dark mode', toLight: 'Switch to light mode' },
    },
    hero: {
      status: 'Available for work',
      place: 'Buenos Aires, Argentina',
      title: 'Full stack developer.',
      tagline: 'Websites and apps, end to end, with React, Node.js and TypeScript.',
      lead:
        'I’m Joaquín. I shipped AI features to production at Viupik (Spain), I build websites and systems for businesses, and I make my own products, like EloDiff.',
      cta: 'See projects',
      cv: 'Download CV',
      photoAlt: 'Joaquín Orlandau Rosso at his desk',
    },
    clients: {
      title: 'Client websites',
      note: 'Live and in use',
      lead: 'Hover over a site to scroll through it; click to open it.',
      leadTouch: 'Tap a site to open it.',
      shotAlt: (name) => `Screenshot of the ${name} website`,
      items: [
        {
          ...clients.novagraf,
          kind: 'Packaging machinery manufacturer',
          did: 'New website with a catalog of seven machine lines, spec sheets, quote requests and redirects from the old site.',
        },
        {
          ...clients.marsela,
          kind: 'Massage, skincare and essential oils',
          did: 'Website with an essential oils shop, 3D products you can spin with the mouse and ordering over WhatsApp.',
        },
        {
          ...clients.danel,
          kind: 'Video editor',
          did: 'Portfolio in Spanish and English with his work, pricing and contact.',
        },
        {
          ...clients.maria,
          kind: 'Astrology and coaching',
          did: 'Services page with the sessions, how they work, frequent questions and contact.',
        },
      ],
      ask: 'Do you run a business and need a website or a system?',
      askCta: 'Ask for a quote',
      askMessage: 'Hi Joaquín, I saw your portfolio and I would like a quote.',
    },
    work: {
      title: 'My own projects',
      note: 'Planned, designed and built by me',
      points: { problem: 'The problem', built: 'What I built', hard: 'The hard part' },
      shotAlt: (title) => `Screenshot of ${title}`,
      cases: [
        {
          ...projects.elodiff,
          tech: ['Next.js', 'TypeScript', 'Tailwind', 'Electron', 'Riot API', 'Claude API', 'Supabase'],
          platform: 'Web and Windows app',
          status: 'In early access',
          summary: 'AI coach for League of Legends: it analyzes your matches and sets goals it tracks by itself.',
          problem:
            'Stats sites show numbers but don’t tell you what to change. EloDiff explains every death in your hardest games and leaves you with up to three focus areas and concrete goals.',
          built:
            'All of it: the web app in Next.js and TypeScript, the Windows app in Electron that detects when a match ends and builds the analysis on its own, and the reports with the Claude API, in Spanish and English.',
          hard:
            'The Riot API allows 100 calls every two minutes. I built a rate limiter with two priorities so the analysis someone is waiting for never queues behind background work. And every goal is a rule checked automatically against new matches: the next report opens with the ones you hit.',
          demoLabel: 'See the demo',
        },
        {
          ...projects.despensa,
          platform: 'Android and web',
          summary: 'Home inventory: scan the supermarket receipt and the products are added for you.',
          problem:
            'Knowing what is at home, what is about to expire and what to buy, across several people and without typing everything in.',
          built:
            'A React app with Capacitor for Android, plus a web version. It reads receipts with Gemini, scans barcodes, suggests recipes from what you have and shares the pantry with your family, with per-person permissions.',
          hard:
            'Keeping the rules in the database, not in the app: row-level security in Postgres (RLS), free-plan quotas are counted on the server, and whatever you add offline waits in a queue that syncs when the signal is back.',
          demoLabel: 'Open the web version',
        },
      ],
      cards: [
        {
          ...projects.ruleta,
          platform: 'Windows app',
          summary:
            'A wheel to decide what to play: it detects the games installed from Steam, Epic, Riot and Xbox, and Twitch chat spins it with bits.',
        },
        {
          ...projects.clips,
          platform: 'Command line',
          summary:
            'Finds the best moments of a stream: it detects chat spikes, downloads only those fragments, and Gemini titles and scores each clip.',
        },
      ],
    },
    more: {
      title: 'Demos and tools',
      note: 'Smaller, finished',
      try: 'Try it',
      items: [
        {
          ...more.turnos,
          title: 'Bookings with deposit',
          platform: 'Web demo',
          summary:
            'Customers book from their phone and leave a deposit (the payment is simulated); the business sees the day’s schedule with no double bookings.',
        },
        {
          ...more.consorcio,
          title: 'Building management portal',
          platform: 'Web demo',
          summary:
            'Fees, building expenses and complaints with photos, with one view for owners and another for the administration.',
        },
        {
          ...more.cotizador,
          title: 'Quote builder with stock by date',
          platform: 'Web demo',
          summary:
            'For furniture or equipment rental: it shows what is still free on each date and books with a deposit (the payment is simulated).',
        },
        {
          ...more.sysvital,
          title: 'SysVital',
          platform: 'Windows',
          summary:
            'PC diagnostics for technicians: it analyzes the machine, fixes the usual issues and tests camera, mic and ports before handover. Over 3,300 automated tests.',
        },
        {
          ...more.web2app,
          title: 'web2app',
          platform: 'Command line',
          summary:
            'Turns a website into an Android app with native behavior: back navigation, offline screen and pull to refresh.',
        },
        {
          ...more.paneles,
          title: 'Twitch panels',
          platform: 'Command line',
          summary: 'Generates a channel’s panels from a file with its texts, in three palettes, ready to upload.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      workTitle: 'Work',
      educationTitle: 'Education',
      jobs: [
        {
          id: 'freelance',
          role: 'Freelance Web Developer',
          org: 'My own clients',
          period: 'Oct 2025 – Present',
          points: [
            'Websites and systems for businesses, end to end: requirements, design, development, domain and deployment.',
            'Among others, the Novagraf website (catalog, spec sheets and quote requests) and the Marsela Rosso shop with 3D products.',
          ],
          tech: ['React', 'TypeScript', 'Vite', 'Three.js'],
        },
        {
          id: 'viupik',
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'Spain',
          period: 'Dec 2025 – Apr 2026',
          points: [
            'Built and maintained IA Studio 2, the React and TypeScript tool real estate professionals use to generate AI virtual home staging.',
            'Developed multi-step AI agent workflows: home staging, wall and floor editors, and image enhancement.',
            'Worked on the Node.js and MongoDB backend: batch image processing, user management and render history.',
          ],
          tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        },
        {
          id: 'marsela',
          role: 'Freelance Full Stack Developer',
          org: 'Marsela Rosso',
          place: 'Buenos Aires',
          period: 'Jan 2024 – Nov 2025',
          points: [
            'Sole developer for a wellness business: I built its website, the main channel it gets clients from.',
            'Replaced manual scheduling with a WhatsApp bot in Node.js and MongoDB: it books appointments, sends reminders and takes admin commands.',
          ],
          tech: ['Node.js', 'MongoDB', 'whatsapp-web.js'],
        },
      ],
      education: [
        {
          id: 'uces',
          title: 'Bachelor’s Degree in Programming',
          org: 'UCES',
          period: '2023 – 2026',
          description: 'In progress. Algorithms, databases and software development.',
        },
        {
          id: 'dh',
          title: 'Certified Tech Developer',
          org: 'Digital House',
          period: '2025 – Present',
          description:
            'Digital House’s full stack program with Mercado Libre and Globant. Completed Front End Developer, Automated Testing and Advanced Infrastructure.',
        },
        {
          id: 'coder',
          title: 'React Frontend Development Program',
          org: 'Coderhouse',
          period: '2024 – 2025',
          description: 'Web development, JavaScript and React.',
        },
        {
          id: 'anthropic',
          title: 'Claude courses (9 certificates)',
          org: 'Anthropic Academy',
          period: '2026',
          description: 'Claude API, Claude Code, MCP, subagents and agent skills.',
        },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        'I like owning the whole path: understanding what the person needs, designing it, building it and leaving it running in production. At Viupik I did that inside a team, with code review and production releases; with my clients I do it end to end.',
        'I use AI every day to develop, and I also build it into what I make: EloDiff and Despensa run on models from Anthropic and Google.',
        'When I am not working, I play League of Legends and stream. That is where EloDiff, Ruleta Gamer and Twitch Clips AI came from: almost everything I build on my own starts with something I needed myself.',
      ],
      stackTitle: 'Stack',
      stack: [
        { id: 'front', group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Sass'] },
        { id: 'back', group: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'Python', 'Supabase Edge Functions'] },
        { id: 'data', group: 'Data and cloud', items: ['PostgreSQL (Supabase, RLS)', 'MongoDB', 'Vercel', 'AWS (EC2, S3)'] },
        { id: 'mobile', group: 'Mobile and desktop', items: ['Capacitor (Android)', 'Electron', 'PWA'] },
        { id: 'ai', group: 'AI', items: ['Claude API', 'MCP', 'Claude Code', 'Gemini API'] },
      ],
      facts: [
        { id: 'place', label: 'Location', value: 'Buenos Aires, Argentina' },
        { id: 'mode', label: 'Work mode', value: 'Remote or hybrid' },
        { id: 'langs', label: 'Languages', value: 'Spanish (native) · English (B2)' },
      ],
    },
    contact: {
      title: 'Let’s talk.',
      lead: 'If you have a role or a project in mind, reach me by email or WhatsApp.',
      copy: 'Copy',
      copyLabel: 'Copy the email address',
      copied: 'Copied',
      whatsapp: 'WhatsApp',
      cv: 'Download CV',
    },
    footer: {
      rights: 'Joaquín Orlandau Rosso',
      location: 'Buenos Aires, Argentina',
      source: 'Source code of this site',
      top: 'Back to top',
    },
  },
};
