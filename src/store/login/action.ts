import { action } from "typesafe-actions";
import * as loginTypes from "./types";

export const loginRequest = ({ username, pass }: loginTypes.LoginParamType) =>
  action(loginTypes.API_LOGIN_REQUEST, { username, pass });

export const loginSuccess = ({ username, token }: loginTypes.LoginParamType) =>
  action(loginTypes.API_LOGIN_SUCCESS, { username, token });

export const loginFail = (error: Record<string, unknown>) =>
  action(loginTypes.API_LOGIN_FAIL, error);
