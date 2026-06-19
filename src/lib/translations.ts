export const dictionary = {
  en: {
    nav: {
      dashboard: "Dashboard",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      ai: "AI Assistant",
      contact: "Contact",
      subtitle: "Web Application Engineer · AI-First",
      lightMode: "Light mode",
      darkMode: "Dark mode",
      switchToLight: "Switch to light mode",
      switchToDark: "Switch to dark mode",
    },
    jabcbot: {
      open: "> JabcBot",
      title: "JabcBot v1.0 — AI Assistant",
      buttonOpen: "Open JabcBot",
      buttonClose: "Close JabcBot",
      footerProjects: "→ View projects",
      footerSkills: "→ View skills",
      footerContact: "→ Go to contact",
    },
    boot: {
      title: "Web Application Engineer",
      loading: "Initializing system...",
      kernel: "Initializing kernel...",
      systemModules: "Loading system modules...",
      mounting: "Mounting file systems...",
      networkServices: "Starting network services...",
      databaseConn: "Establishing database connection...",
      loadingEngine: "Loading portfolio engine...",
      systemReady: "System ready.",
      skip: "Skip → Dashboard",
      valueProp:
        "I architect production-ready SaaS platforms, landing pages and real-time systems — from corporate websites to multi-tenant APIs — with Next.js, NestJS and TypeScript.",
      viewProjects: "View Projects",
      contact: "Contact",
    },
    dashboard: {
      title: "Control Panel",
      subtitle: "control-center",
      navigation: "Navigation",
      systemOverview: "system overview",
      systemOverviewDesc:
        "Web Application Engineer with 3+ years of production experience building scalable SaaS, landing pages and real-time systems. Specialized in Next.js, NestJS, TypeScript, PostgreSQL, and clean architecture.",
      viewSkills: "View Skills",
      viewProjects: "View Projects",
      viewExperience: "View Experience",
      aiAssistant: "AI Assistant",
      contact: "Contact",
      descSkills: "Technical stack and tools",
      descProjects: "Detailed engineering case studies",
      descExperience: "Professional trajectory and technical achievements",
      descAI: "Ask about my profile with AI",
      descContact: "Let's connect for your next project",
      cta: "Explore Projects",
      impact: {
        label: "cat ~/impact --stats",
        stats: {
          projects: "Production Projects",
          experience: "Years Experience",
          technologies: "Technologies",
          remote: "Remote Ready",
        },
        highlights: {
          saas: {
            title: "SaaS & Marketplace Architecture",
            desc: "Multi-tenant platforms with real-time matching, geolocation, and scalable PostgreSQL backends.",
          },
          ai: {
            title: "AI-Driven Development",
            desc: "Leveraging AI-assisted workflows and vibe coding to accelerate prototyping and delivery.",
          },
          web: {
            title: "Web Application Engineering",
            desc: "End-to-end TypeScript applications from pixel-perfect UIs to containerized backend services.",
          },
        },
        timeline: {
          label: "cat ~/timeline --milestones",
          develsoft: "Corporate site & internal tools",
          chaudeudas: "Fintech platform delivery",
          algira: "Real-time raffle system",
          lupea: "SaaS marketplace launch",
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle: "case-studies",
      problem: "Problem",
      architecture: "Architecture",
      challenges: "Challenges",
      solution: "Solution",
      result: "Result",
      stack: "Stack",
      liveDemo: "Live Demo",
      source: "Source",
      sourceAria: "View source repository",
      enterpriseBadge: "🔒 Enterprise Codebases — NDA Protected",
      enterpriseTooltip:
        "Repository is company-owned and not publicly available due to confidentiality agreements.",
      enterpriseAria: "Enterprise repository, NDA protected (not public)",
      content: {
        lupea: {
          short:
            "SaaS marketplace connecting automotive parts buyers and suppliers through real-time geolocated matching.",
          problem:
            "The automotive parts procurement market suffered from heavy fragmentation and critical latency. Buyers wasted hours in manual phone-sourcing, while local suppliers lacked an automated, geolocated channel to liquidate inventory efficiently, leading to lost revenue on both sides.",
          challenges:
            "Handling stateful, bidirectional WebSocket connections for real-time bidding at scale without saturating the database. Resolved by decoupling the messaging layer, optimizing PostgreSQL geospatial indexing, and structuring lightweight JSON payloads to prevent server bottlenecking during high-traffic peaks.",
          solution:
            "Architected and deployed a highly scalable, real-time SaaS marketplace. Built the frontend with Next.js for optimal performance, backed by Strapi v5 as a headless CMS for agile content delivery. Engineered a custom matching engine driven by geospatial data, automating the connection between buyer demand and supplier availability.",
          result:
            "Delivered a production-ready, multi-tenant SaaS platform. Achieved sub-100ms latency for real-time bid updates and automated quotation routing. The intuitive 'match-and-bid' UX reduced the average parts procurement cycle from hours to under 5 minutes during staging tests.",
        },
        "chau-deudas": {
          short:
            "Fintech platform for personal debt consolidation and credit management with .NET Core backend.",
          problem:
            "The personal debt consolidation market lacked a seamless, secure digital channel connecting users to regulated credit products. Fragmented onboarding flows, inconsistent financial data, and opaque approval processes created high drop-off rates and low trust in digital lending.",
          challenges:
            "Ensuring end-to-end data consistency and security while bridging a React-based frontend with a .NET Core financial backend. Implemented strict input sanitization at the gateway layer to prevent injection attacks, reCAPTCHA v3 to mitigate bot traffic and credential stuffing, and enforced consistent optimistic UI updates that reconciled with the backend's authoritative transaction state.",
          solution:
            "Engineered a secure, responsive single-page application in Next.js and TypeScript, rigorously translating complex Figma specifications into a pixel-perfect UI. Integrated with .NET Core REST APIs for financial transaction processing. Designed a resilient error-handling layer that maintained data integrity across network interruptions.",
          result:
            "Delivered a production-grade fintech frontend with robust security posture. Achieved consistent data synchronization with the backend, and the responsive, accessible interface improved usability benchmarks for a traditionally high-anxiety financial workflow.",
        },
        develsoft: {
          short:
            "Corporate website for a software development consultancy built with Next.js and NestJS.",
          problem:
            "The company, a software development consultancy, needed a digital presence that would convey technical authority and architectural maturity to enterprise clients, replacing a static and outdated landing page.",
          challenges:
            "Balancing an aggressive SEO-driven content strategy with rich, interactive UI components without compromising Core Web Vitals scores. Optimized image delivery, preloaded critical paths using Next.js dynamic imports, and ensured end-to-end type-safety with TypeScript to reduce production regression risks during iterative content updates.",
          solution:
            "Architected a full-stack corporate website using Next.js and NestJS with end-to-end TypeScript, ensuring type-safety across the entire data flow. Engineered a clean, modular component architecture on the frontend with a NestJS-driven backend managing structured content via PostgreSQL. Automated Lighthouse scoring thresholds in CI.",
          result:
            "Launched a production website that achieved sub-2s LCP and 95+ Lighthouse performance scores. The end-to-end TypeScript stack reduced regression bugs by an estimated 40% during content updates, providing the client with a low-maintenance, enterprise-grade web presence.",
        },
        algira: {
          short:
            "Real-time raffle and ticketing platform with live draw streaming and Braintree payment integration.",
          problem:
            "The event-based fundraising sector in the region operated on paper tickets and manual draws, creating low trust, limited reach, and high operational overhead for organizers.",
          challenges:
            "Managing concurrent ticket purchase requests during flash sales without double-allocation or data race conditions. Integrated Braintree's payment gateway with idempotency keys to prevent duplicate charges, implemented optimistic concurrency control at the PostgreSQL level, and synchronized real-time draw events across all connected clients via WebSockets with backpressure handling.",
          solution:
            "Engineered a real-time ticketing and raffle platform using Next.js with Strapi v5 as the headless backend. Implemented WebSocket-based live event streaming for transparent, trust-building draw visualization. Integrated Braintree with idempotent payment handling, ensuring zero financial discrepancies during high-concurrency purchase periods.",
          result:
            "Delivered a production-ready real-time raffle system processing concurrent ticket purchases with zero data inconsistency. The live-streamed draw visualization and instant result notifications eliminated post-draw disputes, while the integrated payment flow reduced drop-off at checkout to near zero.",
        },
        "paula-roman": {
          short:
            "Professional landing page for an independent legal advisor, built with Next.js and TypeScript.",
          problem:
            "Designed and built a professional landing page for an independent legal advisor, focused on credibility, clarity, and lead generation.",
          challenges:
            "Paula Román, a strategic mentor with 30+ years in the insurance industry, had no digital presence. She needed a professional landing page to communicate her value proposition to independent insurance brokers and drive direct WhatsApp leads.",
          solution:
            "Designed and built a landing page with Next.js, TypeScript and Strapi as headless CMS. The page includes a hero with direct CTA, mentorship program overview, a 3-phase coaching cycle, client testimonials, and a contact section. All content is editable from Strapi without code changes.",
          result:
            "Paula now has a professional digital presence that clearly communicates her offer, with a direct WhatsApp lead capture channel and real client testimonials that reinforce her credibility.",
        },
        "braganza-vial": {
          short:
            "Corporate landing page for a road infrastructure company, powered by Next.js and Strapi CMS.",
          problem:
            "Built a corporate landing page for a road infrastructure company, using Strapi as headless CMS for content management.",
          challenges:
            "Braganza Vial's website had all content hardcoded directly into the codebase. The team couldn't update services, projects, clients, navigation or footer without developer intervention, creating constant technical dependency.",
          solution:
            'Migrated the backend to Strapi v5 with PostgreSQL, designing a full content structure for all site sections. Connected the existing frontend to the new CMS without altering the UI, and built a new "Clients" section with a logo grid manageable entirely from the admin panel.',
          result:
            "Braganza Vial's team can now update all site content autonomously from the admin panel without touching code. The project spanned 54 development hours across 6 structured stages.",
        },
      },
    },
    experience: {
      title: "Experience",
      subtitle: "timeline --log",
      highlights: {
        "Develsoft SAS": [
          "Architected and scaled production-grade multi-tenant applications using Next.js, NestJS, and TypeScript, achieving measurable improvements in modularity, maintainability, and runtime performance across the full stack.",
          "Designed and optimized high-throughput RESTful APIs on NestJS with PostgreSQL-backed data pipelines, ensuring sub-100ms P95 response latency under concurrent production loads.",
          "Engineered responsive, component-driven UIs with React and Next.js, enforcing clean architecture patterns that reduced cross-team merge conflicts and accelerated feature delivery.",
          "Orchestrated full-stack application containerization using Docker and Compose, standardizing development environments and streamlining CI/CD pipelines — cutting new developer onboarding time by approximately 60%.",
        ],
        "Marna Corporate Group C.A.": [
          "Developed dynamic, data-intensive web applications with JavaScript, AJAX, and MongoDB, implementing real-time client–server data synchronization for complex business workflows.",
          "Built and integrated interactive data visualization layers for analytical platform telemetry, processing structured and semi-structured data streams for enterprise reporting.",
        ],
        "Copikon Venezuela C.A.": [
          "Performed infrastructure troubleshooting and hardware diagnostics across a fleet of 200+ enterprise workstations, ensuring 99% system availability and reducing mean-time-to-repair through systematic root-cause analysis.",
          "Designed and implemented a digital asset tracking system that automated inventory logging, eliminating manual spreadsheets and reducing audit reconciliation time by an estimated 70%.",
        ],
        "Zifeng International Language School C.A.": [
          "EF SET English Certificate (C1 Advanced)",
          "English language instruction for international students.",
        ],
      },
    },
    ai: {
      title: "AI Assistant",
      subtitle: "ai-assistant --interactive",
      placeholder: "Type your question...",
      terminal: "Terminal",
      chat: "Chat",
      send: "Send",
      exampleQuestions: "// example questions",
      disclaimer:
        "This assistant is AI-powered and answers questions based on my professional profile.",
      greeting:
        "Hello! I'm the AI assistant for **{name}**. Ask me anything about his experience, projects, skills, or background.",
      answers: {
        projects:
          "**Projects built:**\n\n{list}\n\nTotal: {count} production projects.",
        backend:
          "**Backend Experience:** Yes.\n\nFrameworks: NestJS, Node.js, Strapi v5\nDatabases: PostgreSQL, MySQL, MongoDB\nAuth: JWT, bcrypt\nAPIs: RESTful APIs with Swagger documentation.\n\nProduction experience designing and implementing secure, scalable backend systems.",
        stack: "**Tech Stack & Skills:**\n\n{categories}",
        architecture:
          "**System Architecture:**\n\nHe has architected full-stack systems including:\n• SaaS marketplace with real-time matching algorithms\n• Corporate landing pages and CMS-driven websites\n• Real-time raffle systems with payment gateways\n• Containerized microservices with Docker\n• Clean architecture patterns with scalable PostgreSQL schemas",
        experience: "**Professional Experience:**\n\n{list}",
        contact:
          "**Contact:**\n\nLinkedIn: {linkedin}\n\nClick to reveal email on the contact page.",
        level:
          "**Experience Level:** {years}+ years of professional experience.\n\nDomains: {domains}\n\nHe works independently on full-stack architecture and production systems.",
        fintech:
          "**Fintech Experience:** Yes.\n\nHe built **Chau Deudas**, a personal debt consolidation fintech platform, integrating with .NET Core financial APIs, implementing reCAPTCHA security, and delivering a pixel-perfect responsive UI from Figma specs.\n\nDomains worked: credit management, financial transaction processing, secure API integration.",
        availability:
          "**Availability:** Yes, I'm currently open to freelance projects and remote positions.\n\nYou can reach out via the contact page or schedule a technical call to discuss collaboration opportunities.",
        easterEgg:
          "👋 Hey! 🥚\n\nPsst… this site has secrets. Try searching for **Konami**, or keep an eye on those `$` prompts… Just sayin'. 🕵️",
        fallback:
          "I don't have that information in my knowledge base. You can ask me about:\n\n• Projects built\n• Tech stack & skills\n• Backend experience\n• Professional experience\n• System architecture\n• Contact info\n• Experience level",
      },
      examples: [
        "What technologies does José use?",
        "Does he have fintech experience?",
        "Is he available for projects?",
        "What is his favorite stack?",
        "Say hello!",
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "contact --connect",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      schedule: "Schedule a Technical Call",
      scheduleDesc: "WhatsApp",
      clickToReveal: "[Click to reveal]",
      copied: "Copied!",
      copyLabel: "Copy to clipboard",
      emailSubject: "Let's work together",
      emailBody: "Hi José! I saw your portfolio and I'd like to connect.",
      whatsappMessage: "Hi José! I saw your portfolio and I'd like to discuss a project opportunity.",
      orAskAI:
        "Looking for specific insights? Query my custom RAG AI Assistant about my engineering background.",
      aiAssistant: "AI Assistant",
      availability: "Available for freelance projects and remote positions.",
    },
    skills: {
      title: "Skills",
      subtitle: "skills --inventory",
      pitch:
        "I build production-grade SaaS platforms, real-time systems, and landing pages for companies that need reliable, scalable web infrastructure. Every project I deliver is designed for maintainability from day one — with clean TypeScript, containerized backends, and thoughtful API boundaries.",
      pitchLabel: "// about",
      categories: {
        Frameworks: "Frameworks",
        Languages: "Languages",
        Databases: "Databases",
        DevOps: "DevOps",
        "Security & Testing": "Security & Testing",
        Security: "Security",
        "API Design": "API Design",
        "Real-Time": "Real-Time",
      },
      primaryLanguage: "PRIMARY LANGUAGE",
      primaryLanguageDesc:
        "TypeScript is used across frontend, backend and infrastructure — the backbone of the entire stack.",
      coreStack: "CURRENT STACK",
      coreTechnologies: "CORE TECHNOLOGIES",
      secondaryTechnologies: "SECONDARY TECHNOLOGIES",
      capabilities: [
        "Built SaaS applications with React and Next.js",
        "Designed scalable REST APIs using Node.js and NestJS",
        "Implemented real-time systems with WebSockets",
        "Managed cloud deployments with Azure and Docker",
        "Architected headless CMS solutions with Strapi",
      ],
      specializations: {
        security: "SECURITY",
        apiDesign: "API DESIGN",
        realTime: "REAL-TIME SYSTEMS",
        headlessCMS: "HEADLESS CMS",
        cmsItems: [
          "Strapi v5",
          "Content Architecture",
          "Role Management",
          "API Design",
          "Custom Workflows",
        ],
      },
      level: {
        Basic: "Basic",
        Intermediate: "Intermediate",
        Advanced: "Advanced",
        Production: "Production",
      },
      whatBuilt: "What I've built with this stack",
      whatBuiltList: [
        "Built real-time auction/matching platforms with WebSockets",
        "Developed full-stack SaaS applications with auth, role management, and payment integration",
        "Implemented headless CMS solutions with Strapi and PostgreSQL",
        "Designed multilingual frontend architecture with Next.js App Router",
        "Containerized full-stack applications with Docker for production deployment",
        "Built landing pages and corporate sites with headless CMS",
      ],
    },
    status: {
      title: "SYSTEM STATUS",
      frontend: "Frontend",
      backend: "Backend APIs",
      database: "Database",
      auth: "Auth Systems",
      realtime: "Realtime Engine",
      ai: "AI Layer",
    },
    metrics: {
      title: "QUICK METRICS",
      nameLabel: "Name",
      titleLabel: "Title",
      summary:
        "Web Application Engineer building SaaS platforms, landing pages and real-time systems. TypeScript across the full stack.",
      uptimeLabel: "Uptime",
      domainsLabel: "Domains",
      locationLabel: "Location",
      languageLabel: "Language",
      specializations: "SPECIALIZATIONS",
      specializationList: [
        "SaaS Platforms",
        "Web Applications",
        "Real-Time Systems",
        "API Architecture",
        "Headless CMS",
      ],
    },
    developerLicense: {
      axisLabels: {
        frontendEng: "Frontend Engineering",
        backendSys: "Backend Systems",
        apiArch: "API Architecture",
        databases: "Databases",
        cloudDevOps: "Cloud & DevOps",
        security: "Security",
      },
    },
  },
  es: {
    nav: {
      dashboard: "Dashboard",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      ai: "AI Assistant",
      contact: "Contacto",
      subtitle: "Ingeniero de Web Apps · AI-First",
      lightMode: "Modo claro",
      darkMode: "Modo oscuro",
      switchToLight: "Cambiar a modo claro",
      switchToDark: "Cambiar a modo oscuro",
    },
    boot: {
      title: "Web Application Engineer",
      loading: "Inicializando sistema...",
      kernel: "Inicializando kernel...",
      systemModules: "Cargando módulos del sistema...",
      mounting: "Montando sistemas de archivos...",
      networkServices: "Iniciando servicios de red...",
      databaseConn: "Estableciendo conexión a base de datos...",
      loadingEngine: "Cargando motor del portfolio...",
      systemReady: "Sistema listo.",
      skip: "Saltar → Dashboard",
      valueProp:
        "Arquitecto plataformas SaaS, landing pages y sistemas en tiempo real listos para producción — desde sitios corporativos hasta APIs multi-tenant — con Next.js, NestJS y TypeScript.",
      viewProjects: "Ver Proyectos",
      contact: "Contacto",
    },
    dashboard: {
      title: "Panel de Control",
      subtitle: "centro-de-control",
      navigation: "Navegación",
      systemOverview: "resumen del sistema",
      systemOverviewDesc:
        "Web Application Engineer con más de 3 años de experiencia en producción construyendo sistemas SaaS, landing pages y sistemas en tiempo real escalables. Especializado en Next.js, NestJS, TypeScript, PostgreSQL y arquitectura limpia.",
      viewSkills: "Ver Habilidades",
      viewProjects: "Ver Proyectos",
      viewExperience: "Ver Experiencia",
      aiAssistant: "AI Assistant",
      contact: "Contacto",
      descSkills: "Stack técnico y herramientas",
      descProjects: "Case studies detallados de ingeniería",
      descExperience: "Trayectoria profesional y logros técnicos",
      descAI: "Pregunta sobre mi perfil con IA",
      descContact: "Conectemos para tu próximo proyecto",
      cta: "Explorar Proyectos",
      impact: {
        label: "cat ~/impacto --estadísticas",
        stats: {
          projects: "Proyectos en Producción",
          experience: "Años de Experiencia",
          technologies: "Tecnologías",
          remote: "Listo para Remoto",
        },
        highlights: {
          saas: {
            title: "Arquitectura SaaS y Marketplace",
            desc: "Plataformas multi-tenant con matching en tiempo real, geolocalización y backends PostgreSQL escalables.",
          },
          ai: {
            title: "Desarrollo Impulsado por IA",
            desc: "Aprovechando flujos asistidos por IA y vibe coding para acelerar prototipado y entrega.",
          },
          web: {
            title: "Ingeniería de Aplicaciones Web",
            desc: "Aplicaciones TypeScript de extremo a extremo, desde UIs pixel-perfect hasta servicios backend containerizados.",
          },
        },
        timeline: {
          label: "cat ~/linea-de-tiempo --hitos",
          develsoft: "Sitio corporativo y herramientas internas",
          chaudeudas: "Entrega plataforma fintech",
          algira: "Sistema de sorteos en tiempo real",
          lupea: "Lanzamiento marketplace SaaS",
        },
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "casos-de-estudio",
      problem: "Problema",
      architecture: "Arquitectura",
      challenges: "Desafíos",
      solution: "Solución",
      result: "Resultado",
      stack: "Stack",
      liveDemo: "Demo en Vivo",
      source: "Código",
      sourceAria: "Ver repositorio de código",
      enterpriseBadge: "🔒 Código Empresarial — Protegido por NDA",
      enterpriseTooltip:
        "El repositorio es propiedad de la empresa y no está disponible públicamente por acuerdos de confidencialidad.",
      enterpriseAria: "Repositorio empresarial, protegido por NDA (no público)",
      content: {
        lupea: {
          short:
            "Marketplace SaaS que conecta compradores y proveedores de repuestos automotrices mediante matching geolocalizado en tiempo real.",
          problem:
            "El mercado de compraventa de repuestos automotrices sufría una fragmentación severa y latencia crítica. Los compradores perdían horas en búsqueda telefónica manual, mientras los proveedores locales carecían de un canal automatizado y geolocalizado para liquidar inventario, generando pérdida de ingresos en ambos lados.",
          challenges:
            "Mantener conexiones WebSocket stateful bidireccionales para ofertas en tiempo real a escala sin saturar la base de datos. Se resolvió desacoplando la capa de mensajería, optimizando el indexado geoespacial en PostgreSQL y estructurando payloads JSON ligeros para evitar cuellos de botella durante picos de alto tráfico.",
          solution:
            "Arquitecté y desplegué un marketplace SaaS altamente escalable en tiempo real. Construí el frontend con Next.js para rendimiento óptimo, respaldado por Strapi v5 como CMS headless para entrega ágil de contenido. Diseñé un motor de matching personalizado basado en datos geoespaciales, automatizando la conexión entre demanda de compradores y disponibilidad de proveedores.",
          result:
            "Entregué una plataforma SaaS multi-tenant lista para producción. Se logró latencia sub-100ms para actualizaciones de ofertas en tiempo real y enrutamiento automatizado de cotizaciones. La UX intuitiva de 'match-and-bid' redujo el ciclo promedio de adquisición de repuestos de horas a menos de 5 minutos durante pruebas de staging.",
        },
        "chau-deudas": {
          short:
            "Plataforma fintech para consolidación de deudas y gestión de créditos personales con backend en .NET Core.",
          problem:
            "El mercado de consolidación de deudas personales carecía de un canal digital seguro y fluido que conectara a usuarios con productos crediticios regulados. Flujos de onboarding fragmentados, datos financieros inconsistentes y procesos de aprobación opacos generaban altas tasas de abandono y baja confianza en el crédito digital.",
          challenges:
            "Garantizar consistencia y seguridad de datos de extremo a extremo al puentear un frontend React con un backend financiero en .NET Core. Implementé sanitización estricta de entradas en la capa de gateway para prevenir inyecciones, reCAPTCHA v3 para mitigar tráfico automatizado y credential stuffing, y enforced actualizaciones optimistas de UI que se reconciliaban con el estado transaccional autoritativo del backend.",
          solution:
            "Diseñé una aplicación SPA segura y responsive en Next.js y TypeScript, traduciendo rigurosamente especificaciones complejas de Figma a una UI pixel-perfect. Integré con APIs REST de .NET Core para procesamiento de transacciones financieras. Diseñé una capa de manejo de errores resiliente que mantenía la integridad de datos ante interrupciones de red.",
          result:
            "Entregué un frontend fintech de grado profesional con una postura de seguridad robusta. Se logró sincronización consistente de datos con el backend, y la interfaz responsive y accesible mejoró los benchmarks de usabilidad para un flujo financiero tradicionalmente de alta ansiedad.",
        },
        develsoft: {
          short:
            "Sitio web corporativo para una consultora de desarrollo de software construido con Next.js y NestJS.",
          problem:
            "La empresa, una consultora de desarrollo de software, necesitaba una presencia digital que transmitiera autoridad técnica y madurez arquitectónica a clientes enterprise, reemplazando una landing page estática y desactualizada.",
          challenges:
            "Equilibrar una estrategia de contenido agresiva para SEO con componentes UI interactivos sin comprometer los puntajes de Core Web Vitals. Optimicé la entrega de imágenes, precargué rutas críticas usando imports dinámicos de Next.js, y aseguré type-safety de extremo a extremo con TypeScript para reducir riesgos de regresión durante actualizaciones iterativas de contenido.",
          solution:
            "Arquitecté un sitio web corporativo full-stack usando Next.js y NestJS con TypeScript de extremo a extremo, garantizando type-safety en todo el flujo de datos. Diseñé una arquitectura de componentes modular en el frontend con un backend NestJS gestionando contenido estructurado vía PostgreSQL. Automatice umbrales de Lighthouse en CI.",
          result:
            "Lancé un sitio web en producción que logró LCP menor a 2s y puntajes Lighthouse superiores a 95. El stack TypeScript de extremo a extremo redujo bugs de regresión en un estimado de 40% durante actualizaciones de contenido, proporcionando al cliente una presencia web enterprise de bajo mantenimiento.",
        },
        algira: {
          short:
            "Plataforma de sorteos y ticketing en tiempo real con streaming en vivo y pagos integrados vía Braintree.",
          problem:
            "El sector de recaudación de fondos basado en eventos operaba con boletos en papel y sorteos manuales, generando baja confianza, alcance limitado y alta carga operativa para los organizadores.",
          challenges:
            "Manejar solicitudes concurrentes de compra de participaciones durante ventas flash sin doble asignación o condiciones de carrera. Integré Braintree con claves de idempotencia para evitar cargos duplicados, implementé control de concurrencia optimista a nivel de PostgreSQL, y sincronicé eventos de sorteo en tiempo real vía WebSockets con manejo de contrapresión.",
          solution:
            "Diseñé una plataforma de ticketing y sorteos en tiempo real usando Next.js con Strapi v5 como backend headless. Implementé streaming de eventos en vivo vía WebSockets para visualización transparente de sorteos que generaba confianza. Integré Braintree con manejo idempotente de pagos, garantizando cero discrepancias financieras durante períodos de alta concurrencia.",
          result:
            "Entregué un sistema de sorteos en tiempo real listo para producción que procesa compras concurrentes sin inconsistencias de datos. La visualización en vivo y las notificaciones instantáneas eliminaron disputas post-sorteo, mientras que el flujo de pago integrado redujo el abandono en checkout a casi cero.",
        },
        "paula-roman": {
          short:
            "Landing page profesional para una asesora jurídica independiente, construida con Next.js y TypeScript.",
          problem:
            "Diseñé y construí una landing page profesional para una asesora jurídica independiente, enfocada en credibilidad, claridad y generación de leads.",
          challenges:
            "Paula Román, mentora estratégica con más de 30 años de experiencia en seguros, no tenía presencia digital. Necesitaba una landing profesional que comunicara su propuesta de valor a corredores de seguros independientes y generara consultas directas por WhatsApp.",
          solution:
            "Diseño y desarrollo de una landing page con Next.js, TypeScript y Strapi como CMS headless. La página incluye sección hero con CTA directo, programa de mentoría, ciclo de acompañamiento en 3 fases, testimonios de clientes y formulario de contacto. El contenido es editable desde Strapi sin tocar código.",
          result:
            "Paula cuenta con una presencia digital profesional que comunica claramente su propuesta, con un canal directo de captación de clientes vía WhatsApp y testimonios de casos reales que refuerzan su credibilidad.",
        },
        "braganza-vial": {
          short:
            "Landing page corporativa para una empresa de infraestructura vial, impulsada por Next.js y Strapi CMS.",
          problem:
            "Construí una landing page corporativa para una empresa de infraestructura vial, usando Strapi como CMS headless para gestión de contenido.",
          challenges:
            "El sitio de Braganza Vial tenía los textos e imágenes hardcodeados directamente en el código. El equipo no podía actualizar contenido (servicios, proyectos, clientes, menú, footer) sin depender de un desarrollador, lo cual frenaba la operación y generaba dependencia técnica constante.",
          solution:
            'Migración del backend a Strapi v5 con PostgreSQL, diseñando una estructura de contenidos administrable para todas las secciones del sitio. Se conectó el frontend existente al nuevo CMS sin modificar el diseño visible, y se desarrolló una nueva sección "Clientes" con grilla de logos gestionable desde el panel.',
          result:
            "El equipo de Braganza Vial puede actualizar textos, imágenes, servicios, proyectos y clientes de forma autónoma desde el panel, sin tocar código. El proyecto totalizó 54 horas de desarrollo distribuidas en 6 etapas.",
        },
      },
    },
    experience: {
      title: "Experiencia",
      subtitle: "linea-de-tiempo --log",
      highlights: {
        "Develsoft SAS": [
          "Arquitecté y escalé aplicaciones multi-tenant de grado profesional usando Next.js, NestJS y TypeScript, logrando mejoras medibles en modularidad, mantenibilidad y rendimiento en producción en todo el stack.",
          "Diseñé y optimicé APIs RESTful de alto rendimiento sobre NestJS con pipelines de datos respaldados por PostgreSQL, garantizando latencia P95 por debajo de 100ms bajo cargas de producción concurrentes.",
          "Construí UIs responsivas basadas en componentes con React y Next.js, aplicando patrones de arquitectura limpia que redujeron conflictos en merges cross-team y aceleraron la entrega de funcionalidades.",
          "Orquesté la containerización de aplicaciones full-stack con Docker y Compose, estandarizando entornos de desarrollo y optimizando pipelines CI/CD — reduciendo el tiempo de onboarding de nuevos desarrolladores en aproximadamente un 60%.",
        ],
        "Marna Corporate Group C.A.": [
          "Desarrollé aplicaciones web dinámicas con alto volumen de datos usando JavaScript, AJAX y MongoDB, implementando sincronización cliente–servidor en tiempo real para flujos de trabajo empresariales complejos.",
          "Construí e integré capas interactivas de visualización de datos para telemetría de plataformas analíticas, procesando flujos de datos estructurados y semi-estructurados para reportes empresariales.",
        ],
        "Copikon Venezuela C.A.": [
          "Realicé diagnóstico de infraestructura y troubleshooting de hardware en una flota de más de 200 estaciones de trabajo empresariales, garantizando 99% de disponibilidad del sistema y reduciendo el tiempo medio de reparación mediante análisis sistemático de causa raíz.",
          "Diseñé e implementé un sistema digital de seguimiento de activos que automatizó el registro de inventario, eliminando hojas de cálculo manuales y reduciendo el tiempo de conciliación de auditoría en un estimado de 70%.",
        ],
        "Zifeng International Language School C.A.": [
          "Certificado EF SET de Inglés (C1 Avanzado)",
          "Instrucción de inglés como segundo idioma para estudiantes internacionales.",
        ],
      },
    },
    ai: {
      title: "AI Assistant",
      subtitle: "asistente-ia --interactivo",
      placeholder: "Escribe tu pregunta...",
      terminal: "Terminal",
      chat: "Chat",
      send: "Enviar",
      exampleQuestions: "// preguntas de ejemplo",
      disclaimer:
        "Este asistente usa IA y responde preguntas basadas en mi perfil profesional.",
      greeting:
        "¡Hola! Soy el asistente de IA de **{name}**. Pregúntame sobre su experiencia, proyectos, habilidades o trayectoria.",
      answers: {
        projects:
          "**Proyectos construidos:**\n\n{list}\n\nTotal: {count} proyectos en producción.",
        backend:
          "**Experiencia Backend:** Sí.\n\nFrameworks: NestJS, Node.js, Strapi v5\nBases de Datos: PostgreSQL, MySQL, MongoDB\nAuth: JWT, bcrypt\nAPIs: RESTful APIs con documentación Swagger.\n\nExperiencia en producción diseñando e implementando sistemas backend seguros y escalables.",
        stack: "**Stack Tecnológico y Habilidades:**\n\n{categories}",
        architecture:
          "**Arquitectura de Sistemas:**\n\nHa arquitectado sistemas full-stack incluyendo:\n• Marketplace SaaS con algoritmos de matching en tiempo real\n• Landing pages corporativas y sitios web con CMS\n• Sistemas de sorteos en tiempo real con pasarelas de pago\n• Microservicios containerizados con Docker\n• Patrones de arquitectura limpia con esquemas PostgreSQL escalables",
        experience: "**Experiencia Profesional:**\n\n{list}",
        contact:
          "**Contacto:**\n\nLinkedIn: {linkedin}\n\nHaz clic para revelar el email en la página de contacto.",
        level:
          "**Nivel de Experiencia:** {years}+ años de experiencia profesional.\n\nDominios: {domains}\n\nTrabaja de forma independiente en arquitectura full-stack y sistemas en producción.",
        fintech:
          "**Experiencia Fintech:** Sí.\n\nConstruyó **Chau Deudas**, una plataforma fintech de consolidación de deudas personales, integrando APIs financieras .NET Core, implementando seguridad reCAPTCHA y entregando una UI responsive pixel-perfect desde diseños de Figma.\n\nDominios trabajados: gestión de créditos, procesamiento de transacciones financieras, integración segura de APIs.",
        availability:
          "**Disponibilidad:** Sí, actualmente estoy abierto a proyectos freelance y posiciones remotas.\n\nPuedes contactarme a través de la página de contacto o agendar una llamada técnica para discutir oportunidades de colaboración.",
        easterEgg:
          "👋 ¡Hola! 🥚\n\nPsst… este sitio tiene secretos. Prueba con **Konami**, o pícale a los `$` repetidamente… Solo digo. 🕵️",
        fallback:
          "No tengo esa información en mi base de conocimiento. Puedes preguntarme sobre:\n\n• Proyectos construidos\n• Stack tecnológico y habilidades\n• Experiencia backend\n• Experiencia profesional\n• Arquitectura de sistemas\n• Información de contacto\n• Nivel de experiencia",
      },
      examples: [
        "¿Qué tecnologías usa José?",
        "¿Tiene experiencia en fintech?",
        "¿Está disponible para proyectos?",
        "¿Cuál es su stack favorito?",
        "¡Saluda!",
      ],
    },
    jabcbot: {
      open: "> JabcBot",
      title: "JabcBot v1.0 — Asistente IA",
      buttonOpen: "Abrir JabcBot",
      buttonClose: "Cerrar JabcBot",
      footerProjects: "→ Ver proyectos",
      footerSkills: "→ Ver habilidades",
      footerContact: "→ Ir a contacto",
    },
    contact: {
      title: "Contacto",
      subtitle: "contacto --conectar",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      schedule: "Agenda una llamada técnica",
      scheduleDesc: "WhatsApp",
      clickToReveal: "[Click para revelar]",
      copied: "¡Copiado!",
      copyLabel: "Copiar al portapapeles",
      emailSubject: "Trabajemos juntos",
      emailBody: "¡Hola José! Vi tu portafolio y me gustaría conectar.",
      whatsappMessage: "¡Hola José! Vi tu portafolio y me gustaría hablar sobre una oportunidad de proyecto.",
      orAskAI:
        "¿Buscas información específica? Consulta mi RAG AI Assistant personalizado sobre mi perfil de ingeniería.",
      aiAssistant: "AI Assistant",
      availability: "Disponible para proyectos freelance y posiciones remotas.",
    },
    skills: {
      title: "Habilidades",
      subtitle: "habilidades --inventario",
      pitch:
        "Construyo plataformas SaaS de grado profesional, sistemas en tiempo real y landing pages para empresas que necesitan infraestructura web escalable y confiable. Cada proyecto que entrego está diseñado para mantenibilidad desde el día uno — con TypeScript limpio, backends containerizados y límites de API bien definidos.",
      pitchLabel: "// acerca",
      categories: {
        Frameworks: "Frameworks",
        Languages: "Lenguajes",
        Databases: "Bases de Datos",
        DevOps: "DevOps",
        "Security & Testing": "Seguridad y Pruebas",
        Security: "Seguridad",
        "API Design": "Diseño de APIs",
        "Real-Time": "Tiempo Real",
      },
      primaryLanguage: "LENGUAJE PRINCIPAL",
      primaryLanguageDesc:
        "TypeScript se usa en frontend, backend e infraestructura — la columna vertebral del stack completo.",
      coreStack: "STACK ACTUAL",
      coreTechnologies: "TECNOLOGÍAS PRINCIPALES",
      secondaryTechnologies: "TECNOLOGÍAS SECUNDARIAS",
      capabilities: [
        "Construí aplicaciones SaaS con React y Next.js",
        "Diseñé APIs REST escalables con Node.js y NestJS",
        "Implementé sistemas en tiempo real con WebSockets",
        "Gestioné despliegues cloud con Azure y Docker",
        "Arquitecté soluciones CMS headless con Strapi",
      ],
      specializations: {
        security: "SEGURIDAD",
        apiDesign: "DISEÑO DE APIs",
        realTime: "SISTEMAS TIEMPO REAL",
        headlessCMS: "CMS HEADLESS",
        cmsItems: [
          "Strapi v5",
          "Arquitectura de Contenido",
          "Gestión de Roles",
          "Diseño de APIs",
          "Flujos Personalizados",
        ],
      },
      level: {
        Basic: "Básico",
        Intermediate: "Intermedio",
        Advanced: "Avanzado",
        Production: "Producción",
      },
      whatBuilt: "Lo que he construido con este stack",
      whatBuiltList: [
        "Construí plataformas de subastas/matching en tiempo real con WebSockets",
        "Desarrollé aplicaciones SaaS full-stack con auth, roles e integración de pagos",
        "Implementé soluciones CMS headless con Strapi y PostgreSQL",
        "Diseñé arquitectura frontend multilingüe con Next.js App Router",
        "Containericé aplicaciones full-stack con Docker para despliegue en producción",
        "Construí landing pages y sitios corporativos con CMS headless",
      ],
    },
    status: {
      title: "ESTADO DEL SISTEMA",
      frontend: "Frontend",
      backend: "Backend APIs",
      database: "Base de Datos",
      auth: "Sistemas de Auth",
      realtime: "Motor Tiempo Real",
      ai: "Capa de IA",
    },
    metrics: {
      title: "MÉTRICAS RÁPIDAS",
      nameLabel: "Nombre",
      titleLabel: "Título",
      summary:
        "Web Application Engineer construyendo plataformas SaaS, landing pages y sistemas tiempo real. TypeScript en todo el stack.",
      uptimeLabel: "Disponibilidad",
      domainsLabel: "Dominios",
      locationLabel: "Ubicación",
      languageLabel: "Idioma",
      specializations: "ESPECIALIZACIONES",
      specializationList: [
        "Plataformas SaaS",
        "Aplicaciones Web",
        "Sistemas Tiempo Real",
        "Arquitectura API",
        "CMS Headless",
      ],
    },
    developerLicense: {
      axisLabels: {
        frontendEng: "Ingeniería Frontend",
        backendSys: "Sistemas Backend",
        apiArch: "Arquitectura API",
        databases: "Bases de Datos",
        cloudDevOps: "Cloud & DevOps",
        security: "Seguridad",
      },
    },
  },
} as const;

export type Locale = keyof typeof dictionary;
export type Dict = typeof dictionary.en;
