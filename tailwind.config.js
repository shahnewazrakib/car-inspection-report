/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: "#FEC108",
        text: "#71717A",
        white: "#ffffff",
        black: "#000000",
        muted: "#f9fafb",
      },

      borderColor: {
        DEFAULT: "#E3E3E3",
      },

      boxShadow: {
        custom: "0 10px 30px #eeeeee",
      },
    },
  },
  plugins: [],
};
