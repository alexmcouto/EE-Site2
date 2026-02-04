import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f5f7f8",
          100: "#e9eef0",
          200: "#c9d6db",
          300: "#9fb2ba",
          400: "#6c8793",
          500: "#4e6a76",
          600: "#3e5560",
          700: "#33464f",
          800: "#2a3941",
          900: "#223038"
        },
        sand: {
          50: "#fbf9f5",
          100: "#f5f1e8",
          200: "#eadfcf",
          300: "#dcc8ae",
          400: "#c7a680",
          500: "#b88f63",
          600: "#9d7249",
          700: "#7f5a39",
          800: "#654930",
          900: "#523c28"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(34, 48, 56, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
