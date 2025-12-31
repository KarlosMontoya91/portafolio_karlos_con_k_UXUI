import React from 'react'

export function Typewriter({
  lines,
  speed = 22,
  pause = 650,
  className,
}: {
  lines: string[]
  speed?: number
  pause?: number
  className?: string
}) {
  const [text, setText] = React.useState('')
  const [line, setLine] = React.useState(0)
  const [i, setI] = React.useState(0)

  React.useEffect(() => {
    let t: number

    const current = lines[line] ?? ''
    if (i <= current.length) {
      t = window.setTimeout(() => {
        setText(current.slice(0, i))
        setI((x) => x + 1)
      }, speed)
      return () => window.clearTimeout(t)
    }

    t = window.setTimeout(() => {
      setLine((l) => (l + 1) % lines.length)
      setI(0)
    }, pause)

    return () => window.clearTimeout(t)
  }, [i, line, lines, pause, speed])

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[10px] translate-y-[1px] bg-white/80 ml-1 animate-caret">&nbsp;</span>
    </span>
  )
}
