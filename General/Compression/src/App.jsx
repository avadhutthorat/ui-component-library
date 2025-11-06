import React from "react";

// Demonstrate code-splitting so analyzer shows multiple chunks
export default function App() {
  const handleClick = async () => {
    const { heavyWork } = await import("./heavy"); // dynamic import -> separate chunk
    alert("Heavy result: " + heavyWork());
  };

  return (
    <div style={{ fontFamily: "system-ui", padding: 16 }}>
      <h1>Webpack Bundle Analyzer Demo</h1>
      <p>Click to lazy-load a heavy chunk and run it.</p>
      <button onClick={handleClick}>Load heavy code</button>
    </div>
  );
}
