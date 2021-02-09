export const GET_POST_REQUEST = "GET POST REQUEST";
export const GET_POST_SUCCESS = "GET POST SUCCESS";
export const GET_POST_FAIL = "GET POST FAIL";
export const DELETE_POST_REQUEST = "DELETE POST REQUEST";
export const DELETE_POST_SUCCESS = "DELETE POST SUCCESS";
export const DELETE_POST_FAIL = "DELETE POST FAIL";
export type PostItemType = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type PostState = {
  posts: PostItemType[];
  isLoading: boolean;
  error: boolean;
};

export type PostParamType = {
  limit: number;
  offset: number;
};
