import { useReducer } from "react";

type initialStateType = {
  count: number;
};
const initialState: initialStateType = {
  count: 0,
};

type actionTypes =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "INCREMENT_BY_AMOUNT"; payload: number };

const reducer = (
  state: initialStateType = initialState,
  action: actionTypes
) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "INCREMENT_BY_AMOUNT":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

function CounterUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
        <span>count is {state.count}</span>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        <button
          onClick={() => dispatch({ type: "INCREMENT_BY_AMOUNT", payload: 5 })}
        >
          +5
        </button>
      </div>
    </>
  );
}

export default CounterUseReducer;
