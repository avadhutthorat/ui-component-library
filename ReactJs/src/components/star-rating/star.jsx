import { useState } from "react";
import "./style.css";

const Star = ({ count = 10 }) => {
  const [currentHoveredIndex, setCurrentHoveredIndex] = useState(0);
  const [defaultSelectedIndex, setDefaultSelectedIndex] = useState(0);

  return (
    <div
      className="star__container--icon"
      onPointerOver={(e) => {
        console.log(e.target.id);
        setCurrentHoveredIndex(e.target.id);
      }}
      onPointerLeave={() => {
        setCurrentHoveredIndex(defaultSelectedIndex);
      }}
      onClick={(e) => {
        setDefaultSelectedIndex(e.target.id);
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <>
          <span
            id={index + 1}
            key={index}
            style={{
              color: index < currentHoveredIndex ? "green" : "",
            }}
            className="star__icon"
            // onPointerOver={() => setCurrentHoveredIndex(index + 1)}
            // onPointerLeave={() => setCurrentHoveredIndex(defaultSelectedIndex)}
            // onClick={() => {
            //   setDefaultSelectedIndex(index + 1);
            // }}
          >
            &#x2605;
          </span>
        </>
      ))}
    </div>
  );
};

export default Star;
