'use client';
import { FC, useState, useEffect, useRef } from 'react';

import { clientAxiosInstance } from 'app/utils/clientAxiosInstance';
import { MemoData } from 'pages/api/types';
interface Props {
  memo: MemoData;
}

export const Memo: FC<Props> = ({ memo }) => {
  const { id, title } = memo;
  const ref = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  const editHandle = async (editTitle: string): Promise<MemoData> => {
    try {
      const response = await clientAxiosInstance.put(`/api/memo/${id}`, {
        id,
        title: editTitle,
      });
      return response.data as MemoData;
    } catch {
      throw new Error('Login failed');
    }
  };
  const onSubmit = (): void => {
    editHandle(editTitle)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsEdit(false);
      });
  };

  const deleteHandle = async (): Promise<MemoData> => {
    try {
      const response = await clientAxiosInstance.delete(`/api/memo/${id}`);
      return response.data as MemoData;
    } catch {
      throw new Error('Login failed');
    }
  };
  const onClickDel = (): void => {
    deleteHandle()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (isEdit) {
      ref.current?.focus();
    }
  }, [isEdit]);

  return (
    <div>
      <p>id:{memo.id}</p>
      {isEdit ? (
        <label htmlFor="editTitle">
          title:{' '}
          <input
            type="text"
            ref={ref}
            value={editTitle}
            onChange={(e) => {
              setEditTitle(e.target.value);
            }}
          />
        </label>
      ) : (
        <p>title:{title}</p>
      )}
      <div className="mt-4">
        {isEdit ? (
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            className="text-white bg-orange-500 p-2"
          >
            上書き
          </button>
        ) : (
          <button type="button" onClick={onClickEdit} className="text-white bg-green-500 p-2">
            編集
          </button>
        )}
        <button type="button" onClick={onClickDel} className="text-white bg-red-500 p-2 ml-4">
          削除
        </button>
      </div>
    </div>
  );
};
