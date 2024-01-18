'use client';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { Category } from 'app/_components/Category';
import { Memo } from 'app/_components/Memo';
import { Menu } from 'app/_components/Menu';
import { New } from 'app/_components/New';
import { Button } from 'app/_components/uiParts/Button';
import { FrostedGlass } from 'app/_components/uiParts/FrostedGlass';
import { Modal } from 'app/_components/uiParts/Modal';
import { useMemos } from 'app/_hooks/useMemos';
import { pickCategoriesState } from 'app/_states/pickCategoriesState';
import { sortIdDateRadio, pickDateDiffRadio, pickMarkDivRadio } from 'app/_utils/const';

interface Props {
  isShowBgPreview: boolean;
  onClickShowBgPreview: () => void;
}

export const Memos: FC<Props> = ({ isShowBgPreview, onClickShowBgPreview }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [isOpenNew, setIsOpenNew] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const setPickCatategories = useSetRecoilState(pickCategoriesState);
  const {
    currentIdOpenDel,
    sortIdDate,
    pickDateDiff,
    pickMarkDiv,
    isLoading,
    showMemos,
    categories,
    setCurrentIdOpenDel,
    handleSortIdDateChange,
    handlePickDiffChange,
    handleMarkDivChange,
    showMemosDel,
  } = useMemos();

  useEffect(() => {
    if (!isLoaded && !isLoading) {
      setPickCatategories(categories);
      setIsLoaded(true);
    }
  }, [isLoaded, isLoading, categories, setPickCatategories, setIsLoaded]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="w-full px-[5%] pb-[5.5rem] md:mt-[-4.5rem]">
      {isOpenNew || (
        <button
          className={`fixed top-4 left-4 z-40 text-4xl px-4 h-16 bg-blue-500 text-white rounded hover:bg-blue-600 min-[1936px]:left-[calc((100%_-_1920px)_/_2)]`}
          onClick={() => {
            setIsOpenNew(true);
          }}
        >
          作成
        </button>
      )}
      {isOpenMenu || (
        <button
          className={`fixed top-4 right-4 z-40 min-[1936px]:right-[calc((100%_-_1920px)_/_2)]`}
          onClick={() => {
            setIsOpenMenu(true);
          }}
        >
          <FrostedGlass style={{ padding: '0.5rem' }}>
            <Image src="/img/menuIcon.png" width={48} height={48} alt="menuIcon" />
          </FrostedGlass>
        </button>
      )}
      <FrostedGlass className="flex flex-wrap justify-around gap-4 w-fit mx-auto mb-4 p-6">
        <div>
          {sortIdDateRadio.map((item) => (
            <label key={item.value} className="mr-4">
              <input
                type="radio"
                value={item.value}
                checked={sortIdDate === item.value}
                onChange={handleSortIdDateChange}
              />
              &nbsp;{item.label}
              <br />
            </label>
          ))}
        </div>
        <div>
          {pickDateDiffRadio.map((item) => (
            <label key={item.value} className="mr-4">
              <input
                type="radio"
                value={item.value}
                checked={pickDateDiff === item.value}
                onChange={handlePickDiffChange}
              />
              &nbsp;{item.label}
              <br />
            </label>
          ))}
        </div>
        <div>
          {pickMarkDivRadio.map((item) => (
            <label key={item.value} className="mr-4">
              <input
                type="radio"
                value={item.value}
                checked={pickMarkDiv === item.value}
                onChange={handleMarkDivChange}
              />
              &nbsp;{item.label}
              <br />
            </label>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between gap-y-6">
          {isOpenCategory ? (
            <div />
          ) : (
            <Button
              type="button"
              className="self-center bg-yellow-500 hover:bg-yellow-600"
              style={{ textShadow: '0.5px 0.5px 0 #000' }}
              onClick={() => {
                setIsOpenCategory(true);
              }}
            >
              カテゴリー
            </Button>
          )}
          <Button
            type="button"
            className={`self-center  ${
              showMemos !== undefined && showMemos?.length > 0
                ? 'bg-red-500 hover:bg-red-600 pointer-events-auto'
                : 'bg-gray-500 pointer-events-none'
            }`}
            onClick={() => showMemosDel}
          >
            まとめて削除
          </Button>
        </div>
      </FrostedGlass>
      <div className="flex flex-wrap w-full max-w-[1920px] gap-4 mx-auto">
        {showMemos?.map((memo) => (
          <Memo
            key={memo.id}
            memo={memo}
            currentIdOpenDel={currentIdOpenDel}
            setCurrentIdOpenDel={setCurrentIdOpenDel}
          />
        ))}
      </div>
      {isShowBgPreview || (
        <Modal
          addClassPanel="border-gray-500"
          isOpen={isOpenMenu}
          enableCloseButton
          onClose={() => {
            setIsOpenMenu(false);
          }}
        >
          <Menu onClickShowBgPreview={onClickShowBgPreview} />
        </Modal>
      )}
      <Modal
        addClassPanel="border-yellow-500"
        isOpen={isOpenCategory}
        enableCloseButton
        onClose={() => {
          setIsOpenCategory(false);
        }}
      >
        <Category />
      </Modal>
      <Modal
        addClassPanel="border-blue-500 w-full"
        isOpen={isOpenNew}
        enableCloseButton
        onClose={() => {
          setIsOpenNew(false);
        }}
      >
        <New />
      </Modal>
    </div>
  );
};
