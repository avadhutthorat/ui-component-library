import {
  DECREMENT,
  INCREMENT,
  type DecrementAction,
  type IncrementAction,
} from "../types/counterTypes";

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });
