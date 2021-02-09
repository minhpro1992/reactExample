export const API_LOGIN_REQUEST = "API LOGIN REQUEST";
export const API_LOGIN_SUCCESS = "API LOGIN SUCCESS";
export const API_LOGIN_FAIL = "API LOGIN FAIL";

export type LoginState = {
  isLoading: boolean;
  username: string;
  token: string;
  error: string;
};

export type ActionType = {
  type: string;
  payload: Record<string, unknown>;
};

export type LoginParamType = {
  username: string;
  pass?: string;
  token?: string;
};
