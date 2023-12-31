'use client';
import Image from 'next/image';
import { FC, useState } from 'react';

import { Menu } from 'app/_components/Menu';
import { New } from 'app/_components/New';
import { FrostedGlass } from 'app/_components/uiParts/FrostedGlass';
import { Modal } from 'app/_components/uiParts/Modal';
interface Props {
  isShowBgPreview: boolean;
  onClickShowBgPreview: () => void;
}

export const Memos: FC<Props> = ({ isShowBgPreview, onClickShowBgPreview }) => {
  // const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [isOpenNew, setIsOpenNew] = useState<boolean>(false);
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  // const setPickCatategories = useSetRecoilState(pickCategoriesState);
  /*   const {
    currentIdOpenDel,
    sortIdDate,
    pickDateDiff,
    pickMarkDiv,
    showMemos,
    categories,
    setCurrentIdOpenDel,
    handleSortIdDateChange,
    handlePickDiffChange,
    handleMarkDivChange,
    showMemosDel,
  } = useMemos();

  useEffect(() => {
    setPickCatategories(categories);
  }, [setPickCatategories]); // eslint-disable-line react-hooks/exhaustive-deps
 */
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
