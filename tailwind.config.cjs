/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chocolate': '#EAE0D8',
        'mocha': '#131313',
        'sb-green': '#036240',
        'deep-orange': '#752301',
        'espresso': '#E4DED2'
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'offer-image': "url('https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
        'discover-image': "url('https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2237&q=80')",
      }
    },
  },
  plugins: [],
}
