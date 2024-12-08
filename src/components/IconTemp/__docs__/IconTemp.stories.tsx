// components/ArrowIcon/docs/ArrowIcon.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import IconTemp from "./Example";

const meta: Meta<typeof IconTemp> = {
  title: "Icons/IconTemplate",
  component: IconTemp,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 16, 20, 24, 32, 40, 48, 56, 64],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconTemp>;

export const Small: Story = {
  args: {
    size: 'small',
    color: 'black',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'black',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'black',
  },
};

export const Size24px: Story = {
  args: {
    size: 24,
    color: 'black',
  },
};

export const Size48px: Story = {
  args: {
    size: 48,
    color: 'black',
  },
};

export const CustomColor: Story = {
  args: {
    size: 'medium',
    color: '#FF5655',
  },
};
