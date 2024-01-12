import { NextRequest, NextResponse } from 'next/server';

import { MemoData } from '@@/app/_types';

// import { authorization } from 'app/api/authorization';
// import { MemoData } from 'app/types';

/* export async function GET(request: NextRequest): Promise<NextResponse> {
  const reqAuthZ = request.headers.get('authorization') ?? '';

  return NextResponse.json(reqAuthZ);
} */

export async function GET(): Promise<NextResponse> {
  try {
    const memosResponse = await fetch(`${process.env.DB_HOST}/memos`);

    if (!memosResponse.ok) {
      return NextResponse.json(`Failed to fetch memos. Status: ${memosResponse.status}`);
    }

    // const memos = (await memosResponse.json()) as MemoData[];

    return NextResponse.json('ok', {
      status: 200,
      statusText: 'OK',
    });
  } catch (error) {
    return NextResponse.json('Internal Server Error', { status: 500 });
  }
}
