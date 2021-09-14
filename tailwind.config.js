module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
				primary: {
					default: "#6930C3",
					hover: "#5317B5",
					light: "#6930C390",
				},
    },
    fontFamily: {
      display: ["Poppins"],
    },
    lineHeight: {
      base: "66px",
    },
    height:{
      line : '1px'
    },

    borderRadius: {
      base: "200px",
    },
  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
