module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/Subcomponent/**/*.{js,jsx,ts,tsx}",
    "./src/components/protfoil/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(40%, 1fr))',
      },
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
