/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background":
          "url('https://wallpapercave.com/wp/wp5055251.jpg')",
        "custom-background1":
          "url('https://th.bing.com/th/id/R.e413c7097a84cdd611bcba572c112be4?rik=804guqGDpctbWQ&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f210000%2fvelka%2fwhite-wall-texture-background.jpg&ehk=8qgALWcSHb1z9SLyhfsvo%2f6yVF5aip1vpkv5i6zmQjg%3d&risl=&pid=ImgRaw&r=0')",
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"], // Name and fallback font
      },
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};
