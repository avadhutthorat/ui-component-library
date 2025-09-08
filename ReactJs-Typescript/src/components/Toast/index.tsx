import { useEffect, useRef, useState } from "react";
import Toast from "./toast";
import "./style.css";
import type {
  timeoutRefType,
  ToastAppTypes,
  ToastMessage,
  ToastType,
} from "./types";

const ToastApp = ({
  type = "success",
  placement = "left",
  message = "This is message",
}: ToastAppTypes) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const timeoutRefs = useRef<timeoutRefType>({});

  useEffect(() => {
    setToastType(type);
  }, [type]);

  const setToastType = (type: ToastType) => {
    const id = Date.now();
    const timeoutId = setTimeout(() => {
      removeToastHandler(id);
    }, 4000);
    setToasts((prev) => [...prev, { type, id }]);
    timeoutRefs.current[id] = timeoutId;
  };

  const removeToastHandler = (id: number) => {
    setToasts((prev) => {
      return prev.filter((toast) => toast.id !== id);
    });
    timeoutRefs.current[id] && clearTimeout(timeoutRefs.current[id]);
  };

  return (
    <div>
      <div>
        <button onClick={() => setToastType("success")}>Success Toast</button>
        <button onClick={() => setToastType("info")}>Info Toast</button>
        <button onClick={() => setToastType("warning")}>Warning Toast</button>
        <button onClick={() => setToastType("error")}>Error Toast</button>
      </div>
      <Toast
        placement={placement}
        toasts={toasts}
        message={message}
        removeToast={removeToastHandler}
      />
    </div>
  );
};

export default ToastApp;
