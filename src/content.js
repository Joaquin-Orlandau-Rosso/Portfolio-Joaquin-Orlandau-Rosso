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
  danel: {
    image: '/imgs/danel.jpg',
    tech: ['React', 'Vite', 'CSS'],
    demo: 'https://portafolio-danel-nine.vercel.app/',
    code: 'https://github.com/Joaquin-Orlandau-Rosso/Portafolio-danel',
  },
  marsela: {
    image: '/imgs/marsela.jpg',
    tech: ['React', 'SCSS', 'Vercel'],
    demo: 'https://marselarosso.vercel.app/',
    code: 'https://github.com/Joaquin-Orlandau-Rosso/Nueva-pagina-marsela',
  },
  maria: {
    image: '/imgs/maria-astrocoach.jpg',
    tech: ['React', 'Styled Components'],
    demo: 'https://mariaasastrocoach.vercel.app/',
    code: 'https://github.com/Joaquin-Orlandau-Rosso/MariaAstroCoach',
  },
};

export const content = {
  es: {
    lang: 'es',
    htmlTitle: 'Joaquín Orlandau Rosso — Desarrollador Full Stack',
    nav: {
      work: 'Trabajo',
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
      eyebrow: 'Desarrollador full stack · Buenos Aires, AR',
      title: ['Interfaces rápidas, ', 'accesibles', ' y sin ruido.'],
      lead:
        'Trabajé cinco meses en Viupik, una empresa española de visualización 3D arquitectónica, tocando frontend y backend con React, Node.js y MongoDB. Hoy construyo productos propios con Supabase, Capacitor y Gemini, y busco un equipo donde seguir haciendo producto.',
      cta: 'Hablemos',
      cv: 'Descargar CV',
      photoAlt: 'Joaquín Orlandau Rosso en su escritorio',
      fig: 'Fig. 01',
      caption: 'Joaquín, 2026',
    },
    facts: [
      { label: 'Último puesto', value: 'Viupik · España', detail: 'Dic 2025 — Abr 2026 · Full stack' },
      { label: 'Formación', value: 'UCES · Digital House', detail: 'Lic. en Programación · Full Stack' },
      { label: 'Stack diario', value: 'React · Node · Supabase', detail: 'TypeScript y Next.js en camino' },
    ],
    work: {
      eyebrow: 'Trabajo seleccionado',
      note: 'Tres productos propios · tres sitios para clientes',
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
        {
          ...projects.danel,
          title: 'Portafolio Danel',
          kind: 'client',
          platform: 'Web',
          summary: 'Sitio de presentación para un editor de video.',
          detail: 'Bilingüe, responsive y pensado para mostrar reel y servicios sin distracciones.',
        },
        {
          ...projects.marsela,
          title: 'Masajes Marsela Rosso',
          kind: 'client',
          platform: 'Web',
          summary: 'Web de negocio local con foco en SEO y captación de turnos.',
          detail: 'Reserva de turnos, testimonios y metadatos pensados para búsquedas locales.',
        },
        {
          ...projects.maria,
          title: 'María AstroCoach',
          kind: 'client',
          platform: 'Web',
          summary: 'Landing de servicios con foco en reservas.',
          detail: 'Presentación clara de sesiones, preguntas frecuentes y llamado a la acción directo.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experiencia',
      note: 'Trayectoria profesional y académica',
      workTitle: 'Trabajo',
      educationTitle: 'Formación',
      present: 'Actualidad',
      jobs: [
        {
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'España',
          period: 'Dic 2025 — Abr 2026',
          description:
            'Desarrollo frontend y backend para una empresa especializada en visualización 3D arquitectónica en tiempo real y tours virtuales interactivos para proyectos inmobiliarios.',
          tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
        },
      ],
      education: [
        {
          title: 'Cursos de desarrollo con IA',
          org: 'Anthropic Academy',
          period: '2026 — Actualidad',
          description: 'API de Claude, ingeniería de prompts, integración de LLMs en aplicaciones y Model Context Protocol (MCP).',
        },
        {
          title: 'Licenciatura en Programación',
          org: 'UCES',
          period: '2024 — Actualidad',
          description: 'Fundamentos, algoritmos, bases de datos y desarrollo de software.',
        },
        {
          title: 'Carrera Full Stack',
          org: 'Digital House',
          period: '2025 — 2026',
          description: 'Programa intensivo orientado a proyectos reales, buenas prácticas y trabajo colaborativo.',
        },
        {
          title: 'Desarrollo Web',
          org: 'Coderhouse',
          period: '2023 — 2024',
          description: 'Frontend con HTML, CSS, JavaScript y React, con foco en proyectos prácticos.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      note: 'Cómo trabajo y con qué',
      paragraphs: [
        'Me gusta el trabajo que se nota poco: interfaces que cargan rápido, se leen bien y no hacen ruido. Empecé por el frontend y hoy me muevo con la misma comodidad en el backend, sobre todo con Node.js y Supabase.',
        'En Viupik trabajé en un equipo de producto real, con código en producción y usuarios que lo usaban. Desde entonces construyo herramientas propias para resolver problemas concretos, casi siempre integrando modelos de IA en el flujo.',
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
      title: '¿Armamos algo juntos?',
      lead: 'Escribime por mail o WhatsApp.',
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
    htmlTitle: 'Joaquín Orlandau Rosso — Full Stack Developer',
    nav: {
      work: 'Work',
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
      eyebrow: 'Full stack developer · Buenos Aires, AR',
      title: ['Fast, ', 'accessible', ' interfaces. No noise.'],
      lead:
        'I spent five months at Viupik, a Spanish 3D architectural visualization company, working across the stack with React, Node.js and MongoDB. Today I build my own products with Supabase, Capacitor and Gemini, and I am looking for a team to keep building product with.',
      cta: "Let's talk",
      cv: 'Download CV',
      photoAlt: 'Joaquín Orlandau Rosso at his desk',
      fig: 'Fig. 01',
      caption: 'Joaquín, 2026',
    },
    facts: [
      { label: 'Latest role', value: 'Viupik · Spain', detail: 'Dec 2025 — Apr 2026 · Full stack' },
      { label: 'Education', value: 'UCES · Digital House', detail: 'BSc in Programming · Full Stack' },
      { label: 'Daily stack', value: 'React · Node · Supabase', detail: 'TypeScript and Next.js on the way' },
    ],
    work: {
      eyebrow: 'Selected work',
      note: 'Three own products · three client sites',
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
        {
          ...projects.danel,
          title: 'Danel Portfolio',
          kind: 'client',
          platform: 'Web',
          summary: 'Presentation site for a video editor.',
          detail: 'Bilingual, responsive and built to show reel and services without distractions.',
        },
        {
          ...projects.marsela,
          title: 'Marsela Rosso Massage',
          kind: 'client',
          platform: 'Web',
          summary: 'Local business website focused on SEO and bookings.',
          detail: 'Appointment booking, testimonials and metadata tuned for local search.',
        },
        {
          ...projects.maria,
          title: 'María AstroCoach',
          kind: 'client',
          platform: 'Web',
          summary: 'Services landing page focused on bookings.',
          detail: 'Clear presentation of sessions, FAQ and a direct call to action.',
        },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      note: 'Professional and academic path',
      workTitle: 'Work',
      educationTitle: 'Education',
      present: 'Present',
      jobs: [
        {
          role: 'Full Stack Developer',
          org: 'Viupik',
          place: 'Spain',
          period: 'Dec 2025 — Apr 2026',
          description:
            'Frontend and backend development for a company specialized in real-time 3D architectural visualization and interactive virtual tours for real estate projects.',
          tech: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
        },
      ],
      education: [
        {
          title: 'AI development courses',
          org: 'Anthropic Academy',
          period: '2026 — Present',
          description: 'Claude API, prompt engineering, integrating LLMs into applications and Model Context Protocol (MCP).',
        },
        {
          title: "Bachelor's Degree in Programming",
          org: 'UCES',
          period: '2024 — Present',
          description: 'Fundamentals, algorithms, databases and software development.',
        },
        {
          title: 'Full Stack Program',
          org: 'Digital House',
          period: '2025 — 2026',
          description: 'Intensive program focused on real projects, best practices and collaborative work.',
        },
        {
          title: 'Web Development',
          org: 'Coderhouse',
          period: '2023 — 2024',
          description: 'Frontend with HTML, CSS, JavaScript and React, focused on hands-on projects.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      note: 'How I work and what with',
      paragraphs: [
        'I like work that goes unnoticed: interfaces that load fast, read well and make no noise. I started on the frontend and today I am just as comfortable on the backend, mostly with Node.js and Supabase.',
        'At Viupik I worked on a real product team, with code in production and people using it. Since then I build my own tools to solve concrete problems, almost always with an AI model somewhere in the flow.',
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
      title: 'Shall we build something?',
      lead: 'Reach me by email or WhatsApp.',
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
