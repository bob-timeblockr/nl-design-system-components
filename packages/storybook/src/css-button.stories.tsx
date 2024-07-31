/* @license CC0-1.0 */

import readme from '@timeblockr/components-css/button/README.md?raw';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import '@timeblockr/components-css/button/index.scss';

const Button = ({ children }: PropsWithChildren<{}>) => (
  <button className="timeblockr-button" type="button">
    <span className="timeblockr-button__text">{children}</span>
  </button>
);

const meta = {
  title: 'CSS Component/Button',
  id: 'css-button',
  component: Button,
  argTypes: {
    children: {
      name: 'Content',
      description: 'Button text',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    children: 'Opslaan en verder',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'timeblockr button',
};
