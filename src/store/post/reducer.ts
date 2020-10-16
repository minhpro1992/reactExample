import {
    GET_POST_FAIL,
    GET_POST_REQUEST,
    GET_POST_SUCCESS
} from './types'

const initialPostState = {
    posts: [],
    isLoading: false,
    error: false
}

export const postReducer = (state = initialPostState, action: any) => {
    switch (action.type) {
        case GET_POST_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts: action?.payload
            }
        case GET_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action?.payload?.error
            }
        default:
            return state
    }
}