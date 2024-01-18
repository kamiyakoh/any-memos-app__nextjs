import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useSWRConfig } from 'swr';

import { useLogin } from 'app/_hooks/useLogin';
import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';

import type { MemoData } from '../_types';

interface UseMemo {
  openDel: (id: string) => void;
  closeDel: () => void;
  delMemo: (id: string) => Promise<void>;
  textFormatBr: (text: string) => string;
}

export const useMemoSingle = (
  // currentIdOpenDel: string,
  setCurrentIdOpenDel: React.Dispatch<React.SetStateAction<string>>
): UseMemo => {
  const { mutate } = useSWRConfig();
  const { handle401 } = useLogin();
  const openDel = useCallback(
    (id: string): void => {
      setCurrentIdOpenDel(id);
    },
    [setCurrentIdOpenDel]
  );
  const closeDel = useCallback((): void => {
    setCurrentIdOpenDel('');
  }, [setCurrentIdOpenDel]);
  const delMemo = useCallback(
    async (id: string): Promise<void> => {
      try {
        const res = await clientAxiosInstance.delete<MemoData | { errorMessage: string }>(`/api/memo/${id}`);
        if (res.status === 200) {
          await mutate('/api/memos');
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
    [mutate, setCurrentIdOpenDel, handle401]
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
