import postSaga from "../sagas";
import {
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  PostItemType,
  PostState,
} from "../types";
import { expectSaga } from "redux-saga-test-plan";

const postStoreState = {
  posts: [],
  isLoading: false,
  error: {},
};
describe("post saga", () => {
  it("handle get post success", () => {
    const response: PostItemType[] = [
      {
        id: 1,
        userId: 1,
        title: "test",
        body: "test 12345",
      },
    ];
    return expectSaga(postSaga)
      .withState(postStoreState)
      .provide({
        call() {
          return response;
        },
      })
      .put.actionType(GET_POST_SUCCESS)
      .dispatch({ type: GET_POST_REQUEST })
      .silentRun();
  });
  it.skip("handle get post fail", () => {
    return expectSaga(postSaga)
      .put.actionType(GET_POST_FAIL)
      .withState(postStoreState)
      .provide({
        call() {
          return new Error("Has error unknown ");
        },
      })
      .dispatch({ type: GET_POST_REQUEST })
      .silentRun();
  });
});
