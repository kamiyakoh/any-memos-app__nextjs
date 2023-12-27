import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = (await req.json()) as { email: string; password: string };
  const { email, password } = body;

  if (email === undefined || password === undefined) {
    return NextResponse.json('Invalid request body', { status: 400 });
  }

  if (email !== process.env.EMAIL || password !== process.env.PASSWORD) {
    return NextResponse.json('unauthorized', { status: 401 });
  } else {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const token = sign({ email }, secretKey, { expiresIn: '24h' });
    cookies().set('token', token, { maxAge: 24 * 60 * 60, path: '/' });
    return NextResponse.json('Login Success', { status: 200 });
  }
}
