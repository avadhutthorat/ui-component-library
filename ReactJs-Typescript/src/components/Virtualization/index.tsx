import { useState, type UIEventHandler } from "react";
import "./style.css";
const DATA = Array.from({ length: 1000 }).map((_, i) => i + 1);
const Virtualization = ({
  items = DATA,
  itemHeight = 35,
  parentHeight = 600,
  parentWidth = 500,
}) => {
  const windowItemsCount = Math.floor(parentHeight / itemHeight) + 2;
  const [indices, setIndices] = useState<[number, number]>([
    0,
    windowItemsCount,
  ]);

  const visibleList: number[] = items.slice(indices[0], indices[1] + 1);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    console.log(scrollTop);
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = newStartIndex + windowItemsCount;
    setIndices([newStartIndex, newEndIndex]);
  };

  console.log({
    indices,
  });

  return (
    <div
      className="virtual_container"
      style={{
        height: `${parentHeight}px`,
        width: `${parentWidth}px`,
        border: "1px solid grey",
        overflow: "auto",
      }}
      onScroll={scrollHandler}
    >
      <div
        style={{
          height: items.length * itemHeight,
        }}
      >
        {visibleList?.map((item) => {
          const itemName = `Item ${item}`;
          return (
            <div
              style={{
                height: `${itemHeight}px`,
                backgroundColor: "burlywood",
                borderTop: "5px solid black",
                // position: "relative",
                // top: indices[0] * itemHeight,
                transform: `translateY(${indices[0] * itemHeight}px)`,
                // transition: "transform 0.5s ease-out",
                willChange: "transform",
              }}
            >
              {itemName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Virtualization;
