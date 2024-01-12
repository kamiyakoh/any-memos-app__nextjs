import { NextRequest, NextResponse } from 'next/server';

import { MemoData } from 'app/_types';
import { dbAxiosInstance } from 'app/_utils/axiosInstance';
import { authorization } from 'app/api/authorization';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const authZ = await authorization(req);

  if (authZ.status === 500) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 401) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 200) {
    try {
      const id = params.id;
      const response = await dbAxiosInstance.get(`/memos/${id}`);
      await dbAxiosInstance.delete(`/memos/${id}`);
      const memo = response.data as MemoData;
      return NextResponse.json(memo, { status: 200 });
    } catch (error) {
      return NextResponse.json('Internal Server Error', { status: 500 });
    }
  }
  return NextResponse.json('Internal Server Error', { status: 500 });
}

/* export async function PUT(req: NextRequest, { params }: { params: { id: string } }): Promise<NextResponse> {
  const authZ = await authorization(req);

  if (authZ.status === 500) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 401) {
    return NextResponse.json(authZ.error, { status: authZ.status });
  }

  if (authZ.status === 200) {
    try {
      const id = params.id;
      const body = (await req.json()) as Omit<MemoData, 'id'>;
      const { title, category, description, date, markDiv } = body;
      const resMemo = (
        await dbAxiosInstance.put(`/memos/${id}`, {
          id,
          title,
          category,
          description,
          date,
          markDiv,
        })
      ).data as MemoData;

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
 */
