import { NextApiHandler } from 'next';

import { dbAxiosInstance } from 'app/_utils/axiosInstance';
// import { authorization } from 'app/api/authorization';

import { MemoData } from '../types';

const editMemo: NextApiHandler = async (req, res) => {
  /*   const authZ = await authorization(req);

  if (!(req.method === 'PUT' || req.method === 'DELETE') || authZ.status === 500) {
    res.status(500).json({ error: authZ.error });
    return;
  }

  if (authZ.status === 401) {
    res.status(401).json({ error: authZ.error });
    return;
  }

  if (authZ.status === 200) {
    const requestBody = (await req.body) as MemoData;
    const id = req.query.id as string;
    if (req.method === 'PUT') {
      const { title } = requestBody;
      if (title === '') {
        res.status(400).json({ error: 'input error' });
        return;
      }
      try {
        const resMemo = (
          await dbAxiosInstance.put(`/memos/${id}`, {
            id,
            title,
          })
        ).data as MemoData;
        res.json(resMemo);
      } catch (error) {
        res.status(500).json({ error });
      }
    } */
  if (req.method === 'DELETE') {
    // console.log('a');
    try {
      const id = req.query.id as string;
      const resMemo = (await dbAxiosInstance.delete(`/memos/${id}`)).data as MemoData;
      res.json(resMemo);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
// };
export default editMemo;
