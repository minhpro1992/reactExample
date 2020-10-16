import { action } from 'typesafe-actions'
import * as postTypes from './types'

export const getPostRequest = ({ limit, offset }: { limit: number, offset: number }) =>
    action(postTypes.GET_POST_REQUEST, { limit, offset })

export const getPostSuccess = (data : any) =>
    action(postTypes.GET_POST_SUCCESS, data)

export const getPostFail = (error : any) =>
    action(postTypes.GET_POST_FAIL, error)