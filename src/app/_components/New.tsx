'use client';
import { FC, useState } from 'react';

import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';
import { MemoData } from 'pages/api/types';

export const New: FC = () => {
  const [title, setTitle] = useState('');
  const newHandle = async (title: string): Promise<MemoData> => {
    try {
      const response = await clientAxiosInstance.post(`/api/memo`, {
        title,
      });
      return response.data as MemoData;
    } catch {
      throw new Error('Login failed');
    }
  };
  const onSubmit = (): void => {
    newHandle(title)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form action="POST">
      <label htmlFor="title">
        title:
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="text-white bg-blue-500 p-1 ml-4"
      >
        作成
      </button>
    </form>
  );
};
