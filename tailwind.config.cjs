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
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "530px",
      // md: "990px",
      ...defaultTheme.screens,
      lg: "990px",
    },
    fontSize: {},
    colors: {
      "yozora-blue": "#004E88",
      "yozora-thinBlue": "#DAE8F1",
      "yozora-orange": "#FFB200",
      "yozora-richBlack": "#113E5B",
    },
    extend: {
      backgroundImage: {
        "blue-gradient": "linear-gradient(to bottom, #5A9FC1 0%, #f4c67c 99%)",
      },
      backgroundColor: {
        green: "#06C755",
        white: "rgba(255,255,255,1)",
        black: "#000000",
        // green: "#009900",
      },
      translate: {
        "55%": "55%",
      },
      colors: {
        green: "#009900",
        blue: "#004E88",
        fvCodeColor: "#AFAFAF",
        white: "#ffffff",
        black: "#000000",
      },
      zIndex: {
        fv: "calc(infinity)",
      },
      fontFamily: {
        "zenkaku-gothic": ["Zen Kaku Gothic New", "sans-serif"],
        "roboto-mono": ["lato", "monoe"],
      },
      spacing: {
        "gutter-x": "max(2vw,1.5rem)",
        "gutter-y": "max(4.5vw, 2rem)",
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
        reverseMarquee: {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addBase, addComponents, matchUtilities, addVariant }) {
      addVariant("hover", "@media(hover:hover){ &:where(:any-link, :enabled, summary):hover }");
      addBase({
        ":root": {
          "--header-height": "4.5rem",
        },
        body: {},
      }),
        addComponents({
          ".zen-kurenaido": {
            fontFamily: "Zen kurenaido",
          },
          ".marker-orange": {
            background: "linear-gradient(transparent 57%, rgba(255, 178, 0, 0.5)  57%)",
            "font-weight": "bold",
          },
          ".marker-orange-thin": {
            background: "linear-gradient(transparent 57%, rgba(255, 178, 0, 0.35)  57%)",
          },
          ".marker-blue": {
            background: "linear-gradient(transparent 57%, rgba(0, 78, 136, 0.3)   57%)",
            "font-weight": "bold",
          },
          ".marker-white": {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
          ".marker-thinWhite": {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          ".marker-black": {
            backgroundColor: "rgba(0, 0, 0, 0.25)",
          },
          ".bg-graph": {
            backgroundImage:
              "linear-gradient(0deg, transparent calc(100% - 1px), rgba(0, 78, 136, 0.05) calc(100% - 1px)), " +
              "linear-gradient(90deg, transparent calc(100% - 1px), rgba(0, 78, 136, 0.05) calc(100% - 1px))",
            backgroundSize: "16px 16px",
            backgroundRepeat: "repeat",
            backgroundPosition: "center center",
            padding: "20px",
          },
          ".stroke": {
            color: "transparent",
            "-webkit-text-fill-color": "transparent",
            "-webkit-text-stroke": "1px #FFB200",
          },
          ".position-center": { position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
          ".banner-hover": {
            transitionProperty: "opacity",
            transitionDuration: "300ms",
            transitionTimingFunction: "ease-in-out",
          },
          ".group:hover .banner-hover": {
            opacity: ".5",
          },
          ".section-common-style": {
            backgroundColor: "white",
            zIndex: 2,
            position: "relative",
            opacity: "100",
          },
        }),
        matchUtilities({
          "font-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              fontSize: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "py-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              paddingTop: getClamp(Number(minSize), Number(maxSize)),
              paddingBottom: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "px-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              paddingLeft: getClamp(Number(minSize), Number(maxSize)),
              paddingRight: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "mx-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              marginLeft: getClamp(Number(minSize), Number(maxSize)),
              marginRight: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "w-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              width: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "h-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              height: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "mb-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              marginBottom: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "mr-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              marginRight: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "mt-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              marginTop: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "pb-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              paddingBottom: getClamp(Number(minSize), Number(maxSize)),
            };
          },
          "pt-clamp": (value) => {
            const [minSize, maxSize] = value.split(",");
            return {
              paddingTop: getClamp(Number(minSize), Number(maxSize)),
            };
          },
        });
    }),
  ],
};
