import { watch } from 'fs'
import { AnyAction } from 'redux'
import {
    call,
    fork,
    put,
    select,
    takeLatest,
} from 'redux-saga/effects'
import { uuid } from 'uuidv4'
import { API_LOGIN_REQUEST } from './types'
import { loginSucess, loginFail} from './action'

function* handleLogin({ payload }: AnyAction) {
    yield put(loginSucess({
        username: payload?.username,
        token: uuid()
    }))
}

function* watchLoginRequest() {
    yield takeLatest(API_LOGIN_REQUEST, handleLogin)
}

function* loginSaga() {
    yield fork(watchLoginRequest)
}

export default loginSaga 