import { cn } from './utils'

export function Section({
  id,
  title,
  kicker,
  children,
  className,
}: {
  id: string
  title: string
  kicker?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('mx-auto max-w-6xl px-4 py-16 md:py-20', className)}>
      <div className="mb-8">
        {kicker ? (
          <div className="font-pixel text-[10px] text-neon-cyan/80 tracking-widest">
            {kicker}
          </div>
        ) : null}
        <h2 className="mt-3 font-display text-2xl md:text-3xl tracking-tight">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
