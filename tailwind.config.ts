import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./@/**/*.{ts,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors : {
        violet : {
          100: "#764CC2",
        },
        black : {
          100: "#000000",
          30: "#292828",
          20 : "#696969",
          10: "#EDEDED",
          5:"#A0A0A0",
        },
        white : {
          100: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
};
export default config;
