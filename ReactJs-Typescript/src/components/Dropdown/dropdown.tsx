import { useEffect, useState, useRef, type ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import "./style.css";

type DropdownProps = {
  placeholder: string;
  selectedOption: string[];
  setSelectedOption: (item: string) => void;
  content: string[];
  customContent?: ReactNode;
  showCustomContent?: boolean;
  mode: "single-select" | "multi-select";
};

const Dropdown = ({
  placeholder,
  selectedOption,
  setSelectedOption,
  content,
  customContent = <div></div>,
  showCustomContent = false,
  mode,
}: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [topPositon, setTopPosition] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownBtnRef = useRef<HTMLDivElement | null>(null);
  const dropdownContentRef = useRef<HTMLDivElement | null>(null);

  const onToggle = () => {
    if (!isDropdownOpen) {
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
        placeholder={placeholder}
        selectedOption={selectedOption}
      />
      <DropdownContent
        topPositon={topPositon}
        ref={dropdownContentRef}
        isDropdownOpen={isDropdownOpen}
        setSelectedOption={(item) => {
          mode === "single-select" && setIsDropdownOpen(false);
          setSelectedOption(item);
        }}
        selectedOption={selectedOption}
        mode={mode}
      >
        {showCustomContent && customContent
          ? customContent
          : content.map((itemName) => {
              return (
                <div
                  className={`${mode === "multi-select" ? "dropdown-item-container-multi" : "dropdown-item-container-single"} ${selectedOption.includes(itemName) ? "selected" : ""}`}
                  key={itemName}
                >
                  {mode === "multi-select" && (
                    <input
                      type="checkbox"
                      id={itemName}
                      className="checkbox"
                      value={itemName}
                      checked={selectedOption.includes(itemName)}
                    />
                  )}
                  <label className={`dropdown-item`} htmlFor={itemName}>
                    {itemName}
                  </label>
                </div>
              );
            })}
      </DropdownContent>
    </div>
  );
};

export default Dropdown;
