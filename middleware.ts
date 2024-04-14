import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'pt'],
  defaultLocale: 'pt'

});
 
export const config = {
  matcher: ['/', '/projects', '/projects/:path*', '/(pt|en)/:path*', '/not-found']
};