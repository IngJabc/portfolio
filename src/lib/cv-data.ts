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
  title: "Fullstack Web Developer",
  email: "",
  linkedin: "https://www.linkedin.com/in/ing-jabc",
  github: "",
  bio: "Fullstack engineer with 3+ years of experience building scalable web applications. Specialized in Next.js, NestJS, and real-time systems. Passionate about clean architecture, system design, and production-grade solutions.",
  yearsOfExperience: 3,
  domains: ["SaaS", "Fintech", "Real-time Systems", "API Architecture"],
};

export const skills: Skill[] = [
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "NestJS", "Strapi v5"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "C#", "Java"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "DevOps", items: ["Docker", "Git", "GitHub", "Azure DevOps"] },
  { category: "Security & Testing", items: ["JWT", "bcrypt", "reCAPTCHA", "Jest", "Swagger", "WebSockets"] },
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
    github: "https://github.com/jose/lupea",
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
  },
];

export const experience: Experience[] = [
  {
    company: "Develsoft SAS",
    role: "Fullstack Web Developer",
    period: "02/2023 – Present",
    location: "Remote, Uruguay",
    highlights: [
      "Architected and maintained scalable full-stack applications with TypeScript, Next.js, and NestJS, improving performance and state management in production.",
      "Designed secure RESTful APIs with NestJS, integrating PostgreSQL databases and implementing JWT authentication with bcrypt.",
      "Built responsive component-driven UIs in React and Next.js, focusing on responsive design, usability, and clean architecture.",
      "Containerized microservices using Docker, ensuring environment consistency and reproducible infrastructure across stages.",
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT", "bcrypt"],
  },
  {
    company: "Marna Corporate Group C.A.",
    role: "Web Developer",
    period: "10/2018 - 05/2019",
    location: "Barquisimeto, Venezuela",
    highlights: [
      "Engineered lightweight web applications using HTML, CSS, JavaScript, Bootstrap, and Material Kit.",
      "Implemented dynamic client-side interactions with AJAX, jQuery, and JSON schemas linked to MongoDB.",
      "Integrated data visualization layers using interactive charting libraries for analytical platform telemetry.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "jQuery", "AJAX", "MongoDB", "Bootstrap"],
  },
  {
    company: "Copikon Venezuela C.A.",
    role: "Computer Equipment Technician",
    period: "09/2020 - 01/2023",
    location: "Barquisimeto, Venezuela",
    highlights: [
      "Review, diagnosis, maintenance, conditioning and repair of computer equipment.",
      "Registration, updating and inventory management of electronic equipment through Microsoft Excel 2016.",
    ],
    tech: ["Hardware", "Excel"],
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
  ACTIVE: "#06B6D4",
  OPERATIONAL: "#F59E0B",
  CONNECTED: "#10B981",
};
