import { action } from 'typesafe-actions'
import * as loginTypes from './types'

export const loginRequest = ({ username, pass } : { username: string, pass: string }) =>
action(loginTypes.API_LOGIN_REQUEST, { username, pass })

export const loginSucess = ({ username, token } : { username: string, token: string }) => 
    action(loginTypes.API_LOGIN_SUCESS, { username, token });

export const loginFail = (error: string) => 
    action(loginTypes.API_LOGIN_FAIL, error)