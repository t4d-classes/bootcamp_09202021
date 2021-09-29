import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { colorToolReducer } from '../reducers/colorToolReducers';

let composeEnhancers = composeWithDevTools({
  name: 'Color Tool'
});

let middleware = applyMiddleware(thunk);

if (process.env.NODE_ENV !== "production") {
  middleware = composeEnhancers(middleware);
}

export const colorToolStore = createStore(
  colorToolReducer,
  middleware,
);