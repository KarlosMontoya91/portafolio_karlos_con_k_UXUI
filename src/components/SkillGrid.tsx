import { profile } from '@/data/profile'
import { Badge } from './Badge'

export function SkillGrid() {
  const groups: Array<{ title: string; tone: 'purple' | 'cyan' | 'lime'; items: string[] }> = [
    { title: 'UX/UI', tone: 'purple', items: profile.skills.uxui },
    { title: 'Front-End', tone: 'cyan', items: profile.skills.frontend },
    { title: 'Tooling', tone: 'lime', items: profile.skills.tooling },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {groups.map((g) => (
        <div key={g.title} className="gradient-border rounded-3xl">
          <div className="glass rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-display tracking-tight">{g.title}</h3>
              <Badge tone={g.tone}>{g.title}</Badge>
            </div>
            <ul className="mt-4 space-y-2">
              {g.items.map((it) => (
                <li key={it} className="text-sm text-white/75 flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
