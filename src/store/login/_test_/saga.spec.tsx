import loginSaga from "../sagas"
import { expectSaga } from 'redux-saga-test-plan'
import { API_LOGIN_REQUEST, API_LOGIN_SUCCESS } from "../types"
import { call } from "redux-saga/effects"
const storeState = {
    isLoading: false,
    username: "",
    token: "",
    error: "",
}

it('handle login success', () => {
    const response = {
        username: '1',
        token: '1',
    }
    return expectSaga(loginSaga)
    .withState(storeState)
    .provide({
        call() {
            return response
        }
    })
    .put.actionType(API_LOGIN_SUCCESS)
    .dispatch({ type: API_LOGIN_REQUEST })
    .silentRun()

})