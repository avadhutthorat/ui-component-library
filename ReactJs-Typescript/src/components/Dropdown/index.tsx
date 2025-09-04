import { useState } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import "./style.css";
const DROPDOWN_ITEMS: string[] = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
];

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="container">
      <DropdownButton onToggle={onToggle} isDropdownOpen={isDropdownOpen} />
      <DropdownContent isDropdownOpen={isDropdownOpen}>
        {DROPDOWN_ITEMS.map((item) => (
          <div className="dropdown-item">{item}</div>
        ))}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
