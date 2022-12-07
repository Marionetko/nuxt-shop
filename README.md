# Multipage website built on NuxtJS

This repo was created to build App using [NuxtJS](https://nuxtjs.org/). Here will be described the instructions for working with NuxtJS and the technology stack that will be used for this project. All project code will comply with international web-standards and official framework documentation.

## Recommendations before starting the project

Be sure that you have these applications:
1. Latest LTS version of [Node.js](https://nodejs.org/en/)
2. Extension for VScode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Extension for VScode [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
4. Extension for VScode [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

# Start New project

Open a terminal and use the following command to create a new project:

```bash
# npx
npx nuxi init <project-name>
```

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.