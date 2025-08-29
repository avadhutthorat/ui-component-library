import { useState } from "react";
import CellContainer from "./cell-container";
import "./style.css";

const WhackMole = () => {
  const [result, setResult] = useState(0);
  return (
    <div>
      <h1>Result : {result} </h1>
      <CellContainer size={3} setResult={setResult} />
    </div>
  );
};

export default WhackMole;
