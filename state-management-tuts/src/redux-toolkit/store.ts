import { configureStore } from "@reduxjs/toolkit";
import CounterToolkitReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counterToolkit: CounterToolkitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
