import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../redux-toolkit/store";

import {
  increment,
  decrement,
  incrementByAmount,
} from "../../redux-toolkit/counterSlice";

function ReduxToolkitCounter() {
  const counterStore = useSelector((state: RootState) => state.counterToolkit);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="card"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <button onClick={() => dispatch(increment())}>+</button>
        <span>count is {counterStore.count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </>
  );
}

export default ReduxToolkitCounter;
