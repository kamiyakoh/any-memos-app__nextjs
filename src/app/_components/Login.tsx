'use client';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react';

export const Login: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginHandle = async (email: string, password: string): Promise<string> => {
    try {
      const response: AxiosResponse<string> = await axios.post('/api/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  };
  const onSubmit = (): void => {
    loginHandle(email, password)
      .then(() => {
        router.refresh();
        // location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form action="POST">
      <label htmlFor="email">
        email:
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password" className="ml-4">
        password:
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="text-white bg-violet-500 p-1 ml-4"
      >
        送信
      </button>
    </form>
  );
};
