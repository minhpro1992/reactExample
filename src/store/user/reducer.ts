import { AnyAction, Reducer } from "redux";
import {
  GET_DETAIL_USER_FAIL,
  GET_DETAIL_USER_REQUEST,
  GET_DETAIL_USER_SUCCESS,
  UserState,
} from "./types";
export const initialUserState: UserState = {
  user: {},
  isLoading: false,
  error: false,
};

export const userReducer: Reducer<UserState> = (
  state = initialUserState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_DETAIL_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DETAIL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action?.payload,
      };
    case GET_DETAIL_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
