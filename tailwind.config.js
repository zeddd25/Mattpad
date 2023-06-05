/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'footer-texture': "url('https://b4qlw8tl.media.zestyio.com/Wattys-Desktop.png')",
        "hero-around": "url('../public/images/people.png')",
      },
    },
  },
  plugins: [],
};
