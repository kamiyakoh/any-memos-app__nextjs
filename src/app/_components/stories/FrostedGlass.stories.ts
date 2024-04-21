import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FrostedGlass } from '../uiParts/FrostedGlass';
import exp from 'constants';

const meta = {
  title: 'FrostedGlass',
  component: FrostedGlass,
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

export const Memo: Story = {
  args: {
    className: 'break-words whitespace-pre-wrap w-full md:w-[calc(50%_-_0.5rem)]',
    children: 'テキスト',
  },
};
