import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

// action url
const url = `http://localhost:3000/auth/1`;

/**
 * * ****************************** INTERFACES *****************************
 */
export interface UserDetails {
  user_id: string;
  username: string;
  first_name: string;
  last_name: string;
}

export interface Rule {
  title: string;
  access_key: string;
  access: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
}

export interface Auth {
  isAuthenticated: boolean;
  id?: any;
  token: string;
  user: UserDetails | null;
  rules: any[];
}

export interface FerchLoginDetails {
  type: ActionTypes.LOGIN_DETAILS;
  payload: Auth;
}

/**
 * * ****************************** ACTIONS *****************************
 */
export const fetchAuth = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Auth>(url);

    dispatch<FerchLoginDetails>({
      type: ActionTypes.LOGIN_DETAILS,
      payload: response.data,
    });
  };
};
