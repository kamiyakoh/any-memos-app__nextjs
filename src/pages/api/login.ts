import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import { NextApiHandler } from 'next';

const login: NextApiHandler = async (req, res) => {
  const requestBody = (await req.body) as { email: string; password: string };
  const { email, password } = requestBody;

  if (email === undefined || password === undefined) {
    res.status(400).json({ error: 'Invalid request body' });
  }

  if (email !== process.env.EMAIL || password !== process.env.PASSWORD) {
    res.status(401).json({ error: 'unauthorized' });
  } else {
    const secretKey = process.env.JWT_SECRET_KEY as string;
    const token = sign({ email }, secretKey, { expiresIn: '24h' });
    res.setHeader('token', token);
    res.setHeader('Set-Cookie', serialize('token', token, { maxAge: 24 * 60 * 60, path: '/' }));
    res.status(200).json({
      message: 'Login Success',
    });
  }
};
export default login;
