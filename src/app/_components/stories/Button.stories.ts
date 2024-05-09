import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../uiParts/Button';

const classNames = {
  gray: 'bg-gray-500 hover:bg-gray-600 text-white',
  green: 'bg-green-600 hover:bg-green-700 text-white',
  midRed: 'bg-red-700 hover:bg-red-800 text-white',
  orange: 'bg-orange-500 hover:bg-orange-600 text-white',
  red: 'bg-red-500 hover:bg-red-600 text-white',
  violet: 'bg-violet-500 hover:bg-violet-600 text-white',
  yellow: 'bg-yellow-500 hover:bg-yellow-600 text-white',
  inActive: 'bg-gray-500 pointer-events-none text-white',
};

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    className: {
      options: Object.keys(classNames),
      mapping: classNames,
      control: {
        type: 'select',
        labels: {
          gray: 'gray',
          green: 'green',
          midRed: 'midRed',
          orange: 'orange',
          red: 'red',
          violet: 'violet',
          yellow: 'yellow',
          inActive: 'inActive',
        },
      },
    },
    style: { control: 'object' },
    onClick: { control: 'checked' },
  },
  args: {
    className: 'text-white',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: 'button',
    children: 'ボタン',
    className: 'bg-violet-500 hover:bg-violet-600 text-white',
  },
};

export const Inactive: Story = {
  args: {
    type: 'button',
    children: 'ボタン',
    className: 'bg-gray-500 pointer-events-none text-white',
  },
};
