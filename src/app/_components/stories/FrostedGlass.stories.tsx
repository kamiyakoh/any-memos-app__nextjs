import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState, useCallback } from 'react';
import { RecoilRoot } from 'recoil';
import { FrostedGlass } from '../uiParts/FrostedGlass';
import { SortIdDate, PickDateDiff, PickMarkDiv } from 'app/_types';
import { sortIdDateRadio, pickDateDiffRadio, pickMarkDivRadio } from 'app/_utils/const';
import { Button } from '../uiParts/Button';
import { Memo as MemoComponent } from '../Memo';

const meta = {
  title: 'FrostedGlass',
  component: FrostedGlass,
  decorators: [(story) => <RecoilRoot>{story()}</RecoilRoot>],
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    style: { control: 'object' },
    children: { control: 'text' },
  },
} satisfies Meta<typeof FrostedGlass>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    className: '',
    children: 'テキスト',
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

export const Memo: Story = {
  args: {
    className: 'break-words whitespace-pre-wrap w-full md:w-[calc(50%_-_0.5rem)]',
    children: <MemoComponent memo={demoMemo} currentIdOpenDel="" setCurrentIdOpenDel={fn()} />,
  },
  render: () => <MemoComponent memo={demoMemo} currentIdOpenDel="" setCurrentIdOpenDel={fn()} />,
};

export const SortBoard: Story = {
  args: {
    className: 'flex flex-wrap justify-around gap-4 w-fit mx-auto mb-4 p-6',
    children: '',
  },
  render: ({ ...args }) => {
    const [sortIdDate, setSortIdDate] = useState<SortIdDate>('idAsc');
    const [pickDateDiff, setPickDateDiff] = useState<PickDateDiff>('all');
    const [pickMarkDiv, setPickMarkDiv] = useState<PickMarkDiv>('-1');
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

    return (
      <meta.component {...args}>
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
          <Button
            type="button"
            className="self-center bg-yellow-500 hover:bg-yellow-600"
            style={{ textShadow: '0.5px 0.5px 0 #000' }}
            onClick={fn()}
          >
            カテゴリー
          </Button>
          <Button type="button" className={`self-center bg-red-500 hover:bg-red-600`} onClick={fn()}>
            まとめて削除
          </Button>
        </div>
      </meta.component>
    );
  },
};
