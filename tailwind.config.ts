import type { Config } from 'tailwindcss';
import StudioConfig from './studio.config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        ...StudioConfig.colors,
      },
    },
  },
  plugins: [],
};
export default config;
