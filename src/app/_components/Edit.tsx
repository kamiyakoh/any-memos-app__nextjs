import { FC } from 'react';

import { DiffDays } from 'app/_components/DiffDays';
import { Button } from 'app/_components/uiParts/Button';
import { WeekDayJa } from 'app/_components/uiParts/WeekDayJa';
import { useEdit } from 'app/_hooks/useEdit';
import { MemoData } from 'app/_types';

interface Props {
  memo: MemoData;
  closeModal: () => void;
}

export const Edit: FC<Props> = ({ memo, closeModal }) => {
  const { watchDate, register, handleSubmit, editMemo } = useEdit(memo, closeModal);

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void handleSubmit(editMemo)(event);
        }}
      >
        <label htmlFor="title">
          ID： {memo.id}
          <br />
          <input type="text" value={memo.id} readOnly className="hidden" {...register('id')} />
        </label>
        <label htmlFor="title">
          タイトル
          <br />
          <input
            type="text"
            className="my-2 w-full rounded-sm border-gray-400 border-2 shadow-sm"
            {...register('title')}
          />
        </label>
        <br />
        <label htmlFor="category">
          カテゴリー
          <br />
          <input
            type="text"
            className="my-2 w-full rounded-sm border-gray-400 border-2 shadow-sm"
            {...register('category')}
          />
        </label>
        <br />
        <label htmlFor="description">
          説明
          <br />
          <textarea
            rows={5}
            className="my-2 w-full rounded-sm border-gray-400 border-2 shadow-sm"
            {...register('description')}
          ></textarea>
        </label>
        <br />
        <label htmlFor="date">
          期限日時
          <br />
          <input type="date" className="my-2 rounded-sm border-gray-400 border-2 shadow-sm" {...register('date')} />
          &nbsp;&nbsp;
          <WeekDayJa date={watchDate} isModal={true} />
          &nbsp;&nbsp;
          <DiffDays date={watchDate} isModal={true} />
        </label>
        <br />
        <label>
          マークを
          <br />
        </label>
        <label>
          <input type="radio" value={1} className="mr-2" {...register('markDiv')} />
          ★（つける）
          <br />
        </label>
        <label>
          <input type="radio" value={0} defaultChecked className="mr-2" {...register('markDiv')} />
          -（つけない）
        </label>
        <br />
        <Button type="submit" className="mt-4 text-white bg-green-600 hover:bg-green-700">
          決定
        </Button>
      </form>
    </div>
  );
};
