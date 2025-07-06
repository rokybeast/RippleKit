module.exports = {
    extends: ["stylelint-config-standard", "stylelint-config-recommended-scss"],
    plugins: ["stylelint-scss"],
    rules: {
        indentation: 2,
        "string-quotes": "single",
        "block-no-empty": true,
        "color-hex-case": "lower",
        "color-hex-length": "short",
        "declaration-colon-space-after": "always",
        "selector-list-comma-newline-after": "always",
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
    },
};
