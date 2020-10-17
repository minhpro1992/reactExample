import _ from 'lodash'
import {
    DELETE_POST_FAIL,
    DELETE_POST_SUCCESS,
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
        case DELETE_POST_SUCCESS:
            const newPosts = _.filter([...state.posts], (post: any) => {
                return post?.id !== action.payload
            })
            return {
                ...state,
                posts: newPosts
            }
        case GET_POST_FAIL:
        case DELETE_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action?.payload?.error
            }
        default:
            return state
    }
}