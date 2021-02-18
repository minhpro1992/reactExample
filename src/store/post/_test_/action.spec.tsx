import { getPostFail, getPostRequest, getPostSuccess } from "../action";
import { GET_POST_FAIL, GET_POST_REQUEST, GET_POST_SUCCESS } from "../types";

describe("post action", () => {
  it("should send post action request", () => {
    const payload = {
      limit: 10,
      offset: 0,
    };
    const expectedAction = {
      type: GET_POST_REQUEST,
      payload: payload,
    };
    expect(getPostRequest(payload)).toEqual(expectedAction);
  });
  it("should get post success", () => {
    const response = [
      {
        id: 1,
        userId: 1,
        title: "test",
        body: "test 12345",
      },
    ];
    const expectedAction = {
      type: GET_POST_SUCCESS,
      payload: response,
    };
    expect(getPostSuccess(response)).toEqual(expectedAction);
  });
  it("action get post fail", () => {
    const response = {
      message: "Has error unknown",
    };
    const expectedAction = {
      type: GET_POST_FAIL,
      payload: response,
    };
    expect(getPostFail(response)).toEqual(expectedAction);
  });
});
