import type { Meta, StoryObj } from "@storybook/react-vite";
import { createElement } from "react";
import Otp from "@components/Otp/index.tsx";

const meta = {
  title: " Example/Otp",
  component: Otp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    length: 5,
  },
} satisfies Meta<typeof Otp>;

export default meta;

type Story = StoryObj<typeof Otp>;

export const Default: Story = {
  args: {
    length: 7,
  },
};
