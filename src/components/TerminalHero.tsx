import { motion } from 'framer-motion'
import { Typewriter } from './Typewriter'
import { profile } from '@/data/profile'
import { Badge } from './Badge'
import { Github, Linkedin, Palette, Mail } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function TerminalHero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-4 pt-10 pb-14 md:pt-14 md:pb-20">
      <div className="grid gap-10 md:grid-cols-12 items-start">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="md:col-span-7"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <Badge tone="purple">UX/UI</Badge>
            <Badge tone="cyan">Front-End</Badge>
            <Badge tone="lime">GovTech</Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display text-4xl md:text-6xl leading-[1.02] tracking-tight"
          >
            Construyo interfaces
            <span className="text-grad"> rápidas</span>,
            <br />
            claras y con
            <span className="text-grad"> estilo</span>.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-white/75 leading-relaxed">
            {profile.headline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-full px-5 py-3 text-sm font-medium bg-neon-purple/20 hover:bg-neon-purple/28 border border-neon-purple/30 shadow-glow transition"
              href="#proyectos"
            >
              Ver proyectos
            </a>
            <a
              className="rounded-full px-5 py-3 text-sm font-medium bg-white/8 hover:bg-white/12 border border-white/15 transition"
              href="#contacto"
            >
              Contacto
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {profile.stats.map((s) => (
              <div key={s.label} className="gradient-border rounded-3xl">
                <div className="glass rounded-3xl p-4">
                  <div className="font-display text-lg">{s.value}</div>
                  <div className="mt-1 text-xs text-white/70">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="md:col-span-5"
        >
          <div className="gradient-border rounded-3xl">
            <div className="glass rounded-3xl overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="font-mono text-xs text-white/60">terminal.ux</div>
              </div>

              <div className="p-5 font-mono text-[13px] leading-relaxed">
                <div className="text-white/65">$ whoami</div>
                <div className="mt-1 text-white">{profile.name.toLowerCase().replace(/\s+/g, '-')}
                </div>

                <div className="mt-4 text-white/65">$ cat profile.txt</div>
                <div className="mt-1 text-white/90">
                  <Typewriter
                    lines={[
                      'UX/UI · Design Systems · Accesibilidad',
                      'React · TypeScript · Performance',
                      'GovTech · Productos · Branding',
                    ]}
                  />
                </div>

                <div className="mt-4 text-white/65">$ ls projects/</div>
                <div className="mt-1 flex flex-wrap gap-2">
                  {['via-design-system', 'supplyhub', 'reservia', 'reto365', 'cgi', 'dwonky'].map((p) => (
                    <span key={p} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
                      {p}/
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                  <a className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white" href={profile.links.behance} target="_blank" rel="noreferrer">
                    <Palette size={16} /> Behance
                  </a>
                  <a className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white" href={`mailto:${profile.links.email}`}>
                    <Mail size={16} /> Email
                  </a>
                </div>

                <div className="mt-4 text-white/60">$ <span className="text-neon-cyan">_</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
