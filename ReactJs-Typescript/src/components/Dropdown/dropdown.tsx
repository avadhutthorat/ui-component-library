import { useEffect, useState, useRef, type ReactNode } from "react";
import DropdownButton from "./DropdownButton";
import DropdownContent from "./DropdownContent";
import "./style.css";

type DropdownProps = {
  placeholder: string;
  selectedOption: string;
  setSelectedOption: (item: string) => void;
  content: string[];
  customContent?: ReactNode;
  showCustomContent?: boolean;
};

const Dropdown = ({
  placeholder,
  selectedOption,
  setSelectedOption,
  content,
  customContent = <div></div>,
  showCustomContent = false,
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
          setIsDropdownOpen(false);
          setSelectedOption(item);
        }}
        selectedOption={selectedOption}
      >
        {showCustomContent && customContent
          ? customContent
          : content.map((itemName) => {
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
