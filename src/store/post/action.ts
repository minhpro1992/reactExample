import { action } from 'typesafe-actions'
import * as postTypes from './types'

export const getPostRequest = ({ limit, offset }: { limit: number, offset: number }) =>
    action(postTypes.GET_POST_REQUEST, { limit, offset })

export const getPostSuccess = (data : any) =>
    action(postTypes.GET_POST_SUCCESS, data)

export const getPostFail = (error : any) =>
    action(postTypes.GET_POST_FAIL, error)

export const deletePostRequest = (postId: number) =>
    action(postTypes.DELETE_POST_REQUEST, postId)
export const deletePostSuccess = (postId: number) =>
    action(postTypes.DELETE_POST_SUCCESS, postId)
export const deletePostFail = (error: any) => 
    action(postTypes.DELETE_POST_REQUEST, error)