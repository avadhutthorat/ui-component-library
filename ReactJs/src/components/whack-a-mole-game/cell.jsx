import { useState } from "react";

const Cell = ({ row, col, ghostPosition, ghostKilledHandler }) => {
  const [showHammer, setShowHammer] = useState(false);
  const showGhost = row == ghostPosition[0] && col == ghostPosition[1];
  const showHammerHandler = () => {
    setShowHammer(true);

    // Check if hammer and ghost in the same cell
    if (showGhost) {
      ghostKilledHandler();
    }
    console.log("Hammer on -", { row, col, showGhost });

    setTimeout(() => {
      setShowHammer(false);
    }, 200);
  };
  return (
    <div className="cell ghost" onClick={showHammerHandler}>
      {showGhost ? "👻" : null}
      {showHammer ? <span className="hammer"> 🔨</span> : null}
      {/* {showHammer && !showGhost ? <span className="hammer"> </span> : null} */}
    </div>
  );
};

export default Cell;
