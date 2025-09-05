import { useState } from "react";
import Dropdown_UI from "./dropdown.tsx";

import "./style.css";

const DROPDOWN_ITEMS: number = 40;

interface DropdownProps {
  mode: "single-select" | "multi-select";
}

const Dropdown = ({ mode }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const selectedOptionHandler = (item: string) => {
    if (mode === "single-select") {
      setSelectedOption([item]);
      return;
    }
    const itemIndex = selectedOption.indexOf(item);
    if (itemIndex == -1) {
      setSelectedOption((prev) => [...prev, item]);
    } else {
      const clonedSelectedOption = [...selectedOption];
      const updatedSelectedOption = clonedSelectedOption.filter(
        (selected) => selected !== item
      );
      setSelectedOption(updatedSelectedOption);
    }
  };

  return (
    <Dropdown_UI
      placeholder={"Select an option"}
      selectedOption={selectedOption}
      setSelectedOption={selectedOptionHandler}
      content={Array.from({ length: DROPDOWN_ITEMS }, (_, id) => `Item ${id}`)}
      customContent={<div>Login Form</div>}
      showCustomContent={false}
      mode={mode}
      key={mode}
    />
  );
};

export default Dropdown;
