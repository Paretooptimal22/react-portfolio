module.exports = {
  content: [
    './index.html',  // include this if using Vite
    './src/**/*.{js,jsx,ts,tsx}', // for React components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
