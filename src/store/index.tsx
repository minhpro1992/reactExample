import { combineReducers } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { loginReducer } from './login/reducer'
import loginSaga from './login/sagas'
import { postReducer } from './post/reducer'
import postSaga from './post/sagas'
import { userReducer } from './user/reducer'
import userSaga from './user/sagas'


export const createRootReducer = () => 
    combineReducers({
        login: loginReducer,
        post: postReducer,
        user: userReducer
    })

export function* rootsaga() {
    yield all ([
        fork(loginSaga),
        fork(postSaga),
        fork(userSaga)
    ])
}