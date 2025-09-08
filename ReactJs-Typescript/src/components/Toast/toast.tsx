import { createPortal } from "react-dom";
import type { ToastAppType } from "./types";

const Toast = ({ toasts, placement, message, removeToast }: ToastAppType) => {
  const renderToast = (
    <div className={`toast-container ${placement}`}>
      {toasts?.map((toast) => (
        <div
          key={toast.id}
          className={`toast ${toast.type} ${placement}-animation`}
        >
          {message}
          <span className="close-icon" onClick={() => removeToast(toast.id)}>
            X
          </span>
        </div>
      ))}
    </div>
  );

  return createPortal(renderToast, document.body);
};

export default Toast;
