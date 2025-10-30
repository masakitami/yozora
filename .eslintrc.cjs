module.exports = {
  plugins: ["tailwindcss"],
  settings: {
    tailwindcss: {
      config: "tailwind.config.cjs",
      groupByResponsive: true,
    },
  },
  root: true,
  extends: ["eslint:recommended", "plugin:tailwindcss/recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2023,
  },
  rules: {
    "tailwindcss/no-custom-classname": [
      1,
      {
        whitelist: ["js-.+", "modal__.+", "dark", "dark:", "splide", "splide__.+", "&>", "section-."],
      },
    ],
  },
  overrides: [
    {
      files: ["*.html", "*.blade.php"],
      parser: "@angular-eslint/template-parser",
    },
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ["main.js"],
};

// module.exports = {
//   extends: ["plugin:tailwindcss/recommended"],
//   overrides: [
//     {
//       env: {
//         node: true,
//       },
//       files: [".eslintrc.{js,cjs}"],
//       parserOptions: {
//         sourceType: "script",
//       },
//     },
//     {
//       files: ["*.html", "*.blade.php"],
//       parser: "@angular-eslint/template-parser",
//     },
//   ],
// };
