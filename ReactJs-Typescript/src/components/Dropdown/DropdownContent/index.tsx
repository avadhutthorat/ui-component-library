import type { ReactElement } from "react";
import "./style.css";
type DropdownContentProps = {
  children: ReactElement | ReactElement[];
  isDropdownOpen: boolean;
};

const DropdownContent = ({
  children,
  isDropdownOpen,
}: DropdownContentProps) => {
  return (
    <div className={`dropdown-content ${isDropdownOpen ? "show-content" : ""}`}>
      {children}
    </div>
  );
};

export default DropdownContent;
