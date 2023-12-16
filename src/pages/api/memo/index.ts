import { NextApiHandler } from 'next';

import { dbAxiosInstance } from 'app/_utils/axiosInstance';

import { authenticate } from '../authenticate';
import { MemoData } from '../types';

const createMemo: NextApiHandler = async (req, res) => {
  const authZ = await authenticate(req);

  if (req.method !== 'POST' || authZ.status === 500) {
    res.status(500).json({ error: authZ.error });
    return;
  }

  if (authZ.status === 401) {
    res.status(401).json({ error: authZ.error });
    return;
  }

  if (authZ.status === 200) {
    const requestBody = (await req.body) as MemoData;
    const { title } = requestBody;
    if (title === '') {
      res.status(400).json({ error: 'input error' });
      return;
    }
    try {
      const prevMemos = (await dbAxiosInstance.get('/memos')).data as MemoData[];
      const resMemo = (
        await dbAxiosInstance.post('/memos', {
          id: prevMemos.length.toString(),
          title,
        })
      ).data as MemoData;
      res.json(resMemo);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
export default createMemo;
