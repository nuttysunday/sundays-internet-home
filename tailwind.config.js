/** @type {import('tailwindcss').Config} */
import { keepTheme } from "keep-react/keepTheme";
const flowbite = require("flowbite-react/tailwind");

const config  = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using src directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    flowbite.content(),
  ],
  theme: {
    extend: {
    },
  },
  plugins: [flowbite.content()],
}

export default keepTheme(config);