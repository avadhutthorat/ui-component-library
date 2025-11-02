import { useRef } from "react";
import CustomInput from "./customInput";
import "./style.css";

export default function ImperativeHandleRef({}) {
  const ref = useRef(null);
  return (
    <div>
      <CustomInput ref={ref} />
      <button className="btn" onClick={() => ref.current.focus()}>
        Focus
      </button>
      <button className="btn" onClick={() => ref.current.clear()}>
        Clear Input
      </button>
      <button className="btn" onClick={() => ref.current.changeTimestamp()}>
        Change timestamp placeholder
      </button>
    </div>
  );
}
