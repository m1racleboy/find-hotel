import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './rootReducer';
import { rootWatcher } from './sagas/rootWatcher';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ));

sagaMiddleware.run(rootWatcher)
