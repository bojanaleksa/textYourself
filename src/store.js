import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import { sagas } from "./sagas/index";

import {loadState, saveState} from './localStorage';

let middlewares = [];

middlewares.push(routerMiddleware(browserHistory));

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

let middleware = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const loadedState = loadState();
const store = createStore(reducers, loadedState, middleware);
store.subscribe(() => {
	saveState(store.getState());
});
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

export { store, history };
