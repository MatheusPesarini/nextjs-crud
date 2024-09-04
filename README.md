## Tasks

#### Done
- [x] First database connection
- [x] Organização dos diretórios
- [x] Configure ESlint

#### To Do
- [ ] Deploy on Vercel
- [ ] Create a login and register user page

## Requirements

- Node.js 20.13.1 (exact version used)
- PostgreSQL 16.4-1 (exact version used)
- PGAdmin

## Getting Started

After the steps below, run the development server:

```bash
npm run dev
```

For building the project, run the following command:

```bash
npm run build
npm run start
```

## Documentations

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs/) - learn about Prisma features and API.
- [React Hook Form Documentation](https://react-hook-form.com/get-started) - learn about React Hook Form features and API.

## Creation of scheme and .env using Prisma

First you need to initiate Prisma with the following command:

```bash
npx prisma init
```

On the .env file, you need to add the following:

```
DATABASE_URL="postgresql://user:password@localhost:5432/database_name"
```

Create the prisma directory and the schema.prisma file with the following content:

```
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

model User {
    id        String   @id @default(cuid())
    email     String   @unique
    password  String
}
```

Then, you need to run the following command in terminal to create the schema:

```bash
npx prisma db push
```

## Creation and configuration of ESLint and Prettier

First the dependencies that are needed to be installed as devDependencies:

```
"@eslint/js": "^9.9.1",
"@typescript-eslint/eslint-plugin": "^8.4.0",
"@typescript-eslint/parser": "^8.4.0",
"eslint": "^9.9.1",
"eslint-config-prettier": "^9.1.0",
"eslint-plugin-prettier": "^5.2.1",
"eslint-plugin-react": "^7.35.1",
"prettier": "^3.3.3",
```

After this, is needed to create the eslint.config.mjs file with the following content:

```javascript
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
```

And for last, the creation of .prettierrc file with the following content:

```json
{
    "singleQuote": false,
    "semi": true,
    "tabWidth": 4,
    "trailingComma": "es5",
    "endOfLine": "auto"
}
```