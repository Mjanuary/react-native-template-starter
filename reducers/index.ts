import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { todoReducer } from "./todo.reducer";

import { Auth, Todo } from "../actions";

// define the entire state into the entire sire
export interface StoreState {
  auth: Auth;
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  auth: authReducer,
  todos: todoReducer,
});
