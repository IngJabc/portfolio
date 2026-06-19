export interface Project {
  id: string;
  title: string;
  type: string;
  stack: string[];
  problem: string;
  architecture: string;
  challenges: string;
  solution: string;
  result: string;
  url: string;
  sourceUrl?: string | null;
  ndaProtected?: boolean;
  github?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const personalInfo = {
  name: "José Bonilla",
  title: "Web Application Engineer specialized in SaaS, Real-Time Systems & RESTful APIs",
  email: "",
  linkedin: "https://www.linkedin.com/in/ing-jabc",
  github: "https://github.com/ing-jabc",
  bio: "Web Application Engineer with 3+ years of experience building scalable web applications. Specialized in Next.js, NestJS, and real-time systems. Passionate about clean architecture, system design, and production-grade solutions.",
  yearsOfExperience: 3,
  domains: ["SaaS", "Landing Pages", "Real-time Systems", "API Architecture", "Headless CMS"],
};

export const skills: Skill[] = [
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "NestJS", "Strapi v5"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "C#", "Java"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "Git", "GitHub", "Azure DevOps"] },
  { category: "Security", items: ["JWT", "bcrypt", "reCAPTCHA"] },
  { category: "API Design", items: ["REST APIs", "Swagger", "OpenAPI"] },
  { category: "Real-Time", items: ["WebSockets"] },
];

export const projects: Project[] = [
  {
    id: "lupea",
    title: "LUPEA",
    type: "SaaS",
    stack: ["Next.js", "Strapi v5", "TypeScript", "PostgreSQL", "WebSockets", "JWT"],
    problem: "Los clientes necesitaban buscar repuestos de vehículos por marca, modelo, año y calidad, mientras los proveedores ofrecían precios y disponibilidad basados en cercanía geográfica.",
    architecture: "Plataforma tipo marketplace con matching algorithm. Clientes publican búsquedas, proveedores reciben notificaciones en tiempo real y ofertan. Sistema de chat bidireccional post-aceptación.",
    challenges: "Implementar un sistema de matching eficiente entre búsquedas de clientes y ofertas de proveedores, manejo de WebSockets para notificaciones en tiempo real, y un sistema de chat escalable.",
    solution: "Arquitectura basada en Next.js con Strapi como CMS headless. WebSockets para comunicación en tiempo real. Algoritmo de matching por geolocalización y filtros. JWT para autenticación segura.",
    result: "Plataforma SaaS funcional con experiencia tipo 'Tinder' para compra/venta de repuestos, chat en tiempo real y sistema de cotizaciones.",
    url: "https://www.lupea.app/",
    sourceUrl: null,
    ndaProtected: true,
  },
  {
    id: "algira",
    title: "Algira",
    type: "Real-time System",
    stack: ["Next.js", "Strapi v5", "TypeScript", "PostgreSQL", "WebSockets", "JWT", "Braintree"],
    problem: "Crear un sistema de rifas en tiempo real con pasarela de pago integrada, donde los usuarios pudieran participar y ver resultados al instante.",
    architecture: "Plataforma de rifas en tiempo real con Next.js, Strapi como backend headless, WebSockets para actualizaciones en vivo, y Braintree para procesamiento de pagos.",
    challenges: "Sincronización de eventos en tiempo real durante los sorteos, integración segura con Braintree, manejo de concurrencia en la compra de participaciones.",
    solution: "Implementación de WebSockets para transmisión de eventos en vivo. Integración con Braintree para pagos seguros. Arquitectura escalable con Strapi y PostgreSQL.",
    result: "Sistema de rifas en tiempo real completamente funcional con pagos integrados, actualizaciones en vivo y experiencia de usuario fluida.",
    url: "https://algira-web.vercel.app/",
    sourceUrl: "https://develsoftdev@dev.azure.com/develsoftdev/Algira/_git/Algira_Web",
    ndaProtected: false,
  },
  {
    id: "paula-roman",
    title: "Paula Román — Asesora Jurídica",
    type: "Landing Page / Corporate Website",
    stack: ["Next.js", "TypeScript"],
    problem: "Designed and built a professional landing page for an independent legal advisor, focused on credibility, clarity, and lead generation.",
    architecture: "",
    challenges:
      "Paula Román, a strategic mentor with 30+ years in the insurance industry, had no digital presence. She needed a professional landing page to communicate her value proposition to independent insurance brokers and drive direct WhatsApp leads.",
    solution:
      "Designed and built a landing page with Next.js, TypeScript and Strapi as headless CMS. The page includes a hero with direct CTA, mentorship program overview, a 3-phase coaching cycle, client testimonials, and a contact section. All content is editable from Strapi without code changes.",
    result:
      "Paula now has a professional digital presence that clearly communicates her offer, with a direct WhatsApp lead capture channel and real client testimonials that reinforce her credibility.",
    url: "https://www.paularomanasesora.com/",
    sourceUrl: "https://github.com/paularomanasesora/paula-roman",
    ndaProtected: false,
  },
  {
    id: "chau-deudas",
    title: "Chau Deudas",
    type: "Fintech",
    stack: ["Next.js", "TypeScript", ".NET Core", "C#", "MySQL", "reCAPTCHA"],
    problem: "Usuarios necesitaban acceso a créditos y planes de pago para consolidar y saldar sus deudas de forma sencilla.",
    architecture: "Frontend en Next.js con diseño basado en Figma. Backend en .NET Core con C#. Integración con sistemas financieros para procesamiento de créditos.",
    challenges: "Traducir diseños de Figma a una interfaz funcional y responsive, integración con APIs financieras, manejo de formularios complejos con validación en tiempo real.",
    solution: "Desarrollo frontend completo con Next.js y TypeScript, siguiendo fielmente los diseños de Figma. Implementación de reCAPTCHA para seguridad. Consumo de APIs REST del backend .NET.",
    result: "Interfaz de usuario moderna y funcional para una plataforma fintech de créditos, con experiencia de usuario fluida y diseño responsive.",
    url: "https://www.chaudeudas.com.uy/",
    sourceUrl: null,
    ndaProtected: true,
  },
  {
    id: "develsoft",
    title: "Develsoft SAS",
    type: "Website",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL"],
    problem: "La empresa necesitaba una presencia web corporativa que reflejara su expertise en desarrollo de software y arquitectura de sistemas.",
    architecture: "Sitio web corporativo construido con Next.js para el frontend y NestJS para el backend, con PostgreSQL como base de datos.",
    challenges: "Crear un sitio que comunicara profesionalismo y capacidad técnica, optimizado para SEO y con rendimiento excepcional.",
    solution: "Desarrollo fullstack con Next.js y NestJS, arquitectura limpia, diseño responsivo y optimización de Core Web Vitals.",
    result: "Sitio web corporativo profesional que representa a la empresa en el mercado digital.",
    url: "https://www.develsoft.dev/",
    sourceUrl: "https://develsoftdev@dev.azure.com/develsoftdev/Develsoft/_git/Develsoft_Web",
    ndaProtected: false,
  },
  {
    id: "braganza-vial",
    title: "Braganza Vial",
    type: "Landing Page / Corporate Website",
    stack: ["Next.js", "TypeScript", "Strapi"],
    problem: "Built a corporate landing page for a road infrastructure company, using Strapi as headless CMS for content management.",
    architecture: "",
    challenges:
      "Braganza Vial's website had all content hardcoded directly into the codebase. The team couldn't update services, projects, clients, navigation or footer without developer intervention, creating constant technical dependency.",
    solution:
      "Migrated the backend to Strapi v5 with PostgreSQL, designing a full content structure for all site sections. Connected the existing frontend to the new CMS without altering the UI, and built a new \"Clients\" section with a logo grid manageable entirely from the admin panel.",
    result:
      "Braganza Vial's team can now update all site content autonomously from the admin panel without touching code. The project spanned 54 development hours across 6 structured stages.",
    url: "https://www.braganzavial.com.uy/",
    sourceUrl: null,
    ndaProtected: true,
  },
];

export const experience: Experience[] = [
  {
    company: "Develsoft SAS",
    role: "Fullstack Web Developer",
    period: "02/2023 – 04/2026",
    location: "Remote, Uruguay",
    highlights: [
      "Architected and scaled production-grade multi-tenant applications using Next.js, NestJS, and TypeScript, achieving measurable improvements in modularity, maintainability, and runtime performance across the full stack.",
      "Designed and optimized high-throughput RESTful APIs on NestJS with PostgreSQL-backed data pipelines, ensuring sub-100ms P95 response latency under concurrent production loads.",
      "Engineered responsive, component-driven UIs with React and Next.js, enforcing clean architecture patterns that reduced cross-team merge conflicts and accelerated feature delivery.",
      "Orchestrated full-stack application containerization using Docker and Compose, standardizing development environments and streamlining CI/CD pipelines — cutting new developer onboarding time by approximately 60%.",
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "Strapi", "WebSockets", "JWT", "Braintree", ".NET Core", "C#", "MySQL", "reCAPTCHA"],
  },
  {
    company: "Marna Corporate Group C.A.",
    role: "Web Developer",
    period: "10/2018 - 05/2019",
    location: "Barquisimeto, Venezuela",
    highlights: [
      "Developed dynamic, data-intensive web applications with JavaScript, AJAX, and MongoDB, implementing real-time client–server data synchronization for complex business workflows.",
      "Built and integrated interactive data visualization layers for analytical platform telemetry, processing structured and semi-structured data streams for enterprise reporting.",
    ],
    tech: ["JavaScript", "AJAX", "MongoDB"],
  },
  {
    company: "Copikon Venezuela C.A.",
    role: "Computer Equipment Technician",
    period: "09/2020 - 01/2023",
    location: "Barquisimeto, Venezuela",
    highlights: [
      "Performed infrastructure troubleshooting and hardware diagnostics across a fleet of 200+ enterprise workstations, ensuring 99% system availability and reducing mean-time-to-repair through systematic root-cause analysis.",
      "Designed and implemented a digital asset tracking system that automated inventory logging, eliminating manual spreadsheets and reducing audit reconciliation time by an estimated 70%.",
    ],
    tech: ["Hardware"],
  },
  {
    company: "Zifeng International Language School C.A.",
    role: "Professor of English",
    period: "10/2022 - 10/2023",
    location: "Barquisimeto, Venezuela",
    highlights: [
      "EF SET English Certificate (C1 Advanced)",
      "English language instruction for international students.",
    ],
    tech: [],
  },
];

export const systemStatus = {
  frontend: "ONLINE" as const,
  backend: "STABLE" as const,
  database: "OPTIMIZED" as const,
  auth: "ACTIVE" as const,
  realtime: "OPERATIONAL" as const,
  ai: "CONNECTED" as const,
};

export const statusColors: Record<string, string> = {
  ONLINE: "#10B981",
  STABLE: "#3B82F6",
  OPTIMIZED: "#8B5CF6",
  ACTIVE: "#0284C7",
  OPERATIONAL: "#F59E0B",
  CONNECTED: "#10B981",
};
