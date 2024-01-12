import { useCallback } from 'react';
import toast from 'react-hot-toast';

import { useLogin } from 'app/_hooks/useLogin';
import { useMemos } from 'app/_hooks/useMemos';
import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';

import type { MemoData } from '../_types';

interface UseMemo {
  openDel: (id: string) => void;
  closeDel: () => void;
  // delMemo: (id: string) => void;
  delMemo: (id: string) => Promise<void>;
  textFormatBr: (text: string) => string;
}

export const useMemoSingle = (
  currentIdOpenDel: string,
  setCurrentIdOpenDel: React.Dispatch<React.SetStateAction<string>>
): UseMemo => {
  const { handle401 } = useLogin();
  const { refetchMemos } = useMemos();
  const openDel = useCallback(
    (id: string): void => {
      setCurrentIdOpenDel(id);
    },
    [setCurrentIdOpenDel]
  );
  const closeDel = useCallback((): void => {
    setCurrentIdOpenDel('');
  }, [setCurrentIdOpenDel]);
  /*   const delMemo = useCallback(
    (id: string): void => {
      clientAxiosInstance
        .delete<MemoData | { errorMessage: string }>(`/api/memo/${id}`)
        .then(async (res) => {
          if (res.status === 200) {
            await refetchMemos();
            setCurrentIdOpenDel('');
            const { title, category } = res.data as MemoData;
            toast(`タイトル: ${title}\n${category !== '' ? 'カテゴリー:' + category + '\n' : ''}のメモを削除しました`, {
              icon: '🚮',
            });
          }
          if (res.status === 401) {
            handle401();
          }
          if (res.status === 400) {
            const responseError = res.data as { errorMessage: string };
            toast.error(responseError.errorMessage);
          }
        })
        .catch(() => {
          toast.error('メモの削除に失敗しました');
        });
    },
    [refetchMemos, setCurrentIdOpenDel, handle401]
  ); */
  const delMemo = useCallback(
    async (id: string): Promise<void> => {
      try {
        const res = await clientAxiosInstance.delete<MemoData | { errorMessage: string }>(`/api/memoTest/${id}`);
        if (res.status === 200) {
          await refetchMemos();
          setCurrentIdOpenDel('');
          const { title, category } = res.data as MemoData;
          toast(`タイトル: ${title}\n${category !== '' ? 'カテゴリー:' + category + '\n' : ''}のメモを削除しました`, {
            icon: '🚮',
          });
        } else if (res.status === 401) {
          handle401();
        } else if (res.status === 400) {
          const responseError = res.data as { errorMessage: string };
          toast.error(responseError.errorMessage);
        }
      } catch (error) {
        toast.error('メモの削除に失敗しました');
      }
    },
    [refetchMemos, setCurrentIdOpenDel, handle401]
  );
  const textFormatBr = useCallback((text: string): string => {
    if (text === '' || text === null) return '';
    const escText = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
    return escText.replace(/\n/g, '<br>');
  }, []);

  return { openDel, closeDel, delMemo, textFormatBr };
};
