import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { fn } from '@storybook/test';
import { RecoilRoot, MutableSnapshot } from 'recoil';
import { categoriesState } from '@@/app/_states/categories';
import { Modal } from '../uiParts/Modal';
import { FrostedGlass } from '../uiParts/FrostedGlass';
import { Button } from '../uiParts/Button';
import { Login as LoginComponent } from '../Login';
import { Menu as MenuComponent } from '../Menu';
import { New as NewComponent } from '../New';
import { Edit as EditComponent } from '../Edit';
import { Category as CategoryComponent } from '../Category';

const toastStyle = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  background: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  maxWidth: '90vw',
  padding: '1rem',
  backdropFilter: 'blur(4px)',
};

const classNames = {
  blue: 'border-blue-500',
  blueFull: 'border-blue-500 w-full',
  green: 'border-green-600',
  greenFull: 'border-green-600 w-full',
  gray: 'border-gray-500',
  violet: 'border-violet-500',
  yellow: 'border-yellow-500',
};

const meta = {
  title: 'Modal',
  component: Modal,
  decorators: [
    (story) => {
      const initializeState = ({ set }: MutableSnapshot): void => {
        set(categoriesState, ['cat1', 'cat2', 'etc']);
      };
      return <RecoilRoot initializeState={initializeState}>{story()}</RecoilRoot>;
    },
  ],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    addClassPanel: {
      options: Object.keys(classNames),
      mapping: classNames,
      control: {
        type: 'select',
        labels: {
          blue: 'blue',
          blueFull: 'blueFull',
          green: 'green',
          greenFull: 'greenFull',
          gray: 'gray',
          violet: 'violet',
          yellow: 'yellow',
        },
      },
    },
    isOpen: { control: 'none' },
    enableCloseButton: { control: 'none' },
  },
} satisfies Meta<typeof Modal>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    isOpen: true,
    enableCloseButton: false,
    addClassPanel: 'border-violet-500',
    children: <LoginComponent />,
    onClose: fn(),
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div>
        <meta.component {...args} isOpen={isOpen} />
        <Toaster toastOptions={{ style: toastStyle }} />
      </div>
    );
  },
};

export const Menu: Story = {
  args: {
    isOpen: false,
    enableCloseButton: true,
    addClassPanel: 'border-gray-500',
    children: <MenuComponent onClickShowBgPreview={fn()} />,
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShowBgPreview, setIsShowBgPreview] = useState(false);
    const onClickShowBgPreview = () => {
      setIsShowBgPreview(true);
      toast('背景プレビューを終了するには\n画面をタッチ・クリックしてください');
    };
    return (
      <div>
        {isOpen || (
          <button
            className={`fixed top-4 right-4 z-40 min-[1936px]:right-[calc((100%_-_1920px)_/_2)]`}
            onClick={() => setIsOpen(true)}
          >
            <FrostedGlass style={{ padding: '0.5rem' }}>
              <img src="./img/menuIcon.png" width={48} height={48} alt="menuIcon" />
            </FrostedGlass>
          </button>
        )}
        {isShowBgPreview || (
          <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <MenuComponent onClickShowBgPreview={onClickShowBgPreview} />
          </meta.component>
        )}
        {isShowBgPreview && <button className="w-full h-[100vh]" onClick={() => setIsShowBgPreview(false)} />}
        <Toaster toastOptions={{ style: toastStyle }} />
      </div>
    );
  },
};

export const New: Story = {
  args: {
    isOpen: false,
    enableCloseButton: true,
    addClassPanel: 'border-blue-500 w-full',
    children: <NewComponent />,
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        {isOpen || (
          <button
            className={`fixed top-4 left-4 z-40 text-4xl px-4 h-16 bg-blue-500 text-white rounded hover:bg-blue-600 min-[1936px]:left-[calc((100%_-_1920px)_/_2)]`}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            作成
          </button>
        )}
        <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};

const demoMemo = {
  id: '1',
  title: 'Test',
  category: 'etc',
  description: 'example\nexample',
  date: '2100-01-01',
  markDiv: 1,
};

export const Edit: Story = {
  args: {
    isOpen: false,
    enableCloseButton: true,
    addClassPanel: 'border-green-600 w-full',
    children: <EditComponent memo={demoMemo} closeModal={fn()} />,
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="flex items-center justify-center h-screen">
        {isOpen || (
          <Button
            type="button"
            className="bg-green-600 hover:bg-green-700"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            編集
          </Button>
        )}
        <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};

export const Category: Story = {
  args: {
    isOpen: false,
    enableCloseButton: true,
    addClassPanel: 'border-yellow-500',
    children: <CategoryComponent />,
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="flex items-center justify-center h-screen">
        {isOpen || (
          <Button
            type="button"
            className="self-center bg-yellow-500 hover:bg-yellow-600"
            style={{ textShadow: '0.5px 0.5px 0 #000' }}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            カテゴリー
          </Button>
        )}
        <meta.component {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};
