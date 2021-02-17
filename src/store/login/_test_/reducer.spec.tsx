import { AnyAction } from "redux";
import { loginReducer } from "../reducer";
import { API_LOGIN_FAIL, API_LOGIN_SUCCESS, LoginErrorType, LoginParamType, LoginState } from "../types";

const initialLoginState: LoginState = {
    isLoading: false,
    username: "",
    token: "",
    error: "",
  };

  const loginSuccessState: LoginParamType = {
    username: '1',
    token: '1'
  }

  const loginFailState: LoginErrorType = {
    message: 'Username or pass is incorrect'
  }

  describe('Login reducer', () => {
      const emptyAction:  AnyAction = { type: ''}
      it('should return initail state', () => {
          expect(loginReducer(undefined, emptyAction)).toEqual(initialLoginState)
      })
      it('should create action when user login successfully', () => {
          expect(loginReducer(initialLoginState, { type: API_LOGIN_SUCCESS, payload: loginSuccessState})).toEqual({
            ...initialLoginState,
            username: loginSuccessState.username,
            token: loginSuccessState.token
          })
      })
      it('should create action when user login failed', () => {
          expect(loginReducer(initialLoginState, { type: API_LOGIN_FAIL, payload: loginFailState})).toEqual({
              ...initialLoginState,
              error: loginFailState
          })
      })
  })