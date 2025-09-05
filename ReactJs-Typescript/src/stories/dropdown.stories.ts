import type { Meta, StoryObj } from "@storybook/react-vite";
import { createElement } from "react";

import Dropdown from "@components/Dropdown/dropdown.tsx";

const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    placeholder: "Select an option",
    selectedOption: "",
    setSelectedOption: () => {},
    content: Array.from({ length: 40 }, (_, id) => `Item ${id + 1}`),
    customContent: createElement("div", null, "Login Form"),
    showCustomContent: false,
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    placeholder: "Select Dropdown items",
    selectedOption: "",
    showCustomContent: false,
  },
};

export const Custom_Content: Story = {
  args: {
    placeholder: "Open Dropdown",
    customContent: createElement("div", null, "Login Form"),
    showCustomContent: true,
    selectedOption: "",
  },
};
