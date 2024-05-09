import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ScrollToTopButton } from '../uiParts/ScrollToTopButton';

const meta = {
  title: 'ScrollToTopButton',
  component: ScrollToTopButton,
  parameters: { layout: 'centered' },
  argTypes: {
    className: { control: 'text' },
    style: { control: 'object' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof ScrollToTopButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    className: '',
  },
};
