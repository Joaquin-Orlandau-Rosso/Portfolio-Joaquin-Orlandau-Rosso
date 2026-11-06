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
    image: '/imgs/clientes/novagraf.webp',
    size: [880, 2078],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  marsela: {
    id: 'marsela',
    name: 'Marsela Rosso',
    url: 'https://www.marsselarosso.com/',
    domain: 'marsselarosso.com',
    year: 2026,
    image: '/imgs/clientes/marsela.webp',
    size: [880, 1833],
    tech: ['React', 'Vite', 'React Three Fiber'],
  },
  danel: {
    id: 'danel',
    name: 'Danel',
    url: 'https://portafolio-danel-nine.vercel.app/',
    domain: 'portafolio-danel-nine.vercel.app',
    year: 2025,
    image: '/imgs/clientes/danel.webp',
    size: [880, 2078],
    tech: ['React', 'Tailwind'],
  },
  maria: {
    id: 'maria',
    name: 'María Astro Coach',
    url: 'https://mariaasastrocoach.vercel.app/',
    domain: 'mariaasastrocoach.vercel.app',
    year: 2026,
    image: '/imgs/clientes/maria.webp',
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
    image: '/imgs/despensa.webp',
    tech: ['React', 'Vite', 'Tailwind', 'Capacitor', 'Supabase', 'Gemini'],
    demo: 'https://despensa-app-delta.vercel.app/',
  },
  ruleta: {
    id: 'ruleta',
    title: 'Ruleta Gamer',
    image: '/imgs/ruleta-gamer.webp',
    tech: ['Python', 'pywebview', 'Canvas', 'Twitch EventSub'],
  },
  clips: {
    id: 'clips',
    title: 'Twitch Clips AI',
    image: '/imgs/twitch-clips.webp',
    tech: ['Python', 'yt-dlp', 'ffmpeg', 'Gemini'],
  },
};

const demos = 'https://ejemplos-joaquin.vercel.app';

const more = {
  turnos: { id: 'turnos', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/turnos/` },
  consorcio: { id: 'consorcio', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/consorcio/` },
  cotizador: { id: 'cotizador', tech: ['React', 'TypeScript', 'Vite'], demo: `${demos}/cotizador/` },
  sysvital: { id: 'sysvital', tech: ['PowerShell', 'WinForms', 'C#'] },
  web2app: { id: 'web2app', tech: ['Node.js', 'Capacitor', 'Android'] },
  paneles: { id: 'paneles', tech: ['Node.js', 'Headless Chrome', 'ffmpeg'] },
};

export const content = {
  es: {
    lang: 'es',
    htmlTitle: 'Joaquín Orlandau Rosso – Desarrollador full stack',
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
        'Soy Joaquín. En Viupik (España) desarrollé funciones de IA que llegaron a producción; hoy hago sitios y sistemas para negocios y armo productos propios, como EloDiff.',
      cta: 'Ver proyectos',
      cv: 'Descargar CV',
      photoAlt: 'Joaquín Orlandau Rosso en una oficina',
    },
    clients: {
      title: 'Sitios para clientes',
      note: 'Todos publicados',
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
          did: 'Sitio nuevo con tienda de aceites esenciales, productos en 3D que se pueden girar y pedido por WhatsApp.',
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
            'Todo: la web en Next.js y TypeScript, en español e inglés; el programa de Windows en Electron, que detecta cuándo termina cada partida y arma el análisis solo; y los informes, que se generan con la API de Claude.',
          hard:
            'La API de Riot permite 100 llamadas cada dos minutos. Armé un limitador con dos prioridades para que el análisis que alguien está esperando no quede atrás de las tareas de fondo. Y cada meta es una regla que se evalúa sola contra las partidas nuevas: el informe siguiente arranca con cuáles cumpliste.',
          demoLabel: 'Ver la demo',
        },
        {
          ...projects.despensa,
          platform: 'Android y web',
          status: 'Todavía no está en Google Play',
          summary: 'Inventario del hogar: escaneás el ticket del súper y los productos se cargan solos.',
          problem:
            'Saber qué hay en casa, qué está por vencer y qué falta comprar, entre varias personas y sin cargar todo a mano.',
          built:
            'App en React con Capacitor para Android y versión web. Lee tickets con Gemini, escanea códigos de barras, sugiere recetas con lo que tenés y comparte la despensa con tu familia, con permisos por persona.',
          hard:
            'Que las reglas vivan en el servidor y no en la app: seguridad a nivel de fila (RLS) en Postgres y cupos del plan gratis que se controlan del lado del servidor. Y lo que cargás sin conexión queda en una cola que se sincroniza cuando vuelve la señal.',
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
      note: 'Proyectos más chicos y completos',
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
          platform: 'Programa de Windows',
          summary:
            'Diagnóstico de PCs para técnicos: analiza el equipo, arregla los problemas comunes y prueba cámara, micrófono y puertos antes de devolverlo. El código tiene más de 3.300 pruebas automatizadas.',
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
          tech: ['React', 'Vite', 'React Three Fiber', 'JavaScript', 'HTML', 'CSS'],
        },
        {
          id: 'viupik',
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'España',
          period: 'Dic 2025 – Abr 2026',
          points: [
            'Desarrollé y mantuve IA Studio 2, la herramienta en React y TypeScript con la que profesionales inmobiliarios generan home staging virtual con IA.',
            'Armé flujos de varios pasos con agentes de IA: home staging, editores de paredes y pisos, y mejora de imagen.',
            'Trabajé en el backend (Node.js y MongoDB): procesamiento de imágenes por lotes, gestión de usuarios e historial de renders.',
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
            'Único desarrollador de un negocio de bienestar: hice su primer sitio web, en Next.js, que se volvió su principal canal para conseguir clientes.',
            'Reemplacé la agenda manual por un bot de WhatsApp en Node.js con MongoDB: reserva turnos, manda recordatorios y acepta comandos de administración.',
          ],
          tech: ['Next.js', 'Node.js', 'MongoDB', 'whatsapp-web.js'],
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
            'En curso. Carrera creada con Mercado Libre y Globant; ya completé Front End Developer, Testing automatizado e Infraestructura avanzada.',
        },
        {
          id: 'coder',
          title: 'Carrera de Desarrollo Frontend React',
          org: 'Coderhouse',
          period: '2024 – 2025',
          description: 'Terminada, con certificado (enero de 2025). Desarrollo web, JavaScript y React.',
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
        'Me gusta hacerme cargo de todo el recorrido: entender qué necesita la persona, diseñarlo, programarlo y dejarlo andando. En Viupik lo hacía en equipo, con revisión de código y pasos a producción; con mis clientes me encargo yo de todo, desde la primera charla hasta el sitio publicado.',
        'Uso IA todos los días para programar y también la sumo a mis proyectos: EloDiff usa la API de Claude y Despensa, la de Gemini.',
        'Cuando no trabajo, juego League of Legends y hago streams. De ahí salieron EloDiff, la Ruleta Gamer y Twitch Clips AI: casi todo lo que programo por mi cuenta arranca por algo que necesitaba yo.',
      ],
      stackTitle: 'Stack',
      stack: [
        { id: 'front', group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind', 'Sass'] },
        { id: 'back', group: 'Backend', items: ['Node.js', 'Express', 'APIs REST', 'Python', 'Supabase Edge Functions'] },
        { id: 'data', group: 'Datos y nube', items: ['PostgreSQL (Supabase, RLS)', 'MongoDB', 'Vercel', 'AWS (EC2, S3)'] },
        { id: 'mobile', group: 'Mobile y escritorio', items: ['Capacitor (Android)', 'Electron', 'PWA'] },
        { id: 'ai', group: 'IA', items: ['API de Claude', 'API de Gemini', 'MCP', 'Claude Code'] },
      ],
      facts: [
        { id: 'place', label: 'Ubicación', value: 'Buenos Aires, Argentina' },
        { id: 'mode', label: 'Modalidad', value: 'Remoto o híbrido' },
        { id: 'langs', label: 'Idiomas', value: 'Español nativo · Inglés B2' },
      ],
    },
    contact: {
      title: 'Hablemos.',
      lead: 'Si tenés una búsqueda abierta o un proyecto en mente, escribime por mail o por WhatsApp.',
      copy: 'Copiar',
      copyLabel: 'Copiar el mail',
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
      tagline: 'End-to-end websites and apps with React, Node.js and TypeScript.',
      lead:
        'I’m Joaquín. At Viupik (Spain) I shipped AI features to production; now I build websites and web apps for businesses, plus my own products like EloDiff.',
      cta: 'See projects',
      cv: 'Download CV',
      photoAlt: 'Joaquín Orlandau Rosso in an office',
    },
    clients: {
      title: 'Client websites',
      note: 'All live',
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
          did: 'New website with an essential oils shop, 3D products you can spin around, and WhatsApp ordering.',
        },
        {
          ...clients.danel,
          kind: 'Video editor',
          did: 'Portfolio in Spanish and English with his work, pricing and contact info.',
        },
        {
          ...clients.maria,
          kind: 'Astrology and coaching',
          did: 'Services page covering her sessions, how they work, an FAQ and contact info.',
        },
      ],
      ask: 'Run a business and need a website or a custom app?',
      askCta: 'Ask for a quote',
      askMessage: 'Hi Joaquín, I saw your portfolio and I’d like a quote.',
    },
    work: {
      title: 'Personal projects',
      note: 'I came up with, designed and built each one',
      points: { problem: 'The problem', built: 'What I built', hard: 'The hard part' },
      shotAlt: (title) => `Screenshot of ${title}`,
      cases: [
        {
          ...projects.elodiff,
          tech: ['Next.js', 'TypeScript', 'Tailwind', 'Electron', 'Riot API', 'Claude API', 'Supabase'],
          platform: 'Web and Windows app',
          status: 'Early access',
          summary: 'AI coach for League of Legends: it analyzes your matches and sets goals it tracks by itself.',
          problem:
            'Stats sites show numbers but don’t tell you what to change. EloDiff explains every death in your hardest games and leaves you with up to three focus areas and concrete goals.',
          built:
            'All of it: the website in Next.js and TypeScript, in Spanish and English; the Windows app in Electron, which detects when a match ends and builds the analysis on its own; and the reports, generated with the Claude API.',
          hard:
            'The Riot API allows 100 requests every two minutes. I built a rate limiter with two priority levels so the analysis someone is waiting for doesn’t get stuck behind background jobs. And every goal is a rule that’s checked automatically against new matches: the next report opens with the ones you hit.',
          demoLabel: 'See the demo',
        },
        {
          ...projects.despensa,
          platform: 'Android and web',
          status: 'Not on Google Play yet',
          summary: 'Pantry tracker: scan your grocery receipt and the items are added for you.',
          problem:
            'Keeping track of what’s at home, what’s about to expire and what’s missing, shared by the whole household and without typing everything in.',
          built:
            'A React app with Capacitor for Android, plus a web version. It reads receipts with Gemini, scans barcodes, suggests recipes from what you have and shares the pantry with your family, with per-person permissions.',
          hard:
            'Keeping the rules on the server, not in the app: row-level security (RLS) in Postgres and free-plan limits enforced server-side. And anything you add offline waits in a queue that syncs once you’re back online.',
          demoLabel: 'Open the web version',
        },
      ],
      cards: [
        {
          ...projects.ruleta,
          platform: 'Windows app',
          summary:
            'A wheel to decide what to play: it finds your installed games from Steam, Epic, Riot and Xbox, and Twitch chat can spin it with bits.',
        },
        {
          ...projects.clips,
          platform: 'Command line',
          summary:
            'Finds the best moments in a stream: it detects chat spikes, downloads only those segments, and Gemini gives each clip a title and a score.',
        },
      ],
    },
    more: {
      title: 'Demos and tools',
      note: 'Smaller, complete projects',
      try: 'Try it',
      items: [
        {
          ...more.turnos,
          title: 'Appointment booking with deposits',
          platform: 'Web demo',
          summary:
            'Customers book from their phone and leave a deposit (the payment is simulated); the business sees the day’s schedule with no double bookings.',
        },
        {
          ...more.consorcio,
          title: 'Building management portal',
          platform: 'Web demo',
          summary:
            'Monthly fees, building expenses and maintenance requests with photos, with one view for owners and another for the building manager.',
        },
        {
          ...more.cotizador,
          title: 'Rental quotes with date-based availability',
          platform: 'Web demo',
          summary:
            'For furniture or equipment rental: it shows what’s still available on each date and takes the booking with a deposit (the payment is simulated).',
        },
        {
          ...more.sysvital,
          title: 'SysVital',
          platform: 'Windows app',
          summary:
            'PC diagnostics for technicians: it scans the machine, fixes common issues and tests the webcam, mic and ports before the PC goes back to its owner. Backed by 3,300+ automated tests.',
        },
        {
          ...more.web2app,
          title: 'web2app',
          platform: 'Command line',
          summary:
            'Turns a website into an Android app with native behavior: back button support, an offline screen and pull-to-refresh.',
        },
        {
          ...more.paneles,
          title: 'Twitch panels',
          platform: 'Command line',
          summary: 'Generates a channel’s panels from a single text file, in three color palettes, ready to upload.',
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
          org: 'Self-employed',
          period: 'Oct 2025 – Present',
          points: [
            'End-to-end websites and web apps for businesses: requirements, design, development, domain setup and deployment.',
            'Among others, the Novagraf website (catalog, spec sheets and quote requests) and the Marsela Rosso shop with 3D products.',
          ],
          tech: ['React', 'Vite', 'React Three Fiber', 'JavaScript', 'HTML', 'CSS'],
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
            'Sole developer for a wellness business: I built its first website, in Next.js, which became its main source of new clients.',
            'Replaced manual scheduling with a WhatsApp bot in Node.js and MongoDB: it books appointments, sends reminders and takes admin commands.',
          ],
          tech: ['Next.js', 'Node.js', 'MongoDB', 'whatsapp-web.js'],
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
            'In progress. Created with Mercado Libre and Globant; completed so far: Front End Developer, Automated Testing and Advanced Infrastructure.',
        },
        {
          id: 'coder',
          title: 'React Frontend Development Program',
          org: 'Coderhouse',
          period: '2024 – 2025',
          description: 'Completed, certified January 2025. Web development, JavaScript and React.',
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
        'I like owning the whole process: figuring out what people need, designing it, building it and getting it live. At Viupik I did that as part of a team, with code review and production releases; with my clients, I handle everything myself, from the first conversation to launch.',
        'I use AI every day when I code, and I also build it into my projects: EloDiff runs on the Claude API and Despensa on Gemini.',
        'When I’m not working, I play League of Legends and stream. That’s where EloDiff, Ruleta Gamer and Twitch Clips AI came from: almost everything I build on my own starts with something I needed myself.',
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
      lead: 'If you’re hiring or have a project in mind, email me or message me on WhatsApp.',
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
