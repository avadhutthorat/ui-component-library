import { useEffect, useState } from "react";
import Cell from "./cell";
import { calculateGhostPosition } from "./utils";

const CellContainer = ({ size, setResult }) => {
  const [ghostPosition, setGhostPosition] = useState(
    calculateGhostPosition(size)
  );

  console.log(ghostPosition);

  useEffect(() => {
    const timerId = setInterval(() => {
      setGhostPosition(calculateGhostPosition(size));
    }, 800);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div>
      {Array.from({ length: size }).map((_, row) => (
        <div className="col-container" key={row}>
          {Array.from({ length: size }).map((_, col) => (
            <div className="cell-container" key={(row, col)}>
              <Cell
                row={row}
                col={col}
                ghostPosition={ghostPosition}
                ghostKilledHandler={() => {
                  setResult((prev) => prev + 10);
                  setTimeout(() => {
                    setGhostPosition(calculateGhostPosition(size));
                  }, 100);
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CellContainer;
