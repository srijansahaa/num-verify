module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        dark: '0 4px 6px rgba(0, 0, 0, 0.38)',
      }
    },
    fontFamily: {
      'display': ['Nunito'],
    },
    // extend: {},
    container: {
      center: true,
      padding: '2rem'
    },
    // screens: {
    //   'b-lg': '992px',
    //   'b-xl': '1200px',
    // },
    // linearBorderGradients: {
    //   directions: { // defaults to these values
    //     't': 'to top',
    //     'tr': 'to top right',
    //     'r': 'to right',
    //     'br': 'to bottom right',
    //     'b': 'to bottom',
    //     'bl': 'to bottom left',
    //     'l': 'to left',
    //     'tl': 'to top left',
    //   },
    //   colors: { // defaults to {}
    //     'red': '#f00',
    //     'red-blue': ['#f00', '#00f'],
    //     'blue-green': ['#0000ff', '#00FF00'],
    //     'red-green-blue': ['#f00', '#0f0', '#00f'],
    //     'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    //     'yellow-red-pink': ['#FBBF24', '#EF4444', '#EC4899'],
    //   },
    //   background: {
    //     'gray-50': '#F9FAFB',
    //     'gray-900':'#111827',
    //   },
    //   border: { // defaults to these values (optional)
    //     '1': '1px',
    //     '2': '2px',
    //     '4': '4px',
    //   },
    // },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      boxShadow: ['dark, hover', 'focus']
    },
    // linearBorderGradients: ['responsive', 'hover', 'dark'],
  },
  plugins: [
    // require('tailwindcss-border-gradient-radius'),
  ],
}
