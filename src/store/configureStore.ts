import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createRootReducer, rootSaga } from "./";
import { LoginState } from "./login/types";
import { UserState } from "./user/types";
import { PostState } from "./post/types";
export interface ApplicationState {
  login: LoginState;
  user: UserState;
  post: PostState;
}

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
export default function configureStore(initialState?: ApplicationState) {
  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
