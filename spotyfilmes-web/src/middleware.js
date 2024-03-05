import { NextResponse } from 'next/server'
 
export function middleware(request) {
    if (!request.cookies.has('spotyfilmes_jwt'))
        return NextResponse.redirect(new URL('/', request.url))
}
 
export const config = {
  matcher: [
    '/categorias/:path*',
    '/filmes/:path*'
  ]
}