/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Base surfaces
        parchment:  '#FAF8F5',
        cream:      '#F2EDE3',
        linen:      '#EDE6D8',
        sand:       '#DDD0BC',

        // Dark tones
        espresso:   '#1A1714',
        mocha:      '#2A1F18',
        walnut:     '#3D2B1F',

        // Gold accent scale
        gold: {
          light: '#E8B86D',
          DEFAULT: '#C9974A',
          dark: '#A0522D',
        },

        // Text
        ink:      '#1A1714',
        charcoal: '#3D3530',
        muted:    '#7A6E65',
        faint:    '#B5ADA5',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #A0522D 0%, #C9974A 50%, #E8B86D 100%)',
        'gradient-warm': 'linear-gradient(135deg, #1A1714 0%, #3D2B1F 50%, #6B3F25 100%)',
        'gradient-surface': 'linear-gradient(160deg, #FFFFFF 0%, #F5F0E8 50%, #EDE6D8 100%)',
        'gradient-hero': 'linear-gradient(150deg, #FAF8F5 0%, #F2EDE3 35%, #E8DDD0 65%, #DDD0BC 100%)',
      },
      boxShadow: {
        'gold-sm': '0 4px 16px rgba(160, 82, 45, 0.18)',
        'gold-md': '0 8px 30px rgba(160, 82, 45, 0.28)',
        'soft-sm': '0 2px 12px rgba(26, 23, 20, 0.06)',
        'soft-md': '0 8px 32px rgba(26, 23, 20, 0.10)',
        'soft-lg': '0 20px 60px rgba(26, 23, 20, 0.12)',
      },
    },
  },
  plugins: [],
}