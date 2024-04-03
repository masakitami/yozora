module.exports = {
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  ignoreFiles: ["**/node_modules/**"],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind", "layer", "apply"],
      },
    ],
    "selector-id-pattern": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "scss/at-mixin-pattern": null,
    "scss/dollar-variable-pattern": null,
    "scss/percent-placeholder-pattern": null,
  },
};
