import { NextApiHandler } from 'next';

import { authenticate } from './authenticate';
import { MemoData } from './types';

const getAllMemos: NextApiHandler = async (req, res) => {
  const authZ = await authenticate(req);

  if (req.method !== 'GET' || authZ.status === 500) {
    res.status(500).json({ error: authZ.error });
    return;
  }

  if (authZ.status === 401) {
    res.status(401).json({ error: authZ.error });
    return;
  }

  if (authZ.status === 200) {
    try {
      const memosResponse = await fetch(`${process.env.DB_HOST}/memos`, { cache: 'no-store' });

      if (!memosResponse.ok) {
        throw new Error(`Failed to fetch memos. Status: ${memosResponse.status}`);
      }

      const memos = (await memosResponse.json()) as MemoData[];
      res.json(memos);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};

export default getAllMemos;
