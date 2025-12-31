import React from 'react'
import { profile, type Project } from '@/data/profile'
import { Badge } from './Badge'
import { ExternalLink } from 'lucide-react'

const kinds: Project['kind'][] = ['Gobierno', 'Producto', 'Brand', 'Lab']

function toneByKind(kind: Project['kind']) {
  if (kind === 'Gobierno') return 'cyan'
  if (kind === 'Producto') return 'purple'
  if (kind === 'Brand') return 'pink'
  return 'lime'
}

export function Projects() {
  const [filter, setFilter] = React.useState<Project['kind'] | 'Todos'>('Todos')

  const list = profile.projects.filter((p) => (filter === 'Todos' ? true : p.kind === filter))

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <button
          onClick={() => setFilter('Todos')}
          className={`rounded-full px-4 py-2 text-xs border transition ${
            filter === 'Todos'
              ? 'bg-white/12 border-white/20 text-white'
              : 'bg-white/6 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          Todos
        </button>
        {kinds.map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`rounded-full px-4 py-2 text-xs border transition ${
              filter === k
                ? 'bg-white/12 border-white/20 text-white'
                : 'bg-white/6 border-white/10 text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {list.map((p) => (
          <div key={p.title} className="gradient-border rounded-3xl">
            <div className="glass rounded-3xl p-6 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge tone={toneByKind(p.kind) as any}>{p.kind}</Badge>
                    <span className="text-xs text-white/55">{p.role}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl tracking-tight">{p.title}</h3>
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-2 border border-white/15 bg-white/5 hover:bg-white/10 transition"
                    aria-label={`Abrir ${p.title}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>

              <p className="mt-3 text-sm text-white/75 leading-relaxed">{p.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li key={h} className="text-sm text-white/70 flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-neon-cyan/60" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <div className="h-[1px] bg-white/10" />
                <div className="mt-4 text-xs text-white/55 font-mono">
                  $ open --project "{p.title.toLowerCase()}"
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
