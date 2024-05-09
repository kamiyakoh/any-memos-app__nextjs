import type { Meta, StoryObj } from '@storybook/react';
import { WeekDayJa } from '../uiParts/WeekDayJa';

const meta = {
  title: 'WeekDayJa',
  component: WeekDayJa,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'date' },
    isModal: { control: 'boolean' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof WeekDayJa>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    date: '2000/01/01',
    isModal: false,
    className: '',
  },
};

export const OnModal: Story = {
  args: {
    date: '2000/01/01',
    isModal: true,
    className: '',
  },
};
