import { useContext } from "react";
import { UserContext } from "./contextProvider";

export default function Child1() {
  const contextValue = useContext(UserContext);
  console.log("Child 1 -", contextValue);
  return (
    <div
      style={{
        backgroundColor: contextValue.theme,
      }}
    >
      <h2>Child 1</h2>
      <input
        type="text"
        value={contextValue.child1Input}
        onChange={(e) => contextValue.setChild1Input(e.target.value)}
      />
      <hr />
    </div>
  );
}
