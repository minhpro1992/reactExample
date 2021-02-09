import { action } from "typesafe-actions";
import * as userTypes from "./types";
import { UserType } from "./types";

export const getDetailUserRequest = (userId: number) =>
  action(userTypes.GET_DETAIL_USER_REQUEST, userId);

export const getDetailUserSuccess = (data: UserType) =>
  action(userTypes.GET_DETAIL_USER_SUCCESS, data);

export const getDetailUserFail = (error: Record<string, unknown>) =>
  action(userTypes.GET_DETAIL_USER_FAIL, error);
