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
      colors: {
        'purple-heart': {
          '50': '#f9f5ff',
          '100': '#f1e9fe',
          '200': '#e6d7fd',
          '300': '#d2b7fb',
          '400': '#b789f7',
          '500': '#9b5cf0',
          '600': '#853ae3',
          '700': '#7029c7',
          '800': '#5f26a3',
          '900': '#4f2083',
          '950': '#340b60',
        },
        'palm-leaf': {
          '50': '#effee7',
          '100': '#dbfccb',
          '200': '#baf99d',
          '300': '#8ef165',
          '400': '#67e536',
          '500': '#46cb17',
          '600': '#32a20e',
          '700': '#287c0f',
          '800': '#246212',
          '900': '#205314',
          '950': '#0e3506',
      },
      'web-orange': {
        '50': '#fffbea',
        '100': '#fff5c5',
        '200': '#ffea86',
        '300': '#ffd946',
        '400': '#ffc51c',
        '500': '#fea303',
        '600': '#e17a00',
        '700': '#bb5402',
        '800': '#974009',
        '900': '#7c350b',
        '950': '#481a00',
    },
          
      },
    },
  },
  plugins: [],
};
export default config;
