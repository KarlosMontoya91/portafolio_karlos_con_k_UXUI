import { Background } from './components/Background'
import { Navbar } from './components/Navbar'
import { TerminalHero } from './components/TerminalHero'
import { Section } from './components/Section'
import { SkillGrid } from './components/SkillGrid'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export default function App() {
  return (
    <div>
      <Background />
      <Navbar />

      <main>
        <TerminalHero />

        <Section id="sobre" kicker="ABOUT" title="Sobre mí">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7 gradient-border rounded-3xl">
              <div className="glass rounded-3xl p-6">
                <p className="text-white/80 leading-relaxed">
                  Trabajo en productos digitales donde la UI no es “solo bonita”: tiene que ser usable, accesible y rápida.
                  Me muevo cómodo entre investigación ligera, prototipos en Figma y ejecución en React. Me gusta llevar
                  los sistemas a un nivel de calidad “pro”: consistencia, tokens, estados, edge-cases y performance.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-display">Mi diferencial</div>
                    <div className="mt-2 text-sm text-white/70">Diseño + implementación. Cierro el loop: del prototipo al deploy.</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="font-display">Mi estilo</div>
                    <div className="mt-2 text-sm text-white/70">Gamer/futurista, microinteracciones limpias y sin matar el rendimiento.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 gradient-border rounded-3xl">
              <div className="glass rounded-3xl p-6">
                <div className="font-pixel text-[10px] text-neon-lime/80 tracking-widest">NOW PLAYING</div>
                <div className="mt-4 font-display text-xl">"Ship. Measure. Iterate."</div>
                <div className="mt-3 text-sm text-white/70">Accesibilidad, métricas y UX sin drama.</div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs text-white/55 font-mono">$ status</div>
                  <div className="mt-2 text-sm text-white/80">Construyendo componentes, dashboards y productos con enfoque en valor.</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="habilidades" kicker="SKILLS" title="Habilidades">
          <SkillGrid />
        </Section>

        <Section id="proyectos" kicker="WORK" title="Proyectos destacados">
          <Projects />
        </Section>

        <Section id="contacto" kicker="CONTACT" title="Contacto">
          <Contact />
        </Section>

        <footer className="mx-auto max-w-6xl px-4 pb-14">
          <div className="h-[1px] bg-white/10" />
          <div className="pt-6 text-xs text-white/55 flex flex-wrap items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Karlos Montoya</div>
            <div className="font-mono">built with React + Tailwind + Framer Motion</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
