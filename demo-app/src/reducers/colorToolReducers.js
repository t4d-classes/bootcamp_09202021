import { combineReducers } from "redux";

import {
  REFRESH_COLORS_DONE_ACTION, SORT_COLORS_ACTION,
} from "../actions/colorToolActions";


export const colorsReducer = (colors = [], action) => {

  switch (action.type) {
    case REFRESH_COLORS_DONE_ACTION:
      return action.colors;
    default:
      return colors;
  }
};

export const colorsSortReducer = (colorsSort = { col: 'id', dir: 'asc' }, action) => {
  if (action.type === SORT_COLORS_ACTION) {
    if (colorsSort.col === 'id') {
      return { col: 'name', dir: 'asc' };
    } else {
      if (colorsSort.dir === 'asc') {
        return { col: 'name', dir: 'desc' };
      } else {
        return { col: 'id', dir: 'asc' };
      }
    }
  }

  return colorsSort;
};

export const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.endsWith('REQUEST')) {
    return true;
  }

  if (action.type.endsWith('DONE')) {
    return false;
  }

  return isLoading;
};


export const colorToolReducer = combineReducers({
  colors: colorsReducer,
  colorsSort: colorsSortReducer,
  isLoading: isLoadingReducer,
});
