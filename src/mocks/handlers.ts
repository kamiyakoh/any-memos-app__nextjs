import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import type { MemoData } from 'types';

interface LoginBody {
  email: string;
  password: string;
}

let memos = JSON.parse(localStorage.getItem('memos') ?? '[]') as MemoData[];

export const getAuth = (): boolean => {
  const isToken = localStorage.getItem('accessToken');
  const tokenExp = dayjs(localStorage.getItem('accessTokenExp'));
  const now = dayjs();
  let isAuth = false;
  if (isToken === 'mock-jwt-token' && tokenExp.isAfter(now)) {
    isAuth = true;
  }
  return isAuth;
};
const isValidDate = (date: string): boolean => {
  const dateFormat = 'YYYY/MM/DD';
  const dateObj = dayjs(date, { format: dateFormat });
  return dateObj.isValid();
};
const setNewMemos = (newMemos: MemoData[]): void => {
  localStorage.setItem('memos', JSON.stringify(newMemos));
  memos = newMemos;
};
const delMemo = (id: string | readonly string[]): void => {
  const filterMemos = memos.filter((memo) => memo.id !== id);
  const fixedMemos = filterMemos.map((memo, index) => ({
    ...memo,
    id: index.toString(),
  }));
  setNewMemos(fixedMemos);
};
const errorMessage = (title: string, date: string, markDiv: number): string => {
  let message: string[] = [];
  if (title === '') message = ['タイトルは必須です'];
  if (!isValidDate(date)) message = [...message, '日付の形式が不正です'];
  if (Number.isNaN(markDiv)) message = [...message, 'マーク区分は数値で入力してください'];
  const errorMessage = message.join('\n');
  return errorMessage;
};

// モックAPIのハンドラーを定義
export const handlers = [
  http.post('/api/login', async ({ request }) => {
    const requestBody = await request.json();

    if (requestBody === null) {
      return new HttpResponse('Invalid request body', { status: 400 });
    }

    const { email, password } = requestBody as LoginBody;

    // 仮のユーザー名とパスワードでモックのJWTを返す例
    if (email !== 'hoge@example.com' || password !== 'exam') {
      return new HttpResponse('unauthorized', { status: 401 });
    }
    const expDate = dayjs().add(24, 'hour');
    return HttpResponse.json({
      accessToken: 'mock-jwt-token',
      accessTokenExp: expDate,
    });
  }),
  http.get('/api/memos', () => {
    if (!getAuth()) {
      return new HttpResponse('unauthorized', { status: 401 });
    }
    return HttpResponse.json(memos, { status: 200 });
  }),
  http.post('/api/memo', async ({ request }) => {
    // 認証が不正の場合
    if (!getAuth()) {
      return new HttpResponse('unauthorized', { status: 401 });
    }
    // 認証が正常の場合
    const requestBody = await request.json();
    const { title, category, description, date, markDiv } = requestBody as MemoData;
    // inputも正常の場合
    if (title !== '' && isValidDate(date) && !Number.isNaN(markDiv)) {
      const id = memos.length.toString();
      const newMemo = { id, title, category, description, date, markDiv };
      const newMemos = [...memos, newMemo];
      setNewMemos(newMemos);
      return HttpResponse.json(
        {
          id,
          title,
          category,
          description,
          date,
          mark_div: markDiv,
        },
        { status: 200 }
      );
    }
    // inputに問題ある場合
    return new HttpResponse(errorMessage(title, date, markDiv), { status: 400 });
  }),
  http.put('/api/memo/:id', async ({ request }) => {
    // 認証が不正の場合
    if (!getAuth()) {
      return new HttpResponse('unauthorized', { status: 401 });
    }
    // 認証が正常の場合
    const requestBody = await request.json();
    const { id, title, category, description, date, markDiv } = requestBody as MemoData;
    // inputも正常の場合
    if (title !== '' && isValidDate(date) && !Number.isNaN(markDiv)) {
      const thisMemo = memos.find((memo) => memo.id === id);
      const newMemo = { id, title, category, description, date, markDiv };
      const newMemos = memos.map((memo) => {
        if (memo === thisMemo) {
          return newMemo;
        }
        return memo;
      });
      setNewMemos(newMemos);
      return HttpResponse.json({ id, title, category, description, date, markDiv }, { status: 200 });
    }
    // inputに問題ある場合
    return new HttpResponse(errorMessage(title, date, markDiv), { status: 400 });
  }),
  http.delete('/api/memo/:id', ({ params }) => {
    if (!getAuth()) {
      return new HttpResponse('unauthorized', { status: 401 });
    }

    // 認証とinputが正常の場合
    const thisId = params.id;
    const thisMemo = memos.find((memo) => memo.id === thisId);

    if (thisMemo !== undefined) {
      const { id, title, category, description, date, markDiv } = thisMemo;
      delMemo(thisId);
      return HttpResponse.json({ id, title, category, description, date, markDiv }, { status: 200 });
    }
    // inputに問題ある場合
    return new HttpResponse('IDが不正です', { status: 400 });
  }),
];
