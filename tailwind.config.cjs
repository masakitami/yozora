/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

// Clampを計算する関数
const getClamp = (minSize, maxSize, minViewPort = 400, maxViewPort = 1600) => {
  const valiablePart = (maxSize - minSize) / (maxViewPort - minViewPort);
  const constant = maxSize - maxViewPort * valiablePart;
  return `clamp(${minSize / 16}rem,${constant / 16}rem + ${100 * valiablePart}vw,${maxSize / 16}rem)`;
};

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "530px",
      ...defaultTheme.screens,
    },
    fontSize: {
      xs: ["0.8", "1.56"],
      sm: ["0.88rem", "1.68"],
      base: ["1rem", "1.5"],
      lg: ["1.14rem", "1.53"],
      xl: ["1.33rem", "1.5"],
      "2xl": ["1.6rem", "1.40"],
      "3xl": ["2rem", "1,25"],
      "4xl": ["2.66rem", "1.06"],
      "5xl": ["4rem", "1.37"],
      "eng-base": ["1rem", "1.5"],
      "eng-lg": ["1.13rem", "1.53"],
      "eng-xl": ["1.33rem", "1.50"],
      "eng-2xl": ["1.6rem", "1.52"],
      "eng-3xl": ["2rem", "1.25"],
      "eng-4xl": ["2.68rem", "1.2"],
      "eng-5xl": ["4rem", "1.37"],
      "eng-6xl": ["5rem", "1.3"],
      "eng-7xl": ["6rem", "1.25"],
    },
    extend: {
      backgroundColor: {
        thinGreen: "rgba(142,164,150,0.1)",
        thinWhite: "rgba(255,255,255,0.15)",
      },
      translate: {
        "55%": "55%",
      },
      colors: {
        blackGreen: "#009900",
        richGreen: "#40DD6C",
        lightGreen: "#A4E27D",
        blueGreen: "#00E5AE",
        fvCodeColor: "#AFAFAF",
      },
      zIndex: {
        fv: "calc(infinity)",
      },
      fontFamily: {
        "zenkaku-gothic": ["Zen Kaku Gothic New", "sans-serif"],
        "zenold-mincho": "Zen Old Mincho, serif",
        "roboto-mono": ["Roboto Mono", "monospace"],
        "yuji-syuku": "Yuji Syuku, serif",
      },
      spacing: {
        "gutter-x": "max(5.75vw,2rem)",
        "gutter-y": "max(5.5vw, 3.5rem)",
      },
      keyframes: {
        height: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-25%)" },
        },
        // marquee: {
        //   from: { transform: "translateX(0)" },
        //   to: { transform: "translateX(-50%)" },
        // },
        marquee2: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        // reverseMarquee: {
        //   from: { transform: "translateX(-50%)" },
        //   to: { transform: "translateX(0%)" },
        // },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, addComponents, matchUtilities, addVariant }) {
      addVariant("hover", "@media(hover:hover){ &:where(:any-link, :enabled, summary):hover }");
      addBase({
        body: {},
      }),
        addComponents({}),
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
