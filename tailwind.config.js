/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest:   '#0d3b2e',
        emerald:  '#1a7a4a',
        jade:     '#27ae6b',
        crimson:  '#c0392b',
        flame:    '#e74c3c',
        onyx:     '#0c0c0c',
        charcoal: '#1a1a1a',
        smoke:    '#2d2d2d',
        ash:      '#888888',
        pearl:    '#f8f8f8',
        ivory:    '#f0ece4',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
}
