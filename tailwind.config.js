/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
      },
      colors: {
        primary: '#111',
        secondary: '#9945FF',
        neon: '#00ff88',
        purple: '#9945FF',
        black: '#000',
        white: '#fff',
        card: '#111111',
        'card-border': '#1a1a1a',
        muted: '#888888',
      },
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      animation: {
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0, 255, 136, 0.2)', boxShadow: '0 0 15px rgba(0, 255, 136, 0.05)' },
          '50%': { borderColor: 'rgba(0, 255, 136, 0.5)', boxShadow: '0 0 30px rgba(0, 255, 136, 0.15)' },
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};
