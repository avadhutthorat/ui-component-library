import { forwardRef } from "react";
import "./styles.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type DropdownButtonProps = {
  isDropdownOpen: boolean;
  onToggle: () => void;
  selectedOption?: string;
  placeholder: string;
};

const DropdownButton = forwardRef<HTMLDivElement, DropdownButtonProps>(
  (props, ref) => {
    const {
      onToggle,
      isDropdownOpen,
      selectedOption = undefined,
      placeholder,
    } = props;
    return (
      <div ref={ref} className="dropdown-btn" onClick={onToggle}>
        {selectedOption || placeholder}
        <span>
          {isDropdownOpen ? (
            <FaAngleUp className="dropdown-icon" />
          ) : (
            <FaAngleDown className="dropdown-icon" />
          )}
        </span>
      </div>
    );
  }
);

export default DropdownButton;
