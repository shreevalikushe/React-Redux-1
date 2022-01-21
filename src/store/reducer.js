import {
  ADD_COUNT,
  DEC_COUNT,
  DIVIDE_COUNT,
  INC_COUNT,
  MULTIPLY_COUNT,
  SUB_COUNT,
} from "./actionTypes";

// export const state = { count: 0 };
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case INC_COUNT: {
      return {
        ...state,
        count: state.count + payload,
      };
    }
    case DEC_COUNT: {
      return {
        ...state,
        count: state.count - payload,
      };
    }
    case ADD_COUNT: {
      return {
        ...state,
        count: state.count + Number(payload),
      };
    }
    case SUB_COUNT: {
      return {
        ...state,
        count: state.count - Number(payload),
      };
    }
    case MULTIPLY_COUNT: {
      return {
        ...state,
        count: state.count * Number(payload),
      };
    }
    case DIVIDE_COUNT: {
      return {
        ...state,
        count: state.count / Number(payload),
      };
    }
    default: {
      return state;
    }
  }
};
