# Nuxt Random Question Generator

This is a simple application built with [Nuxt](https://nuxt.com/docs/getting-started/introduction) that generates random questions from a text file.

## Features
- Randomly selects and displays questions from a predefined text file.
- Questions can be easily modified by editing `public/questions.txt`.
- Uses line breaks (`Enter`) as a separator between questions.
- Lightweight and easy to set up.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview the production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Customizing Questions
To modify the questions, simply edit the `public/questions.txt` file. Each question should be on a new line.

Example format of `questions.txt`:
```
1.1 What is structured programming? Provide an example using C.
1.2 Explain expressions and statements in programming. How do they differ?
1.3 What is a function in programming? Describe its components and parameter passing methods.
```

## Deployment

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information on deploying your application.

---

Enjoy building with Nuxt! 🚀
