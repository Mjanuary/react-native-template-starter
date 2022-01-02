import { Auth, Action, ActionTypes } from "../actions";

// default state
const defaultState = {
  isAuthenticated: false,
  user: null,
  rules: [],
  token: "",
};

export const authReducer = (state: Auth = defaultState, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
