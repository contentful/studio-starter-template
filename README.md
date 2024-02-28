This is a starter template for the [Contentful Studio](https://github.com/contentful/experience-builder/wiki).

## Getting Started

The first thing you'll need is your [Contentful CMA Token](https://app.contentful.com/account/profile/cma_tokens), and access to the [Studio Hackathon Organization](https://app.contentful.com/account/organizations/1jtZ8D4corGeQgsNmtaFM4).

### Run the Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm run setup`
4. Run `npm run dev`

Setup will ask you a few questions, and create a space for you as well as update your `.env.local` file. It may take a few minutes to import the assets.

## Development

### Studio Components

Since the Studio root needs to be used as a client component there is a separate component that is used to wrap the studio root. This is located in `src/app/_studio/studio.tsx`. This is the entry point for the studio.

Components used in studio live in `src/app/_studio`. General components used for layouts and the like are in `src/app/_components`.

Each studio components is contained in a directory. The component itself lives in the file `[ComponentName]Component.tsx`. The component's studio definition lives in the same folder under the `index.ts` file.

### Registering Studio Components

The registration for studio components lives in `src/lib/register-components.ts`.

### Tailwind

This project uses [Tailwind CSS](https://tailwindcss.com/). You can find the configuration in `tailwind.config.js`. However the colors are located in `studio.config.js`. This is so we can use the colors in the studio design tokens as well. 

## Translations
This project uses [next-intl](https://next-intl-docs.vercel.app/docs/getting-started) to do translations. You can find the manual translation files in the `translations` directory. The experience builder will pick up which language you are using and send it to Contentful.