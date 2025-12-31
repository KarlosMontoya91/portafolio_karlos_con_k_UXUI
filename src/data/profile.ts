export type Project = {
  title: string
  kind: 'Gobierno' | 'Producto' | 'Brand' | 'Lab'
  role: string
  tags: string[]
  summary: string
  highlights: string[]
  link?: string
}

export const profile = {
  name: 'Karlos Montoya',
  headline: 'UX/UI + Front-End · Gobierno de Nuevo León · Construyo productos digitales con enfoque en sistemas, diseño y performance.',
  location: 'Monterrey, NL',
  // TODO: reemplaza con tus links
  links: {
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/',
    behance: 'https://www.behance.net/',
    email: 'karlosmontoya091@gmail.com',
    whatsapp: 'https://wa.me/52XXXXXXXXXX'
  },
  stats: [
    { label: 'Años construyendo interfaces', value: '3+' },
    { label: 'Sistemas / módulos entregados', value: '10+' },
    { label: 'Enfoque', value: 'Accesibilidad + Performance' },
  ],
  skills: {
    uxui: ['Research rápido', 'Arquitectura de información', 'Prototipado en Figma', 'Design Systems', 'Accesibilidad (WCAG)'],
    frontend: ['React / Next', 'TypeScript', 'Tailwind', 'Animaciones (Framer/GSAP)', 'Optimización web'],
    tooling: ['Figma', 'Git (GitHub/GitLab)', 'GA4 / Tag Manager', 'Docker básico', 'Documentación (HU/Épicas)'],
  },
  projects: [
    {
      title: 'VÍA Design System (Gobierno de NL)',
      kind: 'Gobierno',
      role: 'UX/UI + Front-End',
      tags: ['Design System', 'Accesibilidad', 'Componentes', 'Documentación'],
      summary: 'Sistema de diseño para estandarizar UI, acelerar entregas y mantener consistencia en portales y sistemas internos.',
      highlights: [
        'Componentes reutilizables + guías de uso',
        'Tokens, estados, patrones y ejemplos',
        'Mejora de consistencia y velocidad de desarrollo',
      ],
    },
    {
      title: 'SupplyHub / Materiales / Almacenes (ecosistema interno)',
      kind: 'Gobierno',
      role: 'UX/UI + Front-End',
      tags: ['Sistemas', 'Flujos', 'Dashboards', 'Tablas'],
      summary: 'Módulos orientados a operación (inventarios, abastecimiento, movimientos) con foco en eficiencia, claridad y control.',
      highlights: [
        'Flujos TO-BE y prototipos navegables',
        'Tablas densas optimizadas + filtros',
        'Diseño de estados, validaciones y permisos',
      ],
    },
    {
      title: 'Reservia',
      kind: 'Producto',
      role: 'Producto + UX/UI + Front-End',
      tags: ['Booking', 'Marketplace', 'Branding'],
      summary: 'Plataforma multi-vertical tipo reservas (hoteles, barberías, médicos, veterinarias).',
      highlights: [
        'Arquitectura de producto y UI escalable',
        'Paleta y reglas visuales',
        'Enfoque mobile-first',
      ],
    },
    {
      title: 'Reto 365 (app de ahorro gamificado)',
      kind: 'Lab',
      role: 'UX/UI + Front-End',
      tags: ['Finanzas', 'Gamificación', 'Dashboard'],
      summary: 'Ahorro diario con montos aleatorios, tracking mensual y visualizaciones para mantener motivación.',
      highlights: [
        'Indicadores + alertas de progreso',
        'UX para hábitos (streaks, recompensas)',
      ],
    },
    {
      title: 'CGI · Consultoría y Gestoría Industrial',
      kind: 'Brand',
      role: 'Branding + Web',
      tags: ['Identidad', 'Landing', 'Manual de marca'],
      summary: 'Identidad eco-industrial y sitio web con enfoque en confianza, ingeniería y claridad comercial.',
      highlights: [
        'Manual de identidad (logo, color, usos)',
        'Landing optimizada y moderna',
      ],
    },
    {
      title: 'Pastelería Lety (branding + contenido)',
      kind: 'Brand',
      role: 'Diseño + marketing',
      tags: ['Merch', 'Packaging', 'Piezas'],
      summary: 'Diseños para productos, invitaciones, empaques y piezas promocionales.',
      highlights: [
        'Coherencia visual en piezas',
        'Piezas listas para impresión y redes',
      ],
    },
  ] as Project[],
}
