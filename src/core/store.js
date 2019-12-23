import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas.root';
import { applyMiddleware, createStore } from 'redux';

export const history = createHistory();

const saga = createSagaMiddleware();

const middlewares = [saga];

export const store = createStore(rootReducer(), applyMiddleware(...middlewares));

store.runSaga = saga.run;
store.runSaga(rootSaga);
