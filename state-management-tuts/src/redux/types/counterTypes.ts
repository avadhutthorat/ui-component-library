export const INCREMENT: string = "INCREMENT";
export const DECREMENT: string = "DECREMENT";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type AppActions = IncrementAction | DecrementAction;
