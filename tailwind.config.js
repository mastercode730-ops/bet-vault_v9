/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030508',
          900: '#070A10',
          850: '#0B0F18',
          800: '#111724',
          700: '#1A2336',
        },
        gold: {
          300: '#FDE68A',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          glow: 'rgba(250, 204, 21, 0.25)',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
        roseGold: {
          400: '#FB7185',
          500: '#F43F5E',
        }
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shimmer': 'linear-gradient(135deg, #FFE066 0%, #FACC15 50%, #B45309 100%)',
        'emerald-shimmer': 'linear-gradient(135deg, #6EE7B7 0%, #10B981 50%, #047857 100%)',
      },
    },
  },
  plugins: [],
}
