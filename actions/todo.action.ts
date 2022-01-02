import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

export interface Todo {
  id: string;
  name: string;
  done: boolean;
}

export interface AddTodo {
  type: ActionTypes.ADD_TODO;
  payload: Todo;
}
export interface DeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: string;
}
export interface DoneTodo {
  type: ActionTypes.DONE_TODO;
  payload: string;
}

/**
 * * ****************************** ACTIONS *****************************
 */
export type FT_AddTodo = (todo: Todo) => void;
export const FC_AddTodo = (todo: Todo) => {
  return (dispatch: Dispatch) => {
    dispatch<AddTodo>({
      type: ActionTypes.ADD_TODO,
      payload: todo,
    });
  };
};

export type FT_DeleteTodo = (id: string) => void;
export const FC_DeleteTodo = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch<DeleteTodo>({
      type: ActionTypes.DELETE_TODO,
      payload: id,
    });
  };
};

export type FT_DoneTodo = (id: string) => void;
export const FC_DoneTodo = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch<DoneTodo>({
      type: ActionTypes.DONE_TODO,
      payload: id,
    });
  };
};
