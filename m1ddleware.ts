import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow _next, static, favicon, and public folder files
  const isPublicFile = pathname.startsWith('/_next') ||
                       pathname.startsWith('/static') ||
                       pathname === '/favicon.ico' ||
                       pathname.startsWith('/images') ||  // Add this line for public images
                       pathname.endsWith('.png');  // Add specific image check
                       pathname.endsWith('/.jpg');  // Add specific image check

  if (isPublicFile) {
    return NextResponse.next();
  }

  if (pathname !== '/en' && pathname !== '/es') {
    return NextResponse.redirect(new URL('/en', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
