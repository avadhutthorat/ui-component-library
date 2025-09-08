import type { Meta, StoryObj } from "@storybook/react-vite";
import { createElement } from "react";

import Toast from "@components/Toast";

const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    type: "success",
    placement: "left",
    message: "This is message",
  },
} satisfies Meta<typeof Toast>;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    type: "success",
    placement: "right",
    message: "This is message",
  },
};

// export const LeftSide: Story = {
//   args: {
//     type: "warning",
//     placement: "left",
//     message: "This is left message",
//   },
// };

export default meta;
