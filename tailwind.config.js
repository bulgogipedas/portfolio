  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          segoe_ui: "Segoe UI"
        },
        colors: {
          primary: "#000000"
        }
      },
    },
    plugins: [],
  }