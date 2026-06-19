export interface SkillWithContext {
  name: string;
  description: string;
  context: string;
  level: "Basic" | "Intermediate" | "Advanced" | "Production";
}

export interface SkillCategory {
  id: string;
  icon: string;
  skills: SkillWithContext[];
}

export const skillsData: Record<string, SkillCategory[]> = {
  en: [
    {
      id: "UI Engineering",
      icon: "\u{1F3A8}",
      skills: [
        {
          name: "React & Next.js",
          description:
            "Built responsive SPAs, server-rendered dashboards, and multilingual apps using hooks, App Router patterns, and state management.",
          context: "SaaS dashboards, admin panels, corporate sites, fintech interfaces",
          level: "Production",
        },
        {
          name: "TypeScript",
          description:
            "Type-safe development across the stack — from API contracts to component props. Reduced runtime errors through strict typing.",
          context: "Web apps, shared libraries, API integration layers",
          level: "Production",
        },
        {
          name: "JavaScript (ES6+)",
          description:
            "Legacy and modern JavaScript across frontend and backend — used extensively before the TypeScript transition.",
          context: "Legacy codebases, early-stage projects, dynamic scripting",
          level: "Production",
        },
        {
          name: "Tailwind CSS & Modern CSS",
          description:
            "Utility-first responsive layouts with dark mode, glassmorphism, and custom animations. Built without heavy CSS frameworks.",
          context: "Portfolio sites, marketing pages, component libraries",
          level: "Advanced",
        },
      ],
    },
    {
      id: "Backend & APIs",
      icon: "\u2699\uFE0F",
      skills: [
        {
          name: "NestJS",
          description:
            "Modular REST APIs with dependency injection, guards, interceptors, and auto-generated Swagger documentation. Clean architecture for production backends.",
          context: "SaaS backends, auth systems, marketplace APIs, fintech services",
          level: "Production",
        },
        {
          name: "Node.js",
          description:
            "Server-side development for RESTful APIs, middleware pipelines, and microservices with async patterns and error handling.",
          context: "API services, auth layers, real-time event processing",
          level: "Advanced",
        },
        {
          name: "REST API Design",
          description:
            "Designed versioned, validated APIs with consistent error responses, pagination, and OpenAPI documentation for integrations.",
          context: "Fintech integrations, marketplace platforms, CMS backends",
          level: "Production",
        },
        {
          name: "Auth & Security",
          description:
            "JWT authentication with bcrypt password hashing, role-based access control, and reCAPTCHA for public-facing forms.",
          context: "User management, protected routes, secure API endpoints",
          level: "Production",
        },
      ],
    },
    {
      id: "Data & Infrastructure",
      icon: "\uD83D\uDCC4",
      skills: [
        {
          name: "PostgreSQL",
          description:
            "Relational schema design with normalized models, migrations, and optimized queries for production-scale data.",
          context: "SaaS platforms, real-time systems, CMS backends",
          level: "Advanced",
        },
        {
          name: "Docker",
          description:
            "Containerized full-stack apps with multi-container Compose setups for consistent dev, test, and production environments.",
          context: "Local development, CI/CD pipelines, cloud deployment",
          level: "Advanced",
        },
        {
          name: "Azure & Cloud",
          description:
            "Cloud resource management, web app hosting, and CI/CD pipeline automation on Azure with App Services and DevOps.",
          context: "Deployment automation, database services, infrastructure",
          level: "Intermediate",
        },
      ],
    },
    {
      id: "Product & Tooling",
      icon: "\uD83D\uDEE0\uFE0F",
      skills: [
        {
          name: "Strapi (Headless CMS)",
          description:
            "Built headless CMS backends with custom content types, role management, webhooks, and API customization for client platforms.",
          context: "Marketplaces, corporate sites, content-driven apps",
          level: "Advanced",
        },
        {
          name: "Git & Version Control",
          description:
            "Feature branching, code review workflows, conflict resolution, and collaborative development across team and solo projects.",
          context: "All projects — team and solo development",
          level: "Production",
        },
        {
          name: "WebSockets & Real-Time",
          description:
            "Real-time bidirectional communication for live events, chat, matching engines, and data synchronization.",
          context: "Auction platforms, live dashboards, notifications",
          level: "Advanced",
        },
      ],
    },
  ],
  es: [
    {
      id: "Ingeniería UI",
      icon: "\u{1F3A8}",
      skills: [
        {
          name: "React & Next.js",
          description:
            "Construí SPAs responsivas, dashboards renderizados del servidor y apps multilingüe usando hooks, App Router y gestión de estado.",
          context: "Dashboards SaaS, paneles admin, sitios corporativos, interfaces fintech",
          level: "Production",
        },
        {
          name: "TypeScript",
          description:
            "Desarrollo type-safe en todo el stack — desde contratos de API hasta props de componentes. Reducción de errores en tiempo de ejecución con tipado estricto.",
          context: "Apps full-stack, librerías compartidas, capas de integración",
          level: "Production",
        },
        {
          name: "JavaScript (ES6+)",
          description:
            "JavaScript legacy y moderno en frontend y backend — usado extensamente antes de la transición a TypeScript.",
          context: "Codebases legacy, proyectos tempranos, scripting dinámico",
          level: "Production",
        },
        {
          name: "Tailwind CSS y CSS Moderno",
          description:
            "Diseños responsivos utility-first con modo oscuro, glassmorphism y animaciones personalizadas sin frameworks CSS pesados.",
          context: "Portafolios, páginas de marketing, librerías de componentes",
          level: "Advanced",
        },
      ],
    },
    {
      id: "Backend y APIs",
      icon: "\u2699\uFE0F",
      skills: [
        {
          name: "NestJS",
          description:
            "APIs REST modulares con inyección de dependencias, guards, interceptores y documentación Swagger autogenerada. Arquitectura limpia para backend en producción.",
          context: "Backends SaaS, sistemas de auth, APIs de marketplace, servicios fintech",
          level: "Production",
        },
        {
          name: "Node.js",
          description:
            "Desarrollo backend para APIs RESTful, middleware y microservicios con patrones asíncronos y manejo de errores.",
          context: "Servicios API, capas de autenticación, procesamiento en tiempo real",
          level: "Advanced",
        },
        {
          name: "Diseño de APIs REST",
          description:
            "APIs versionadas y validadas con respuestas de error consistentes, paginación y documentación OpenAPI para integraciones.",
          context: "Integraciones fintech, plataformas marketplace, backends CMS",
          level: "Production",
        },
        {
          name: "Auth y Seguridad",
          description:
            "Autenticación JWT con bcrypt, control de acceso basado en roles y reCAPTCHA para formularios públicos.",
          context: "Gestión de usuarios, rutas protegidas, endpoints seguros",
          level: "Production",
        },
      ],
    },
    {
      id: "Datos e Infraestructura",
      icon: "\uD83D\uDCC4",
      skills: [
        {
          name: "PostgreSQL",
          description:
            "Diseño de esquemas relacionales con modelos normalizados, migraciones y consultas optimizadas para datos a escala de producción.",
          context: "Plataformas SaaS, sistemas en tiempo real, backends CMS",
          level: "Advanced",
        },
        {
          name: "Docker",
          description:
            "Apps full-stack containerizadas con configuraciones multi-contenedor Compose para entornos consistentes de desarrollo, test y producción.",
          context: "Desarrollo local, pipelines CI/CD, despliegue cloud",
          level: "Advanced",
        },
        {
          name: "Azure y Cloud",
          description:
            "Gestión de recursos cloud, hosting de apps web y automatización de CI/CD en Azure con App Services y DevOps.",
          context: "Automatización de despliegues, servicios de base de datos, infraestructura",
          level: "Intermediate",
        },
      ],
    },
    {
      id: "Producto y Herramientas",
      icon: "\uD83D\uDEE0\uFE0F",
      skills: [
        {
          name: "Strapi (CMS Headless)",
          description:
            "Backends CMS headless con tipos de contenido personalizados, gestión de roles, webhooks y personalización de APIs para plataformas cliente.",
          context: "Marketplaces, sitios corporativos, apps con contenido dinámico",
          level: "Advanced",
        },
        {
          name: "Git y Control de Versiones",
          description:
            "Flujos de feature branching, code review, resolución de conflictos y desarrollo colaborativo en proyectos en equipo y solitarios.",
          context: "Todos los proyectos — desarrollo en equipo y solo",
          level: "Production",
        },
        {
          name: "WebSockets y Tiempo Real",
          description:
            "Comunicación bidireccional en tiempo real para eventos en vivo, chat, motores de matching y sincronización de datos.",
          context: "Plataformas de subastas, dashboards en vivo, notificaciones",
          level: "Advanced",
        },
      ],
    },
  ],
};
