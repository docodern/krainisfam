module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // container: {
    //   center: true,
    // },
    extend: {
      backgroundImage: theme => ({
        'flag-lv': "url('/images/lv.webp')",
        'flag-ru': "url('/images/ru.webp')",
       }),
       height: {
         ch: '276px',
       },
       width: {
        cw: '340px',
        mw: '280px',
       },
      colors: {
        bgc: {
          DEFAULT: '#FBFBFB',
          dark: '#E5E5E5',
        },
        txc: {
          DEFAULT: '#222831',
          light: '#EEEEEE',
          red: '#EE2E3C',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['group-focus'],
      backgroundColor: ['group-focus'],
    },
  },
  corePlugins: {
   container: false,
  },
  plugins: [],
}
