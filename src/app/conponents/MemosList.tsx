import { FC } from 'react';

import { MemoData } from 'pages/api/types';

import { Memo } from './Memo';

interface Props {
  memos: MemoData[];
}

export const MemosList: FC<Props> = ({ memos }) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center gap-8 font-mono text-sm lg:flex">
      {memos?.map((memo) => (
        <Memo key={memo.id} memo={memo} />
      ))}
    </div>
  );
};
