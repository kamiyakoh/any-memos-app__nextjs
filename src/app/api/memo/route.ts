import { NextRequest, NextResponse } from 'next/server';

import { MemoData } from 'app/_types';
import { dbAxiosInstance } from 'app/_utils/axiosInstance';
import { authorization } from 'app/api/authorization';
import { isValidDate, errorMessage } from 'app/api/valid';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const authZ = await authorization(req);
  if (authZ.status === 500) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 401) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 200) {
    const body = (await req.json()) as Omit<MemoData, 'id'>;
    const { title, category, description, date, markDiv } = body;
    if (title === '' || !isValidDate(date) || Number.isNaN(markDiv)) {
      return NextResponse.json(errorMessage(title, date, markDiv), { status: 400 });
    }
    try {
      const prevMemos = (await dbAxiosInstance.get('/memos')).data as MemoData[];
      const resMemo = (
        await dbAxiosInstance.post('/memos', {
          id: prevMemos.length.toString(),
          title,
          category,
          description,
          date,
          markDiv,
        })
      ).data as MemoData;

      if (resMemo === undefined) {
        throw new Error(`Failed to fetch memos`);
      }

      return NextResponse.json(resMemo, {
        status: 200,
        statusText: 'OK',
      });
    } catch (error) {
      return NextResponse.json('Internal Server Error', { status: 500 });
    }
  }
  return NextResponse.json('Internal Server Error', { status: 500 });
}
