import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type TooltipReactPortalProps = {
  tooltipText: string;
  children: ReactNode;
};

const TooltipReactPortal = ({
  tooltipText,
  children,
}: TooltipReactPortalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cords, setCords] = useState({ top: 0, left: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log(rect);
      setCords({
        top: rect.y - 40,
        left: rect.x - rect.width / 4,
      });
    }
  }, [isVisible]);

  return (
    <>
      <span
        ref={ref}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        style={{
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        {children}
      </span>
      {isVisible &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: cords.top,
              left: cords.left,
              background: "#333",
              color: "#fff",
              padding: "6px 10px",
              borderRadius: "6px",
              fontSize: "14px",
              whiteSpace: "nowrap",
              zIndex: 9999,
            }}
          >
            {tooltipText}
          </div>,
          document.body
        )}
    </>
  );
};

export default TooltipReactPortal;
