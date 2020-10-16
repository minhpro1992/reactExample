import { AnyAction } from 'redux'
import {
    fork,
    put,

    takeEvery
} from 'redux-saga/effects'
import { uuid } from 'uuidv4'
import { loginSucess } from './action'
import { API_LOGIN_REQUEST } from './types'

function* handleLogin({ payload }: AnyAction) {
    yield put(loginSucess({
        username: payload?.username,
        token: uuid()
    }))
}

function* watchLoginRequest() {
    yield takeEvery(API_LOGIN_REQUEST, handleLogin)
}

function* loginSaga() {
    yield fork(watchLoginRequest)
}

export default loginSaga 