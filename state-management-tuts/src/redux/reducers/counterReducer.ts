import { DECREMENT, INCREMENT, type AppActions } from "../types/counterTypes";

interface CounterStateType {
  count: number;
}
const initialState: CounterStateType = {
  count: 0,
};

const counterReducer = (
  state: CounterStateType = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
