'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';

import { isAuthState } from 'app/_states/isAuthState';

import { clientAxiosInstance } from '../_utils/clientAxiosInstance';

import type { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import type { SetterOrUpdater } from 'recoil';

interface InputLogin {
  email: string;
  password: string;
}
interface UseLogin {
  isAuth: boolean;
  isLoading: boolean;
  setIsAuth: SetterOrUpdater<boolean>;
  register: UseFormRegister<InputLogin>;
  handleSubmit: UseFormHandleSubmit<InputLogin>;
  fetchIsAuth: () => void;
  handleLogin: (data: InputLogin) => Promise<void>;
  handle401: () => void;
}

export const useLogin = (): UseLogin => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useRecoilState<boolean>(isAuthState);
  const { register, handleSubmit } = useForm<InputLogin>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const fetchIsAuth = useCallback((): void => {
    clientAxiosInstance
      .get('/api/memos')
      .then((res) => {
        if (res.status === 200) setIsAuth(true);
        if (res.status === 401) setIsAuth(false);
      })
      .catch(() => {
        setIsAuth(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [setIsAuth]);

  const handleLogin = useCallback(
    async (data: InputLogin): Promise<void> => {
      const email = data.email;
      const password = data.password;
      try {
        await axios.post(`/api/login`, {
          email,
          password,
        });
        router.refresh();
      } catch (error) {
        toast.error('メールアドレスまたは\nパスワードが違います');
      }
    },
    [router]
  );

  const handle401 = useCallback((): void => {
    toast.error('権限がありません\n再ログインしてください');
    setIsAuth(false);
  }, [setIsAuth]);

  return { isAuth, isLoading, setIsAuth, register, handleSubmit, handleLogin, fetchIsAuth, handle401 };
};
