import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createRootReducer, rootsaga } from './'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({})
export default function configureStore(initialState: any) {
    const store = createStore(
        createRootReducer(),
        initialState,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )
    sagaMiddleware.run(rootsaga)
    return store
}