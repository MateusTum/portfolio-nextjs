import {
    createLocalizedPathnamesNavigation,
    Pathnames
  } from 'next-intl/navigation';
   
  export const locales = ['en', 'pt'] as const;
  export const localePrefix = 'always';
   
  export const pathnames = {
    '/': '/',

    '/projects': {
      en: '/projects',
      pt: '/projetos'
    },

    '/projects/[projectName]': {
      en: '/projects/[projectName]',
      pt: '/projetos/[projectName]'
    },
  } satisfies Pathnames<typeof locales>;
   
  export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});