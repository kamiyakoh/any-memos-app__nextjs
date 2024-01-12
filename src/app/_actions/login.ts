'use sever';
import { serialize } from 'cookie';
import { sign } from 'jsonwebtoken';
import toast from 'react-hot-toast';

export const logIn = (formData: FormData): void => {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (email !== process.env.NEXT_PUBLIC_EMAIL || password !== process.env.NEXT_PUBLIC_PASSWORD) {
    toast.error('メールアドレスまたは\nパスワードが違います');
  } else {
    const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string;
    const token = sign({ email: 'a' }, secretKey, { expiresIn: '24h' });
    serialize('token', token, { maxAge: 24 * 60 * 60, path: '/' });
  }
};
