## Tasks

#### Done
- [x] First database connection

#### To Do
- [ ] Deploy on Vercel

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

First on the .env file, you need to add the following:

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



