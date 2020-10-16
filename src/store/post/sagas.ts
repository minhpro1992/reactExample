import { AnyAction } from 'redux'
import {
    call, fork,
    put,

    takeEvery
} from 'redux-saga/effects'
import { callApi } from '../callApi'
import { getPostFail, getPostSuccess } from '../post/action'
import { GET_POST_REQUEST } from './types'

function* handlePost({ payload }: AnyAction) {
    const response = yield call(
        callApi,
        'get',
        'https://jsonplaceholder.typicode.com',
        `/posts`
      )
    if(response.error) {
        yield put(getPostFail(response.error))
    } else {
        yield put(getPostSuccess(response))
    }
}

function* watchPostRequest() {
    yield takeEvery(GET_POST_REQUEST, handlePost)
}

function* postSaga() {
    yield fork(watchPostRequest)
}

export default postSaga