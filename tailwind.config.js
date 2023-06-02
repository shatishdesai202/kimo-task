/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white_A700_7f: "#ffffff7f",
        teal_600: "#007f7f",
        gray_900: "#001919",
        teal_600_28: "#007f7f28",
        teal_50: "#e6f2f2",
        white_A700: "#ffffff",
      },
      fontFamily: { ibmplexmono: "IBM Plex Mono", greycliffcf: "Greycliff CF" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#ffffff7f,#ffffff)",
      },
      boxShadow: { bs: "0px 0px  16px 0px #007f7f28" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
