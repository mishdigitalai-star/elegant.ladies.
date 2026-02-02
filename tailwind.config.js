/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#493A30',
        'brand-orange': '#E97413',
        'brand-green': '#66753A',
        'brand-gold': '#DEAF76',
        'brand-ivory': '#FBF7F3',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
