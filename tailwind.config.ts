import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Configure the number of columns for different screen sizes
      gridTemplateColumns: {
        "2": "repeat(2, minmax(0, 1fr))", // Two columns for medium and upper screens
        "1": "1fr", // One column for small screens
      },
      // Configure responsive spacing
      spacing: {
        light: "120px", // Light padding
        medium: "240px", // Medium padding
        large: "320px", // Large padding
        "md-light": "160px", // Light padding for medium screens
        "lg-light": "160px", // Light padding for large screens
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      colors: {
        primaryColor: "#677b9d",
        secondPrimaryColor: "#ccd2da",
        thirdPrimaryColor: "#bcc2ca",
        highLightColor: "#d3d9e2",
        titleColor: "#dbe2ef",
        seconTitleColor: "#61738e",
        languageColor: "#58dbd4",
        hoverColor: "#172543",
        tabActive: "#717b93",
        socialColor: "#91a0b8",
      },
    },
  },
  plugins: [],
};
export default config;
