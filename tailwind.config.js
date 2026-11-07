/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0B1220', // Page background
          900: '#111827', // Card/Surface background
          800: '#1F2937', // Sub-cards / borders
          700: '#374151',
          600: '#4B5563',
        },
        cyan: {
          DEFAULT: '#00D9FF', // Primary brand accent
          glow: 'rgba(0, 217, 255, 0.35)',
          dark: '#00B4D8',
          light: '#67E8F9',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'cyan-sm': '0 0 15px -3px rgba(0, 217, 255, 0.3)',
        'cyan-md': '0 0 25px -5px rgba(0, 217, 255, 0.4)',
        'cyan-lg': '0 0 35px -5px rgba(0, 217, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
