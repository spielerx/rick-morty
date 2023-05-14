module.exports = {
    env: { browser: true, es2020: true, node: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    plugins: ["react-refresh", "no-relative-import-paths"],
    rules: {
        "react-refresh/only-export-components": "warn",
        "no-relative-import-paths/no-relative-import-paths": [
            "warn",
            { allowSameFolder: true },
        ],
    },
};
