import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { LOCALES } from './lib/constants';

export default getRequestConfig(async ({ locale }) => {
  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const messages = await import(`../translations/${locale}.json`);

  return {
    messages,
  };
});
