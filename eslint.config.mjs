// eslint.config.mjs ou eslint.config.js
import globals from "globals";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parser: parser,
        },
        plugins: {
            "@typescript-eslint": ts,
            react: react,
            prettier: prettier,
        },
        rules: {
            // Adicione as regras recomendadas diretamente
            ...js.configs.recommended.rules,
            ...ts.configs.recommended.rules,
            ...react.configs.recommended.rules,
            quotes: ["error", "double"], // Força o uso de aspas duplas
            semi: ["error", "always"], // Exige ponto e vírgula no final das linhas
            indent: ["error", 4], // Força indentação de 2 espaços
            "react/jsx-uses-react": "off", // Desativa a necessidade de importar React para usar JSX (para React 17+)
            "react/react-in-jsx-scope": "off", // Desativa a necessidade de React no escopo (para React 17+)
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_" },
            ], // Ignora variáveis começando com "_"
            "prettier/prettier": ["error", { singleQuote: false }], // Adiciona Prettier como regra do ESLint com aspas duplas
        },
        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
