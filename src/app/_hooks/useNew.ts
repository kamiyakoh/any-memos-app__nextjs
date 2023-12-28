import { useCallback } from 'react';
import { useForm, UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import toast from 'react-hot-toast';

// import { useCategory } from './useCategory';
import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';

import { useLogin } from './useLogin';
// import { useMemos } from './useMemos';

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
  const { handle401 } = useLogin();
  // const { refetchMemos } = useMemos();
  // const { addPickCategories } = useCategory();
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
          // await refetchMemos();
          // addPickCategories(category);
          reset();
          toast.success('新しいメモを作成しました');
        }
      } catch (error) {
        if (error.response !== undefined) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          const { status, data } = error.response as { status: number; data: string };

          if (status === 401) {
            console.log('Unauthorized: 401');
            handle401();
          } else if (status === 400) {
            toast.error(data);
          } else {
            console.log('Unexpected Error:', status);
            toast.error('エラーが発生しました');
          }
        } else if (error.request !== undefined) {
          console.log('No response received');
          toast.error('エラーが発生しました');
        } else {
          console.log('Error setting up the request:', error.message);
          toast.error('エラーが発生しました');
        }
      }
    },
    [reset, handle401]
  );

  return { watchDate, register, handleSubmit, postMemo };
};
