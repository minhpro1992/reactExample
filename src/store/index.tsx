import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'

import { loginReducer } from './login/reducer'
import loginSaga from './login/sagas'

export const createRootReducer = () => 
    combineReducers({
        login: loginReducer
    })

export function* rootsaga() {
    yield fork(loginSaga)
}