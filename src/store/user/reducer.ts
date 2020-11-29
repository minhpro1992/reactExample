import { GET_DETAIL_USER_FAIL, GET_DETAIL_USER_REQUEST, GET_DETAIL_USER_SUCCESS, UserReducerProps } from './types'
export const initalUserState: UserReducerProps = {
    user: {},
    isLoading: false,
    error: false
}

export const userReducer = (state = initalUserState, action: {[key: string]: string}) => {
    switch (action.type) {
        case GET_DETAIL_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_DETAIL_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action?.payload
            }
        case GET_DETAIL_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}