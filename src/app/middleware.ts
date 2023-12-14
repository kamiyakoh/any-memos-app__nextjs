import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest): NextResponse => {
  const cookie = request.cookies.get('token');
  const response = NextResponse.next();
  response.cookies.set({ name: 'token', value: cookie?.value ?? '', path: '/' });

  return response;
};
