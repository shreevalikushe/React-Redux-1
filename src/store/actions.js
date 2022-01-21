import { DEC_COUNT, INC_COUNT } from "./actionTypes";

export const incCount = (value) => {
  return {
    type: INC_COUNT,
    payload: value,
  };
};

export const decCount = (value) => {
  return {
    type: DEC_COUNT,
    payload: value,
  };
};
