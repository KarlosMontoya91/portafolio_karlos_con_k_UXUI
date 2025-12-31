import { cn } from './utils'

export function Badge({ children, tone = 'purple' }: { children: React.ReactNode; tone?: 'purple' | 'cyan' | 'lime' | 'pink' }) {
  const map = {
    purple: 'border-neon-purple/30 text-neon-purple bg-neon-purple/10',
    cyan: 'border-neon-cyan/30 text-neon-cyan bg-neon-cyan/10',
    lime: 'border-neon-lime/30 text-neon-lime bg-neon-lime/10',
    pink: 'border-neon-pink/30 text-neon-pink bg-neon-pink/10',
  } as const

  return (
    <span className={cn('inline-flex items-center rounded-full border px-3 py-1 text-[11px] leading-none', map[tone])}>
      {children}
    </span>
  )
}
