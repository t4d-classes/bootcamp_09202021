import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { calcToolReducer } from '../reducers/calcToolReducers';

let composeEnhancers = composeWithDevTools({
  name: 'Calc Tool'
});

let middleware;

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers();
}


export const calcToolStore = createStore(
  calcToolReducer,
  middleware,
);