import { useEffect, useRef } from "react";
import type { treeDataType } from "./data";
import { STATUS } from "./constants";

type CheckBoxTypes = {
  data: treeDataType;
  clickHandler: () => void;
};

export default function CheckBox({ data, clickHandler }: CheckBoxTypes) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (checkboxRef?.current) {
      if (data.status === STATUS.INDETERMINATE) {
        checkboxRef.current.indeterminate = true;
      } else {
        checkboxRef.current.indeterminate = false;
      }
    }
  });

  if (data.status)
    return (
      <span>
        <input
          ref={checkboxRef}
          type="checkbox"
          id={data.label}
          name="label"
          style={{
            marginRight: "5px",
            cursor: "pointer",
          }}
          checked={data.status === "checked"}
          onChange={clickHandler}
        />
        <label
          htmlFor={data.label}
          style={{
            cursor: "pointer",
          }}
        >
          {data.label}
        </label>
      </span>
    );
}
