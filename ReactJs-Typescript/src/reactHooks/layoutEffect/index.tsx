import { useEffect, useLayoutEffect, useState } from "react";

export default function LayoutEffect() {
  const [width, setWidth] = useState(10);
  const [isBoxVisible, setIsBoxVisible] = useState(false);
  useEffect(() => {
    console.log("RUN use effect");
  }, [isBoxVisible]);

  useLayoutEffect(() => {
    console.log("RUN use layout effect");
    setWidth((prev) => prev + 5);
  }, [isBoxVisible]);
  return (
    <>
      <button onClick={() => setIsBoxVisible((prev) => !prev)}>Show Box</button>
      {isBoxVisible && (
        <div
          style={{
            border: "1px solid black",
            margin: "20px",
            width: `${width}px`,
            height: "100px",
          }}
        ></div>
      )}
      <input
        type="text"
        value={width}
        onChange={(e) => setWidth(Number(e.target.value))}
      />
    </>
  );
}
