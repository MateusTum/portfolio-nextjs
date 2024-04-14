import createMiddleware from 'next-intl/middleware';
import {locales, localePrefix, pathnames} from './navigation';

export default createMiddleware({
  defaultLocale: 'pt',
  localePrefix,
  locales,
  pathnames
});
 
export const config = {
  matcher: ['/', '/projects', '/projects/:path*', '/(pt|en)/:path*', '/not-found', '/projetos', '/projetos/:path*', '/nao-encontrado']
};