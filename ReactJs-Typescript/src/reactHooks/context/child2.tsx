import { useContext } from "react";
import { UserContext } from "./contextProvider";

export default function Child2() {
  const data = useContext(UserContext);
  console.log("Child 2 -", data);
  return (
    <div
      style={{
        backgroundColor: data.theme,
      }}
    >
      <h2>Child 2</h2>
      <input
        type="text"
        value={data.child2Input}
        onChange={(e) => data.setChild2Input(e.target.value)}
      />
      <hr />
    </div>
  );
}
