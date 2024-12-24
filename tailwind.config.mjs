/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px" /* Tablet */,
        lg: "1024px" /* Laptop */,
        xl: "1232px" /* Large Screens */,
        "2xl": "1390px" /*Very Large Screens */,
      },
    },
  },
  plugins: [],
};
