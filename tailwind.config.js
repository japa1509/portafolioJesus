/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js,}"],
  theme: {
    extend: {
      
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
    },
    dropShadow: {
      'shadow': '0 0 1em #f0db4f',
    }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

