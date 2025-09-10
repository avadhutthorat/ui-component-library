import { useState, useRef } from "react";
import type { KeyboardEvent } from "react";
import "./style.css";

type OtpPropsType = {
  length: number;
};

const Otp = ({ length = 6 }: OtpPropsType) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const otpRef = useRef<(HTMLInputElement | null)[]>([]);

  const keyDownHandler = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const key = e.key;
    const clonedOtp = [...otp];

    if (key == "Backspace") {
      clonedOtp[index] = "";
      setOtp(clonedOtp);

      index > 0 && otpRef.current[index - 1]?.focus();
      return;
    }

    if (key == "ArrowRight" && index + 1 < length) {
      otpRef.current[index + 1]?.focus();
    }

    if (key == "ArrowLeft" && index > 0) {
      otpRef.current[index - 1]?.focus();
    }

    if (isNaN(Number(key))) {
      return;
    }

    clonedOtp[index] = key;
    setOtp(clonedOtp);
    index - 1 < length && otpRef.current[index + 1]?.focus();
  };

  return (
    <div className="container">
      {otp.map((value, i) => {
        return (
          <input
            className="otp"
            id={`index-${i}`}
            name={`index-${i}`}
            value={value}
            type="text"
            onKeyDown={(e) => keyDownHandler(e, i)}
            ref={(currentInput) => {
              otpRef.current[i] = currentInput;
            }}
          ></input>
        );
      })}
    </div>
  );
};

export default Otp;
