import {
  ADD_COUNT,
  DEC_COUNT,
  DIVIDE_COUNT,
  INC_COUNT,
  MULTIPLY_COUNT,
  SUB_COUNT,
} from "./actionTypes";

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

export const addCount = (value) => {
  return {
    type: ADD_COUNT,
    payload: value,
  };
};
export const subCount = (value) => {
  return {
    type: SUB_COUNT,
    payload: value,
  };
};

export const multiplyCount = (value) => {
  return {
    type: MULTIPLY_COUNT,
    payload: value,
  };
};

export const divideCount = (value) => {
  return {
    type: DIVIDE_COUNT,
    payload: value,
  };
};
