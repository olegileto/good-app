import React from 'react';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { rootReducer } from './reducers';
import sagas from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);