/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
      colors: {
        blue: { default: "#185ADB" },
        grey: {
          50: "#F8FAFC",
          100: "#F0F5F9",
          300: "#CAD5E0",
          400: "#91A4B7",
          600: "#445668",
          800: "#1C2A3A",
          900: "#0D1829",
        },
      },
    },
  },
  plugins: [],
};
