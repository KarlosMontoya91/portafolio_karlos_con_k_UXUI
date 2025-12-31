/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: '#07040f',
          1: '#0b0720',
          2: '#120a2e',
        },
        neon: {
          purple: '#8B5CF6',
          cyan: '#22D3EE',
          lime: '#A3FF12',
          pink: '#F472B6'
        },
        panel: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.12)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 0 30px rgba(139,92,246,0.25)',
        glowCyan: '0 0 0 1px rgba(255,255,255,0.08), 0 0 30px rgba(34,211,238,0.22)',
      },
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'ui-monospace', 'monospace'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
        noise: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'120\' height=\'120\' filter=\'url(%23n)\' opacity=\'.22\'/%3E%3C/svg%3E")'
      },
      keyframes: {
        caret: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-60%)' },
          '100%': { transform: 'translateX(60%)' },
        }
      },
      animation: {
        caret: 'caret 1s step-end infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
