import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

type ButtonStoryType = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

export default meta;

export const Default: ButtonStoryType = {
  render: args => <Button {...args} />,
  args: {
    children: 'Button',
  },
};
