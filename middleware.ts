import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({
  defaultLocale: 'pt',
  localePrefix,
  locales,
  pathnames
});
 
export const config = {
  matcher: ['/', '/(pt|en)/:path*', '/projects/:path*', '/projetos/:path*', '/not-found', '/nao-encontrado']
};