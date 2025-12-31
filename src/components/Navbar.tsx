import { cn } from './utils'

const items = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre mí' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <a href="#inicio" className="font-display tracking-wider text-sm">
            <span className="text-grad">Karlos</span>
            <span className="text-white/70">.con_K</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1">
            {items.map((it) => (
              <a
                key={it.id}
                href={`#${it.id}`}
                className={cn(
                  'px-3 py-2 text-xs text-white/70 hover:text-white transition',
                  'rounded-full hover:bg-white/10'
                )}
              >
                {it.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium bg-white/10 hover:bg-white/15 border border-white/15 shadow-glow transition"
          >
            Contactar
            <span className="text-neon-cyan">▸</span>
          </a>
        </div>
      </div>
    </header>
  )
}
