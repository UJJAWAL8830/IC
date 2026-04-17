/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FFFDF5',
        'neo-accent': '#FF6B6B', // Hot Red
        'neo-secondary': '#FFD93D', // Vivid Yellow
        'neo-muted': '#C4B5FD', // Soft Violet
      },
      boxShadow: {
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-md': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
        'neo-xl': '16px 16px 0px 0px rgba(0,0,0,1)',
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      borderWidth: {
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
}
