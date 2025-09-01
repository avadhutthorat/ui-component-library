import { useState } from "react";
import "./style.css";

const listData = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
const CONTAINER_HEIGHT = 700;
const CHILD_HEIGHT = 60;
const CHILD_COUNT_IN_CONTAINER =
  Math.floor(CONTAINER_HEIGHT / CHILD_HEIGHT) + 3;

const VirtualizedList = () => {
  const [showIndices, setShowIndices] = useState([0, CHILD_COUNT_IN_CONTAINER]);
  const currentListItems = listData.slice(showIndices[0], showIndices[1]);

  const scrollHandler = (e) => {
    const { scrollTop } = e.target;
    const diff = Math.floor(scrollTop / CHILD_HEIGHT);
    const start = diff;
    const end = CHILD_COUNT_IN_CONTAINER + diff;
    setShowIndices([start, end]);
  };

  return (
    <div
      className="container"
      style={{
        height: `${CONTAINER_HEIGHT}px`,
      }}
      onScroll={scrollHandler}
    >
      <div
        className="inner-container"
        style={{
          height: `${Math.floor(listData.length * CHILD_HEIGHT + 9)}px`,
        }}
      >
        {currentListItems.map((item, idx) => (
          <div
            className="child-item"
            style={{
              height: `${CHILD_HEIGHT}px`,
              transform: `translateY(${
                (showIndices[0] + idx) * CHILD_HEIGHT + idx * 9
              }px)`,
              left: "0px",
            }}
            key={showIndices[0] + idx}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualizedList;
