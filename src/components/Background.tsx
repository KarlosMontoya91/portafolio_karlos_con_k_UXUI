import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import React from 'react'

/**
 * Fondo gamer/futurista: grid + noise + glows con parallax sutil por mouse.
 * Performance: animaciones ligeras + respeta prefers-reduced-motion.
 */
export function Background() {
  const reduced = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 60, damping: 20 })
  const y = useSpring(my, { stiffness: 60, damping: 20 })

  React.useEffect(() => {
    if (reduced) return

    const onMove = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth - 0.5) * 30
      const py = (e.clientY / window.innerHeight - 0.5) * 30
      mx.set(px)
      my.set(py)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reduced])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-bg-0" />

      <div className="absolute inset-0 opacity-[0.65] bg-grid [background-size:48px_48px]" />
      <div className="absolute inset-0 opacity-[0.25] bg-noise mix-blend-overlay" />

      <motion.div
        style={{ x, y }}
        className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.55),transparent_65%)]" />
      </motion.div>

      <motion.div
        style={{ x: x.get() * -0.6, y: y.get() * -0.6 }}
        className="absolute -bottom-28 -right-28 h-[560px] w-[560px] rounded-full blur-3xl"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.38),transparent_62%)]" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,114,182,0.12),transparent_45%)]" />

      {/* glyphs flotantes tipo “código” (detalle gamer) */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-[10%] top-[18%] font-mono text-xs text-neon-cyan/60 animate-floaty">{'{ }'}</div>
        <div className="absolute left-[70%] top-[22%] font-mono text-xs text-neon-lime/55 animate-floaty [animation-delay:1.2s]">{'< />'}</div>
        <div className="absolute left-[16%] top-[72%] font-mono text-xs text-neon-purple/55 animate-floaty [animation-delay:2.2s]">{'[ ]'}</div>
        <div className="absolute left-[78%] top-[72%] font-mono text-xs text-neon-pink/50 animate-floaty [animation-delay:3.1s]">{'// ship it'}</div>
      </div>
    </div>
  )
}
