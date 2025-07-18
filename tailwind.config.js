/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    darkMode: "class",

  theme: {
    extend: {

       keyframes: {
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(.9)' }
        },
      },
      animation: {
        ripple: 'ripple 2s ease infinite',
      },
    },
  },
  plugins: [],
}

