import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer";
import { combineReducers } from "redux";

let reducers = combineReducers({
  todoReducer: todoReducer,
});
export const store = configureStore({ reducer: reducers });
