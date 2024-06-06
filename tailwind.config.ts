// tailwind.config.js
module.exports = {
  darkMode: 'class', // Adicione esta linha para habilitar o modo escuro baseado em classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'rgb(var(--foreground-rgb))',
        background: {
          start: 'rgb(var(--background-start-rgb))',
          end: 'rgb(var(--background-end-rgb))',
        },
      },
    },
  },
  plugins: [],
};
