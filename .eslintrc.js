module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "script",
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "single"],
        indent: ["error", 2],
        "no-unused-vars": ["warn"],
        "no-console": "off",
    },
};
