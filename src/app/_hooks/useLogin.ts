'use client';
import axios, { AxiosResponse } from 'axios';
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
  handleLogin: (data: InputLogin) => void;
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

  // useEffectとaxiosとMSWの組合せで発生するFireFoxのXHR_404_NotFonund問題に対処するためaxiosではなくfetchを使用
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

  const login = async (email: string, password: string): Promise<string> => {
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

  const handleLogin = useCallback(
    (data: InputLogin): void => {
      const email = data.email;
      const password = data.password;
      login(email, password)
        .then(() => {
          setIsAuth(true);
          router.refresh();
        })
        .catch(() => {
          toast.error('メールアドレスまたは\nパスワードが違います');
        });
    },
    [router, setIsAuth]
  );

  const handle401 = useCallback((): void => {
    toast.error('権限がありません\n再ログインしてください');
    setIsAuth(false);
  }, [setIsAuth]);

  return { isAuth, isLoading, setIsAuth, register, handleSubmit, handleLogin, fetchIsAuth, handle401 };
};
