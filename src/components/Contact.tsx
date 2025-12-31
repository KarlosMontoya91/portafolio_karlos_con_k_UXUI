import { profile } from '@/data/profile'
import { Mail, MessageCircle, Github, Linkedin, Palette } from 'lucide-react'

export function Contact() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <div className="md:col-span-2 gradient-border rounded-3xl">
        <div className="glass rounded-3xl p-6">
          <h3 className="font-display text-xl">¿Construimos algo juntos?</h3>
          <p className="mt-3 text-white/75 leading-relaxed">
            Si tienes un proyecto, necesitas apoyo en UX/UI, componentes, accesibilidad o quieres una landing con animaciones bien cuidadas,
            mándame mensaje y lo aterrizamos.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-neon-cyan/16 hover:bg-neon-cyan/22 border border-neon-cyan/30 shadow-glowCyan transition"
              href={profile.links.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium bg-white/8 hover:bg-white/12 border border-white/15 transition"
              href={`mailto:${profile.links.email}`}
            >
              <Mail size={18} /> Email
            </a>
          </div>

          <div className="mt-6 text-xs text-white/55 font-mono">$ ping {profile.location.toLowerCase().replace(/\s+/g, '-')}</div>
        </div>
      </div>

      <div className="gradient-border rounded-3xl">
        <div className="glass rounded-3xl p-6">
          <div className="font-pixel text-[10px] text-neon-purple/80 tracking-widest">LINKS</div>
          <div className="mt-4 space-y-3">
            <a className="flex items-center gap-2 text-sm text-white/75 hover:text-white" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
            <a className="flex items-center gap-2 text-sm text-white/75 hover:text-white" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            <a className="flex items-center gap-2 text-sm text-white/75 hover:text-white" href={profile.links.behance} target="_blank" rel="noreferrer"><Palette size={18} /> Behance</a>
          </div>
          <div className="mt-6 text-xs text-white/55">Tip: agrega aquí también Dribbble, Instagram o tu CV en PDF.</div>
        </div>
      </div>
    </div>
  )
}
