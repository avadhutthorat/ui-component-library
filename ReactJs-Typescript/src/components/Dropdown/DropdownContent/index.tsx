import { forwardRef, type ReactElement, type ReactNode } from "react";
import "./style.css";
type DropdownContentProps = {
  children: ReactNode | ReactElement[];
  isDropdownOpen: boolean;
  topPositon: number | null;
  setSelectedOption: (name: string) => void;
  selectedOption: string[];
  mode: "single-select" | "multi-select";
};

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, ref) => {
    const { children, isDropdownOpen, topPositon, setSelectedOption, mode } =
      props;
    return (
      <div
        ref={ref}
        className={`dropdown-content ${isDropdownOpen ? "show-content" : ""}`}
        style={{
          ...(topPositon && {
            transform: `translateY(${topPositon || 40}px`,
          }),
        }}
        onClick={(e: React.MouseEvent) => {
          const value = (e.target as HTMLInputElement).value;
          const target = e.target as HTMLElement; // cast to HTMLElement
          if (target.innerText) {
            setSelectedOption(target.innerText);
          } else {
            setSelectedOption(value);
          }
        }}
      >
        {children}
      </div>
    );
  }
);

export default DropdownContent;
