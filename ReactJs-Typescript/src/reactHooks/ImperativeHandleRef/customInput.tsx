import { useImperativeHandle, useRef } from "react";

export default function CustomInput({
  ref,
}: {
  ref: HTMLInputElement | undefined | null;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef?.current?.focus();
    },
    clear: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
    changeTimestamp: () => {
      if (inputRef.current) inputRef.current.value = Date.now().toString();
    },
  }));
  return (
    <div>
      <input ref={inputRef} className="input" type="text" name="input" />
    </div>
  );
}
