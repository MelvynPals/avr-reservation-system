import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: 'transparent',
      'accentPrimary': '#4FAEF0',
      'accentPrimaryHover': '#479DD8',
      'accentPrimaryFocus': '#2984C3',
      'accentSecondary': '#1C4B82',
      'accentSecondaryHover': '#173F6D',
      'accentSecondaryFocus': '#133358',
      'mainBG': '#F8F9FA',
      'secondaryBG': '#F5F5F5',
      'tertiaryBG': '#F0F0F0',
      'whiteTC': '#FFFFFF',
      'mainText': '#101828',
      'grayTC': '#696969',
      'secondaryText': '#212529',
      'grayGlass': '#2B2B2B',
      'footerColor': '#1E1E1E',
    },
    boxShadow: {
      'softShadow': '0px 2px 16px 0px rgba(0, 0, 0, 0.15)',
    }
  },
  plugins: [],
};
export default config;
