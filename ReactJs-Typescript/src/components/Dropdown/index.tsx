import { useState } from "react";
import Dropdown_UI from "./dropdown.tsx";

import "./style.css";

const DROPDOWN_ITEMS: number = 40;

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <Dropdown_UI
      placeholder={"Select an option"}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      content={Array.from({ length: DROPDOWN_ITEMS }, (_, id) => `Item ${id}`)}
      customContent={<div>Login Form</div>}
      showCustomContent={false}
    />
  );
};

export default Dropdown;
