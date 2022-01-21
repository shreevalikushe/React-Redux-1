import { createStore } from "redux";
import { reducer } from "./reducer";
export const state = { count: 0 };

export const store = createStore(reducer, state);

console.log(store.getState());
