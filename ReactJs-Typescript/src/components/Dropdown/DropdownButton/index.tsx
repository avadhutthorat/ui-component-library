import "./styles.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type DropdownButtonProps = {
  isDropdownOpen: boolean;
  onToggle: () => void;
};

const DropdownButton = ({ isDropdownOpen, onToggle }: DropdownButtonProps) => {
  return (
    <div className="dropdown-btn" onClick={onToggle}>
      Dropdown btn
      <span>
        {isDropdownOpen ? (
          <FaAngleUp className="dropdown-icon" />
        ) : (
          <FaAngleDown className="dropdown-icon" />
        )}
      </span>
    </div>
  );
};

export default DropdownButton;
