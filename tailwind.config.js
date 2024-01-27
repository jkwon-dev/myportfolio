/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b", 
        secondary: "#f3f3f3",
      },
      container: {
        center: true, 
        padding: {
          EFAULT: "1rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [],
}

