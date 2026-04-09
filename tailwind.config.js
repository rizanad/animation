/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nohemi: ['Nohemi', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        // Smooth floating animation for the guy
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }, // smooth up
        },
        // Tiny jerk, opposite movement for the red box
        boxFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0.9px)' },  // small downward jerk
        }
      },
      animation: {
        // Smooth floating animation for the guy
        'floating': 'float 3s ease-in-out infinite',
        // Jerky, step-based movement for the box
        'box-floating': 'boxFloat 1s steps(1) infinite',
      }
    },
  },
  plugins: [],
}