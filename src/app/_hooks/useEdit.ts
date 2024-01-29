import { isAxiosError } from 'axios';
import { useCallback } from 'react';
import { useForm, UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';

import { useCategory } from 'app/_hooks/useCategory';
import { useLogin } from 'app/_hooks/useLogin';
import { MemoData } from 'app/_types';
import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';

interface EditFormValues {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  markDiv: string;
}
interface UseEdit {
  watchDate: string;
  register: UseFormRegister<EditFormValues>;
  handleSubmit: UseFormHandleSubmit<EditFormValues>;
  editMemo: (data: EditFormValues) => Promise<void>;
}

export const useEdit = (memo: MemoData, closeModal: () => void): UseEdit => {
  const { mutate } = useSWRConfig();
  const { handle401 } = useLogin();
  const { addPickCategories } = useCategory();
  const { register, handleSubmit, watch, reset } = useForm<EditFormValues>({
    defaultValues: {
      id: memo.id,
      title: memo.title,
      category: memo.category,
      description: memo.description,
      date: memo.date,
      markDiv: memo.markDiv.toString(),
    },
  });
  const watchDate = watch('date');
  const editMemo = useCallback(
    async (data: EditFormValues): Promise<void> => {
      const { id, title, category, description, date, markDiv } = data;

      try {
        const res = await clientAxiosInstance.put(`/api/memo/${id}`, {
          id,
          title,
          category,
          description,
          date,
          markDiv: parseInt(markDiv, 10),
        });

        if (res.status === 200) {
          const prevTitle = memo.title;
          const prevCat = memo.category;
          await mutate('/api/memos');
          addPickCategories(category);
          reset();
          toast.success(
            `ID：${id}\n
            タイトル：${prevTitle !== title ? prevTitle + ' ⇒ ' : ''}${title}\n
            カテゴリー：${prevCat !== category ? prevCat + ' ⇒ ' : ''}${category}\n
            のメモを編集しました`
          );
          closeModal();
        }
        /*         if (res.status === 401) {
          handle401();
        }
        if (res.status === 400) {
          const responseError = res.data as { errorMessage: string };
          toast.error(responseError.errorMessage);
        } */
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
    [memo, addPickCategories, reset, mutate, closeModal, handle401]
  );

  return { watchDate, register, handleSubmit, editMemo };
};
