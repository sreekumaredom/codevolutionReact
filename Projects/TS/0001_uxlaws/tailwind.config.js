module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['IBM Plex Sans'],
        body1: ['IBM Plex Mono'],
      },
    },
    minWidth: {
      275: '275px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
