import globals from "globals"
import babelEslintParser from "@babel/eslint-parser"
import esLintReactPlugin from "eslint-plugin-react"
import typeScriptEslintParser from "@typescript-eslint/parser"
export default [
    {
        plugins: {
            esLintReactPlugin: esLintReactPlugin,
            typeScriptEslintParser: typeScriptEslintParser
        },
        files: ["**/*.ts", "**/*.tsx", "**/*.js","**/*.jsx"],
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            "no-unused-vars": "error",
            "indent": [2, 4],
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
