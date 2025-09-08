export type ToastType = "success" | "error" | "info" | "warning";

export type placement = "top" | "right" | "bottom" | "left";
export type ToastAppTypes = {
  type?: ToastType;
  message?: string;
  placement?: placement;
};

export type ToastMessage = {
  id: number;
  type: ToastType;
};

export type ToastAppType = {
  placement: placement;
  message: string;
  toasts: ToastMessage[];
  removeToast: (id: number) => void;
};

export type timeoutRefType = Record<number, ReturnType<typeof setTimeout>>;
