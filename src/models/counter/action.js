// code in models/counter/action
export const INCREMENT = "INCREMENT";

export const DECREMENT = "DECREMENT";

export const increase = number => {
  return { type: INCREMENT, payload: number };
};

export const decrease = number => {
  return {  type: DECREMENT, payload: number };
};