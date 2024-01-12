import { NextRequest, NextResponse } from 'next/server';

import { MemoData } from 'app/_types';
import { authorization } from 'app/api/authorization';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const authZ = await authorization(req);

  if (authZ.status === 500) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 401) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 200) {
    try {
      const memosResponse = await fetch(`${process.env.DB_HOST}/memos`);

      if (!memosResponse.ok) {
        throw new Error(`Failed to fetch memos. Status: ${memosResponse.status}`);
      }

      const memos = (await memosResponse.json()) as MemoData[];

      return NextResponse.json(memos, {
        status: 200,
        statusText: 'OK',
      });
    } catch (error) {
      return NextResponse.json('Internal Server Error', { status: 500 });
    }
  }
  return NextResponse.json('Internal Server Error', { status: 500 });
}
