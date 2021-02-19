import postSaga from "../sagas";
import {
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  PostItemType,
} from "../types";
import { expectSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { throwError } from "redux-saga-test-plan/providers";
import { callApi } from "../../callApi";

const postStoreState = {
  posts: [],
  isLoading: false,
  error: {},
};
const postId = 1;
const expectedError = new Error("error");
describe("post saga", () => {
  it("handle get post success", async () => {
    const response: PostItemType[] = [
      {
        id: 1,
        userId: 1,
        title: "test",
        body: "test 12345",
      },
    ];
    const result = await expectSaga(postSaga)
      .withState(postStoreState)
      .provide({
        call() {
          return response;
        },
      })
      .put.actionType(GET_POST_SUCCESS)
      .dispatch({ type: GET_POST_REQUEST })
      .silentRun();
    expect(result.toJSON()).toMatchSnapshot();
  });
  it("handle get post fail", () => {
    try {
      return expectSaga(postSaga)
        .provide([[matchers.call.fn(callApi), throwError(expectedError)]])
        .put.actionType(GET_POST_FAIL)
        .dispatch({
          type: GET_POST_REQUEST,
        })
        .silentRun();
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
  });
  it("delete post successfully", async () => {
    const result = await expectSaga(postSaga)
      .withState(postStoreState)
      .provide({
        call() {
          return postId;
        },
      })
      .put.actionType(DELETE_POST_SUCCESS)
      .dispatch({ type: DELETE_POST_REQUEST, payload: postId })
      .silentRun();
    expect(result.toJSON()).toMatchSnapshot();
  });
  it("delete post fail", () => {
    try {
      return expectSaga(postSaga)
        .provide([[matchers.call.fn(callApi), throwError(expectedError)]])
        .put.actionType(DELETE_POST_FAIL)
        .dispatch({ type: DELETE_POST_REQUEST, payload: postId })
        .silentRun();
    } catch (error) {
      expect(error).toEqual(expectedError);
    }
  });
});
