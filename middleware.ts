import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { MyProjects } from '@/app/lib/data';

const validRoutes: string[] = Object.keys(MyProjects);

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    if (url.pathname.startsWith('/projects/')) {
      const projectName = url.pathname.split('/')[2];
      if (!validRoutes.includes(projectName)) {
        return NextResponse.redirect(new URL('/not-found', request.url))
      }
    }
}
 
export const config = {
  matcher: '/projects/:path*',
}