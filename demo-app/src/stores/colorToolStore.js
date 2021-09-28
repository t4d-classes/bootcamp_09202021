import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { colorToolReducer } from '../reducers/colorToolReducers';


export const colorToolStore = createStore(
  colorToolReducer,
  applyMiddleware(thunk),
);