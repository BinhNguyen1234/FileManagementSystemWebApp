
import tseslint from "typescript-eslint"
import globals from "globals"

export default tseslint.config({
    files: ["**/*.ts", "**/*.tsx", "**/*.js","**/*.jsx"],
    extends: [
        ...tseslint.configs.recommended,
    ],
    plugins: {
    },
    rules: {
        "no-undef": "warn",
        "quotes": [2, "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
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