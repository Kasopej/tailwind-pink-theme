/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "lg-t":
          "var(--tw-ring-offset-shadow, 10px 0 #0000), var(--tw-ring-shadow, 10px 0 #0000), var(--tw-shadow);",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
