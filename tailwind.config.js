module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'akita': "url('../src/images/akita.jpg')",
        'chiba': "url('../src/images/chiba.jpg')",
        'fukushima': "url('../src/images/fukushima.jpg')",
        'hiroshima': "url('../src/images/hiroshima.jpg')",
        'hyogo': "url('../src/images/hyogo.jpg')",
        'kyoto': "url('../src/images/kyoto.jpg')",
        'nagano': "url('../src/images/nagano.jpg')",
        'nagasaki': "url('../src/images/nagasaki.jpg')",
        'niigata': "url('../src/images/niigata.jpg')",
        'okayama': "url('../src/images/okayama.jpg')",
        'osaka': "url('../src/images/osaka.jpg')",
        'tokyo': "url('../src/images/tokyo.jpg')",
      }
    },
    fontFamily: {
      Montserrat:['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}