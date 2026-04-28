/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['"Inter"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        parchment: '#FAF8F5',
        cream:     '#F2EDE3',
        linen:     '#EDE6D8',
        sand:      '#DDD0BC',
        espresso:  '#1A1714',
        mocha:     '#2A1F18',
        walnut:    '#3D2B1F',
        gold: {
          light:   '#E8B86D',
          DEFAULT: '#C9974A',
          dark:    '#A0522D',
        },
        sienna:    '#8B4513',
        ink:       '#1A1714',
        charcoal:  '#3D3530',
        muted:     '#7A6E65',
        faint:     '#B5ADA5',
      },
      boxShadow: {
        'gold-sm': '0 4px 16px rgba(139, 69, 19, 0.18)',
        'gold-md': '0 8px 30px rgba(139, 69, 19, 0.28)',
        'soft-sm': '0 2px 12px rgba(26, 23, 20, 0.06)',
        'soft-md': '0 8px 32px rgba(26, 23, 20, 0.10)',
        'soft-lg': '0 20px 60px rgba(26, 23, 20, 0.12)',
      },
    },
  },
  plugins: [],
}