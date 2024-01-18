import dayjs from 'dayjs';
import { useState, useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import useSWR, { mutate } from 'swr';

import { useLogin } from 'app/_hooks/useLogin';
import { categoriesState } from 'app/_states/categories';
import { pickCategoriesState } from 'app/_states/pickCategoriesState';
import { SortIdDate, PickDateDiff, PickMarkDiv, MemoData } from 'app/_types';
import { clientAxiosInstance } from 'app/_utils/clientAxiosInstance';
import { sortIdDateRadio, pickDateDiffRadio, pickMarkDivRadio } from 'app/_utils/const';
import { diffFromNowYD } from 'app/_utils/date';

interface UseMemos {
  currentIdOpenDel: string;
  sortIdDate: SortIdDate;
  pickDateDiff: PickDateDiff;
  pickMarkDiv: PickMarkDiv;
  isLoading: boolean;
  memos?: MemoData[];
  showMemos?: MemoData[];
  categories: string[];
  setCurrentIdOpenDel: React.Dispatch<React.SetStateAction<string>>;
  handleSortIdDateChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePickDiffChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleMarkDivChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showMemosDel: () => Promise<void>;
}

export const useMemos = (): UseMemos => {
  const [currentIdOpenDel, setCurrentIdOpenDel] = useState<string>('');
  const [sortIdDate, setSortIdDate] = useState<SortIdDate>('idAsc');
  const [pickDateDiff, setPickDateDiff] = useState<PickDateDiff>('all');
  const [pickMarkDiv, setPickMarkDiv] = useState<PickMarkDiv>('-1');
  const [categories, setCategories] = useRecoilState<string[]>(categoriesState);
  const pickCategories = useRecoilValue(pickCategoriesState);
  const { handle401 } = useLogin();

  const fetchMemos = async (url: string): Promise<MemoData[]> => {
    if (typeof document !== 'undefined') {
      return await clientAxiosInstance.get<MemoData[]>(url).then((res) => {
        const memos = res.data ?? [];
        if (res.status === 200) {
          const memosCat = memos.map((memo) => memo.category).sort() ?? [];
          const uniqueCat = [...new Set(memosCat)];
          setCategories(uniqueCat);
        }
        return memos;
      });
    }
    return [];
  };

  const { data: memos, isLoading } = useSWR('/api/memos', fetchMemos);

  const sortMemos = useCallback((memos: MemoData[], sortIdDate: SortIdDate): MemoData[] => {
    return memos.sort((a, b) => {
      switch (sortIdDate) {
        case 'dateAsc':
          return dayjs(a.date).diff(b.date);
        case 'dateDesc':
          return dayjs(b.date).diff(a.date);
        case 'idDesc':
          return parseInt(b.id) - parseInt(a.id);
        default:
          return parseInt(a.id) - parseInt(b.id);
      }
    });
  }, []);

  const handleSortIdDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedSort = sortIdDateRadio.find((sort) => sort.value === event.target.value) ?? {
      value: 'idAsc',
      label: 'ID小さい順',
    };
    if (selectedSort !== null) {
      setSortIdDate(selectedSort.value);
    }
  }, []);
  const handlePickDiffChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedPick = pickDateDiffRadio.find((sort) => sort.value === event.target.value) ?? {
      value: 'all',
      label: '全て',
    };
    if (selectedPick !== null) {
      setPickDateDiff(selectedPick.value);
    }
  }, []);
  const handleMarkDivChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const selectedPick = pickMarkDivRadio.find((sort) => sort.value === event.target.value) ?? {
      value: '-1',
      label: '全て',
    };
    if (selectedPick !== null) {
      setPickMarkDiv(selectedPick.value);
    }
  }, []);
  const filterDateDiff = (date: string, pickDateDiff: PickDateDiff): boolean => {
    const { status } = diffFromNowYD(date);
    let result = true;
    switch (pickDateDiff) {
      case 'rest':
        if (status !== 'over') {
          result = true;
        } else {
          result = false;
        }
        break;
      case 'over':
        if (status === 'over') {
          result = true;
        } else {
          result = false;
        }
        break;
    }
    return result;
  };

  const pickMemos = useCallback(
    (
      sortIdDate: SortIdDate,
      pickDateDiff: PickDateDiff,
      pickMarkDiv: PickMarkDiv,
      pickCategories: string[]
    ): MemoData[] => {
      const pickedDateDiffMemos =
        pickDateDiff === 'all' ? memos : memos?.filter((memo) => filterDateDiff(memo.date, pickDateDiff));
      const pickedMarkDiv =
        pickMarkDiv === '-1'
          ? pickedDateDiffMemos
          : pickedDateDiffMemos?.filter((memo) => pickMarkDiv === memo.markDiv.toString());
      const pickedCat = pickedMarkDiv?.filter((memo) => pickCategories.includes(memo.category)) ?? [];
      return sortMemos(pickedCat ?? ([] as MemoData[]), sortIdDate) ?? ([] as MemoData[]);
    },
    [memos, sortMemos]
  );
  const showMemos = useMemo(() => {
    return pickMemos(sortIdDate, pickDateDiff, pickMarkDiv, pickCategories);
  }, [sortIdDate, pickDateDiff, pickMarkDiv, pickCategories, pickMemos]);
  const showMemosDel = useCallback(async () => {
    const delIds = showMemos.map((memo) => parseInt(memo.id, 10)).sort((a, b) => b - a);

    if (confirm(`表示中の${delIds.length}件のメモを本当にまとめて削除しますか？`)) {
      try {
        const res = await clientAxiosInstance.get('/api/memos');

        if (res.status === 200) {
          let success = 0;
          let error = 0;

          const deleteMemo = async (id: number): Promise<void> => {
            try {
              const res = await clientAxiosInstance.delete<MemoData | { errorMessage: string }>(
                `/api/memo/${id.toString()}`
              );
              if (res.status === 200) {
                success++;
              } else {
                error++;
              }
            } catch (err) {
              error++;
              console.error('Error deleting memo:', err);
            }
          };

          const deletePromises = delIds.map(deleteMemo);

          await Promise.all(deletePromises);

          toast(`${success > 0 ? success.toString() + '件のメモを削除しました\n' : ''}
            ${error > 0 ? error.toString() + '件のメモが削除できませんでした' : ''}`);
          await mutate('/api/memos');
          setCurrentIdOpenDel('');
        }
        if (res.status === 401) {
          handle401();
        }
      } catch (err) {
        console.error('Error fetching memos:', err);
      }
    }
  }, [showMemos, handle401]);

  return {
    currentIdOpenDel,
    sortIdDate,
    pickDateDiff,
    pickMarkDiv,
    isLoading,
    memos,
    showMemos,
    categories,
    setCurrentIdOpenDel,
    handleSortIdDateChange,
    handlePickDiffChange,
    handleMarkDivChange,
    showMemosDel,
  };
};
