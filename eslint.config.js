import globals from "globals"
import babelEslintParser from "@babel/eslint-parser"
import esLintReactPlugin from "eslint-plugin-react"
export default [
    {
        plugins: {
            react: esLintReactPlugin,
        },
        files: ["**/*.ts", "**/*.tsx", "**/*.js","**/*.jsx"],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            "no-unused-vars": "error",
            "indent": [2, 4],
            "react/jsx-uses-react": "error",
            "react/jsx-uses-vars": "error",
        },
        languageOptions: {
            parser: babelEslintParser,
            globals: {...globals.node}
        },
        ignores: [
            "public/**",
        ]
    },
];
