/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0c0f',
        panel: '#14171d',
        panel2: '#181b22',
        border: '#232733',
        text: '#e9eef8',
        textDim: '#b6bfcd',
        gold: '#f5c044',
        goldLight: '#ffd76a',
        emerald: '#22c55e',
        emeraldLight: '#34d399',
        focus: '#93c5fd',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        'xl': '16px',
        'lg': '12px',
        'full': '999px',
      },
      boxShadow: {
        'soft': '0 6px 20px rgba(0,0,0,0.25)',
        'hard': '0 10px 30px rgba(0,0,0,0.35)',
      },
      animation: {
        'marquee': 'marquee 18s linear infinite',
        'shine': 'shine 3.6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shine: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};