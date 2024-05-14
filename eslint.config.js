import reactEsLintRecommend from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
    {
        ...reactEsLintRecommend,
    },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        plugins: {
            "@stylistic/js": stylisticJs,
        },
        rules: {
            "no-undef": "warn",
            "@stylistic/js/quotes": [
                2,
                "double",
                { avoidEscape: true, allowTemplateLiterals: true },
            ],
            "no-unused-vars": "error",
            indent: [2, 4],
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                console: "readonly",
                document: "writable",
                React: "readonly",
                ...globals.browser,
            },
        },
        settings: {
            react: {
                createClass: "createReactClass", // Regex for Component Factory to use,
                // default to "createReactClass"
                pragma: "React", // Pragma to use, default to "React"
                fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
                version: "detect", // React version. "detect" automatically picks the version you have installed.
                flowVersion: "0.53",
            },
        },
    },
    { 
        ignores: ["public/**"],
    },
    {
        rules: {
            "react/jsx-no-undef": ["error", { "allowGlobals": true }]
        }
    }
];
