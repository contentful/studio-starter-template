This is a starter template for [Contentful Studio](https://www.contentful.com/products/studio/).

## Getting Started

### Prerequisites
* Generate a [Contentful CMA Token](https://app.contentful.com/account/profile/cma_tokens)
* Grab your [Contentful Organisation ID](https://www.contentful.com/help/organizations/find-organization-id/)

### Run the Setup
1. Clone the repository
2. Run `npm install`
3. Run `npm run setup`
4. Run `npm run dev`

Setup will ask you a few questions, and create a space for you as well as update your `.env.local` file. It may take a few minutes to import the assets.

> [!NOTE]
> You may see some rate limit warnings during setup. You can safely ignore these and wait for the setup script to retry and finish.

## Development

### Studio Components

Since the Studio root needs to be used as a client component there is a separate component that is used to wrap the Studio root. This is located in `src/app/_studio/studio.tsx`. This is the entry point for Studio.

Components used in Studio live in `src/app/_studio`. General components used for layouts and the like are in `src/app/_components`.

Each Studio component is contained in a directory. The component itself lives in the file `[ComponentName]Component.tsx`. The component's Studio definition lives in the same folder under the `index.ts` file.

### Registering Studio Components

The registration for studio components lives in `src/lib/register-components.ts`.

### Tailwind

This project uses [Tailwind CSS](https://tailwindcss.com/). You can find the configuration in `tailwind.config.js`. However the colors are located in `studio.config.js`. This is so we can use the colors in the Studio design tokens as well. 

## Translations
This project uses [next-intl](https://next-intl-docs.vercel.app/docs/getting-started) to do translations. You can find the manual translation files in the `translations` directory. Studio will pick up which language you are using and send it to Contentful.