import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import {
  decrementCounter,
  incrementCounter,
} from "../../redux/actions/counterActions";

function ReduxCounter() {
  const counterStore = useSelector((state: RootState) => state.counter);
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
        <button onClick={() => dispatch(incrementCounter())}>+</button>
        <span>count is {counterStore.count}</span>
        <button onClick={() => dispatch(decrementCounter())}>-</button>
      </div>
    </>
  );
}

export default ReduxCounter;
