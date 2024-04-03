/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

// Clampを計算する関数
const getClamp = (minSize, maxSize, minViewPort = 400, maxViewPort = 1600) => {
  const valiablePart = (maxSize - minSize) / (maxViewPort - minViewPort);
  const constant = maxSize - maxViewPort * valiablePart;
  return `clamp(${minSize / 16}rem,${constant / 16}rem + ${100 * valiablePart}vw,${maxSize / 16}rem)`;
};
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, matchUtilities }) {
      addBase({
        body: {
          "@apply bg-gray-100": {},
        },
      }),
        matchUtilities({
          "font-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              fontSize: getClamp(Number(minSize), Number(maxSize)),
            };
          },
        });
    }),
  ],
};
