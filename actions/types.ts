import { FerchLoginDetails } from "./auth.action";
import { AddTodo, DeleteTodo, DoneTodo } from "./todo.action";

export enum ActionTypes {
  fetchTodos = "fetchTodos",
  deleteTodo = "deleteTodo",
  LOGIN_DETAILS = "LOGIN_DETAILS",
  //* TODOS
  ADD_TODO = "ADD_TODO",
  DONE_TODO = "DONE_TODO",
  DELETE_TODO = "DELETE_TODO",
}

export type Action = FerchLoginDetails | AddTodo | DeleteTodo | DoneTodo;
