import { Reducer, AnyAction } from "redux";
import {
  API_LOGIN_REQUEST,
  API_LOGIN_SUCCESS,
  API_LOGIN_FAIL,
  LoginState,
} from "./types";

const initialLoginState: LoginState = {
  isLoading: false,
  username: "",
  token: "",
  error: "",
};

export const loginReducer: Reducer<LoginState> = (
  state = initialLoginState,
  action: AnyAction
) => {
  switch (action.type) {
    case API_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case API_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: action.payload.username,
        token: action.payload.token,
      };
    case API_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
