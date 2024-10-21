# Posts Application

This is a simple Next.js application that allows users to view and create posts using the JSONPlaceholder API.

## Features

- Display a list of posts fetched from JSONPlaceholder API
- Add new posts using a form
- Responsive design using Tailwind CSS
- State management with Redux Toolkit
- API integration using Redux Toolkit Query
- UI components from shadcn/ui library
- Form handling with react-hook-form
- husky for commit lint

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Redux Toolkit
- Redux Toolkit Query
- Tailwind CSS
- shadcn/ui
- react-hook-form
- zod
- husky

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Installation step:

```bash
## install the packages / dependencies
npm install

## setup environment
cp .env.local.sample .env.local
# replace the base url value #

## running the project:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
