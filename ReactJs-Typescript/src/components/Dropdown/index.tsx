import { useEffect, useState, useRef } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import "./style.css";
// const DROPDOWN_ITEMS: string[] = [
//   "Item 1",
//   "Item 2",
//   "Item 3",
//   "Item 4",
//   "Item 5",
//   "Item 6",
//   "Item 7",
//   "Item 8",
//   "Item 9",
//   "Item 10",
//   "Item 11",
// ];

const DROPDOWN_ITEMS: number = 40;

const Dropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [topPositon, setTopPosition] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownBtnRef = useRef<HTMLDivElement | null>(null);
  const dropdownContentRef = useRef<HTMLDivElement | null>(null);
  const onToggle = () => {
    if (!isDropdownOpen) {
      console.log({
        win: window.innerHeight,
        bouding: dropdownBtnRef.current?.getBoundingClientRect().bottom,
      });

      const spaceRemaining: number =
        window.innerHeight -
        (dropdownBtnRef?.current
          ? dropdownBtnRef?.current.getBoundingClientRect()?.bottom
          : 0);

      const contentHeight: number = dropdownContentRef?.current
        ? dropdownContentRef.current.clientHeight
        : 0;

      const topPosition =
        spaceRemaining > contentHeight
          ? null
          : spaceRemaining - contentHeight - 20;

      setTopPosition(topPosition);
    }
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [dropdownRef]);

  return (
    <div className="container" ref={dropdownRef}>
      <DropdownButton
        ref={dropdownBtnRef}
        onToggle={onToggle}
        isDropdownOpen={isDropdownOpen}
        placeholder="Select an option"
        selectedOption={selectedOption}
      />
      <DropdownContent
        topPositon={topPositon}
        ref={dropdownContentRef}
        isDropdownOpen={isDropdownOpen}
        setSelectedOption={(item) => {
          setIsDropdownOpen(false);
          setSelectedOption(item);
        }}
        selectedOption={selectedOption}
      >
        {Array.from({ length: DROPDOWN_ITEMS }, (_, id) => id).map((num) => {
          const itemName = `Item ${num}`;
          return (
            <div
              className={`dropdown-item ${selectedOption === itemName ? "selected" : ""}`}
            >
              {itemName}
            </div>
          );
        })}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
