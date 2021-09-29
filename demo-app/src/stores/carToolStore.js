import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { carToolReducer } from '../reducers/carToolReducers';

let composeEnhancers = composeWithDevTools({
  name: 'Car Tool'
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers(middleware);
}

export const carToolStore = createStore(
  carToolReducer,
  middleware,
);