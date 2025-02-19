module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontfamily: {
            sans: ['roboto', 'sans-serif'],
        },
        gridTemplateColumns: {
            '70/30': '70% 28%',
        },
    },
  },
  plugins: [],
};
