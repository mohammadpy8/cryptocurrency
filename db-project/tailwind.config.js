/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens : {
        "desktop": "1100px",
        "extra-desktop": "1200px",
      },
      colors: {
        primary: {
          500: "#0023d0",
          400: "#072bdd",
          300: "#0e33ea",
          200: "#193df3",
          100: "#3051f8",
          50: "#6b82f7",
        },
      },
      container: {
        center: true,
        padding: "6rem",

      },
      borderRadius: {
        normal: "",
        fix: "",
      },
      boxShadow: {},
    },
    fontFamily: {
      "Yek-Light": "Yek-Light",
      "Yek-Regular": "Yek-Regular",
      "Yek-Bold": "Yek-Bold",
      "Yek-SemiBold": "Yek-SemiBold",
      "Yek-ExtraBlack": "Yek-ExtraBlack",
      "Yek-ExtraBold": "Yek-ExtraBold",
    },
  },
  plugins: [],
};
