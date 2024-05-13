
import tseslint from "typescript-eslint"
import globals from "globals"
import stylisticJs from '@stylistic/eslint-plugin-js'

export default tseslint.config({
    files: ["**/*.ts", "**/*.tsx", "**/*.js","**/*.jsx"],
    plugins: {
        '@stylistic/js': stylisticJs
    },
    rules: {
        "no-undef": "warn",
        "@stylistic/js/quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "no-unused-vars": "error",
        "indent": [2, 4],
    },
    ignores: [
        "public/**",
    ],
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
            ...globals.browser

        }
    }
})