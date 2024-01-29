import { isAxiosError } from 'axios';
import { useCallback } from 'react';
import { useForm, UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';

import { useCategory } from 'app/_hooks/useCategory';
import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';

import { useLogin } from './useLogin';

export interface FormValues {
  title: string;
  category: string;
  description: string;
  date: string;
  markDiv: string;
}
interface UseNew {
  watchDate: string;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  postMemo: (data: FormValues) => Promise<void>;
}

export const useNew = (): UseNew => {
  const { mutate } = useSWRConfig();
  const { handle401 } = useLogin();
  const { addPickCategories } = useCategory();
  const { register, handleSubmit, watch, reset } = useForm<FormValues>({
    defaultValues: {
      title: '',
      category: '',
      description: '',
      date: '',
      markDiv: '0',
    },
  });
  const watchDate = watch('date', '');
  const postMemo = useCallback(
    async (data: FormValues): Promise<void> => {
      const { title, category, description, date, markDiv } = data;

      try {
        const res = await clientAxiosInstance.post('/api/memo', {
          title,
          category,
          description,
          date,
          markDiv: parseInt(markDiv, 10),
        });

        if (res.status === 200) {
          await mutate('/api/memos');
          addPickCategories(category);
          reset();
          toast.success('新しいメモを作成しました');
        }
      } catch (error) {
        if (!isAxiosError(error)) {
          console.log({ error });
          toast.error('エラーが発生しました');
        } else {
          if (error.response !== undefined) {
            const { status, data } = error.response as { status: number; data: string };

            switch (status) {
              case 401:
                handle401();
                break;
              case 400:
                toast.error(data);
                break;
              default:
                toast.error('エラーが発生しました');
                break;
            }
          }
        }
      }
    },
    [reset, handle401, mutate, addPickCategories]
  );

  return { watchDate, register, handleSubmit, postMemo };
};
