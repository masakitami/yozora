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
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-negative-arbitrary-values": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/migration-from-tailwind-2": "warn",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
    "tailwindcss/no-unnecessary-arbitrary-value": "warn",
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
