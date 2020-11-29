import { AnyAction } from "redux";
import { all, call, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { callApi } from "../callApi";
import { getDetailUserFail, getDetailUserSuccess } from "./action";
import { GET_DETAIL_USER_REQUEST } from "./types";
const API_SERVER_URL =  'https://jsonplaceholder.typicode.com'

function* handleGetDetailUser({ payload: userId}: AnyAction) {
    try {
        console.log('response: ', userId)
        const response = yield call(
            callApi,
            'get',
            API_SERVER_URL,
            `/users/${userId}`
        )
        if(response?.error) {
            yield put(getDetailUserFail(response.error))
        } else {
            yield put(getDetailUserSuccess(response))
        }
    } catch (error) {
        yield put(getDetailUserFail(error))
    }
}

function* watchGetUserDetailRequest() {
    yield takeEvery(GET_DETAIL_USER_REQUEST, handleGetDetailUser)
}

function* userSaga() {
    yield fork(watchGetUserDetailRequest)
}

export default userSaga