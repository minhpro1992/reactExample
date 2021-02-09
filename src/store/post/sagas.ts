import { AnyAction } from "redux";
import {
  call,
  fork,
  put,
  all,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { callApi } from "../callApi";
import {
  deletePostSuccess,
  deletePostFail,
  getPostFail,
  getPostSuccess,
} from "../post/action";
import { GET_POST_REQUEST, DELETE_POST_REQUEST } from "./types";
const API_SERVER_URL = "https://jsonplaceholder.typicode.com";

function* handlePost({ payload }: AnyAction) {
  try {
    const response = yield call(callApi, "get", API_SERVER_URL, `/posts`);
    if (response.error) {
      yield put(getPostFail(response.error));
    } else {
      yield put(getPostSuccess(response));
    }
  } catch (error) {
    yield put(getPostFail(error));
  }
}

function* handleDeletePost({ payload: postId }: AnyAction) {
  try {
    const response = yield call(
      callApi,
      "delete",
      API_SERVER_URL,
      `/posts/${postId}`
    );
    if (response.error) {
      yield put(deletePostFail(response.error));
    } else {
      yield put(deletePostSuccess(postId));
    }
  } catch (error) {
    yield put(deletePostFail(error));
  }
}

function* watchPostRequest() {
  yield takeEvery(GET_POST_REQUEST, handlePost);
}

function* watchDeletePostRequest() {
  yield takeLatest(DELETE_POST_REQUEST, handleDeletePost);
}

function* postSaga() {
  yield all([fork(watchPostRequest), fork(watchDeletePostRequest)]);
}

export default postSaga;
