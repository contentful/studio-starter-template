import createMiddleware from 'next-intl/middleware';
import { LOCALES } from './lib/constants';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: 'en-US',
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
