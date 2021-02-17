import { loginFail, loginRequest, loginSuccess } from "../action"
import loginSaga from "../sagas"
import { API_LOGIN_FAIL, API_LOGIN_REQUEST, API_LOGIN_SUCCESS, LoginParamType } from "../types"

describe('login action ', () => {
    it('Send login request', () => {
        const payload: LoginParamType = {
            username: '1',
            pass: '1'
        }
        const expectedAction = {
            type: API_LOGIN_REQUEST,
            payload: payload
        }
        expect(loginRequest(payload)).toEqual(expectedAction)
    })
    it('login success', () => {
        const payload: LoginParamType = {
            username: '1',
            token: '1'
        }
        const expectedAction = {
            type: API_LOGIN_SUCCESS,
            payload: payload
        }
        expect(loginSuccess(payload)).toEqual(expectedAction)
    })
    it('login failed', () => {
        const payload = {
            message: 'Username or pass is incorrect'
        }
        const expectedAction = {
            type: API_LOGIN_FAIL,
            payload: payload
        }
        expect(loginFail(payload)).toEqual(expectedAction)
    })
})