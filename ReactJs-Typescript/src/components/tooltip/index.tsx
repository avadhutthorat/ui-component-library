import { createPortal } from "react-dom";
import "./style.css";
import type { ReactNode } from "react";

type TooltipPropTypes = {
  position?: "top" | "bottom" | "left" | "right";
  content: string;
  children: ReactNode;
};
const Tooltip = ({
  position = "left",
  content = "This is tooltip",
  children,
}: TooltipPropTypes) => {
  return (
    <div className={`tooltip_container `}>
      {children}
      <span className={`tooltip_text ${position}`}>{content}</span>
    </div>
  );
};

export default Tooltip;
