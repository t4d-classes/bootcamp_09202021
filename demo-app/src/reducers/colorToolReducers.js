import { combineReducers } from "redux";

import {
  APPEND_COLOR_ACTION, REMOVE_COLOR_ACTION, SORT_COLORS_ACTION,
} from "../actions/colorToolActions";

const colorList = [
  { id: 1, name: 'blue', hexcode: '0000ff' },
  { id: 2, name: 'red', hexcode: 'ff0000' },
  { id: 3, name: 'black', hexcode: '000000' },
  { id: 4, name: 'purple', hexcode: 'ff00ff' },
  { id: 5, name: 'white', hexcode: 'ffffff' },
  { id: 6, name: 'green', hexcode: '00ff00' }
];

export const colorsReducer = (colors = colorList, action) => {

  switch (action.type) {
    case APPEND_COLOR_ACTION:
      return [
        ...colors,
        {
          ...action.color,
          id: Math.max(...colors.map(c => c.id), 0) + 1,
        },
      ]
    case REMOVE_COLOR_ACTION:
      return colors.filter(c => c.id !== action.colorId);
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


export const colorToolReducer = combineReducers({
  colors: colorsReducer,
  colorsSort: colorsSortReducer,
});
