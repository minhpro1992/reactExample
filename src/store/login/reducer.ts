import { stat } from 'fs'
import { API_LOGIN_REQUEST, API_LOGIN_SUCESS, API_LOGIN_FAIL } from './types'

const initialLoginState = {
    isLoading: false,
    username: '',
    token: '',
    error: '',
}

export const loginReducer = (state = initialLoginState, action: any) => {
    switch (action?.type) {
        case API_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case API_LOGIN_SUCESS:
            return {
                ...state,
                isLoading: false,
                username: action.payload.username,
                token: action.payload.token,
            }
        case API_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}