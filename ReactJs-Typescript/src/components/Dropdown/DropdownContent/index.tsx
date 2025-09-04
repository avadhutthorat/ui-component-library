import { forwardRef, type ReactElement } from "react";
import "./style.css";
type DropdownContentProps = {
  children: ReactElement | ReactElement[];
  isDropdownOpen: boolean;
  topPositon: number | null;
  setSelectedOption: (name: string) => void;
  selectedOption: string;
};

const DropdownContent = forwardRef<HTMLDivElement, DropdownContentProps>(
  (props, ref) => {
    const { children, isDropdownOpen, topPositon, setSelectedOption } = props;
    return (
      <div
        ref={ref}
        className={`dropdown-content ${isDropdownOpen ? "show-content" : ""}`}
        style={{
          ...(topPositon && {
            transform: `translateY(${topPositon || 40}px`,
          }),
        }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          const target = e.target as HTMLElement; // cast to HTMLElement
          setSelectedOption(target.innerText);
        }}
      >
        {children}
      </div>
    );
  }
);

export default DropdownContent;
