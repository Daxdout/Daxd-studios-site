/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void: '#080808',
        charcoal: '#111111',
        smoke: '#1a1a1a',
        mist: '#242424',
        gold: '#D4A843',
        ember: '#E8622A',
        frost: '#E8E8E8',
        dim: '#888888',
      },
    },
  },
  plugins: [],
}
