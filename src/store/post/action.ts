import { action } from "typesafe-actions";
import * as postTypes from "./types";

export const getPostRequest = ({ limit, offset }: postTypes.PostParamType) =>
  action(postTypes.GET_POST_REQUEST, { limit, offset });

export const getPostSuccess = (data: postTypes.PostItemType[]) =>
  action(postTypes.GET_POST_SUCCESS, data);

export const getPostFail = (error: Record<string, unknown>) =>
  action(postTypes.GET_POST_FAIL, error);

export const deletePostRequest = (postId: number) =>
  action(postTypes.DELETE_POST_REQUEST, postId);
export const deletePostSuccess = (postId: number) =>
  action(postTypes.DELETE_POST_SUCCESS, postId);
export const deletePostFail = (error: Record<string, unknown>) =>
  action(postTypes.DELETE_POST_REQUEST, error);
