import { Todo, Action, ActionTypes } from "../actions";

// default state
const defaultState: Todo[] = [];

export const todoReducer = (state: Todo[] = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload];
    case ActionTypes.DONE_TODO:
      return state.map((itm) =>
        itm.id === action.payload ? { ...itm, done: true } : itm
      );
    case ActionTypes.DELETE_TODO:
      return state.filter((itm) => itm.id !== action.payload);
    default:
      return state;
  }
};
