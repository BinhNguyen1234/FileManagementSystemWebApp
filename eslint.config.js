import globals from "globals"

export default [
    {
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn",
            "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            "no-unused-vars": "error",
            "indent": [2, 4],
        },
        languageOptions: {
            globals: {
                ...globals.globals
            }
        },
        ignores: [
            "**/dist/*",
            "**/public/*",
            "**/webpack.config.*"
        ]
    },
];
