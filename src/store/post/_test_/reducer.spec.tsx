import { AnyAction } from "redux";
import { postReducer } from "../reducer";
import {
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  PostItemType,
  PostState,
} from "../types";

const initialPostState: PostState = {
  posts: [],
  isLoading: false,
  error: {},
};
describe("post reducer", () => {
  it("should return initial state", () => {
    const emptyAction: AnyAction = { type: "" };
    expect(postReducer(undefined, emptyAction)).toEqual(initialPostState);
  });
  it("send post request", () => {
    expect(
      postReducer(initialPostState, {
        type: GET_POST_REQUEST,
        payload: { isLoading: true },
      })
    ).toEqual({
      ...initialPostState,
      isLoading: true,
    });
  });
  it("get post successfully", () => {
    const response: PostItemType[] = [
      {
        id: 1,
        userId: 1,
        title: "test",
        body: "test 12345",
      },
    ];
    expect(
      postReducer(initialPostState, {
        type: GET_POST_SUCCESS,
        payload: response,
      })
    ).toEqual({
      ...initialPostState,
      posts: response,
    });
  });
  it("get post fail", () => {
    const error = {
      message: "Has error unknown",
    };
    expect(
      postReducer(initialPostState, {
        type: GET_POST_FAIL,
        payload: { error },
      })
    ).toEqual({
      ...initialPostState,
      error: error,
    });
  });
});
