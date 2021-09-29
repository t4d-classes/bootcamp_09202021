import { combineReducers } from "redux";

import {
  REFRESH_CARS_DONE_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION,
} from "../actions/carToolActions";

export const carsReducer  = (cars = [], action) => {

  switch (action.type) {
    case REFRESH_CARS_DONE_ACTION:
      return action.cars;
    default:
      return cars;
  }
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    REFRESH_CARS_DONE_ACTION, CANCEL_CAR_ACTION
  ].includes(action.type)) {
    return -1;
  }

  return editCarId;  

};

export const carsSortReducer = (carsSort = { col: 'id', dir: 'asc' }, action) => {
  if (action.type === SORT_CARS_ACTION) {
    if (action.col === carsSort.col) {
      return { col: carsSort.col, dir: carsSort.dir === 'asc' ? 'desc' : 'asc' };
    } else {
      return { col: action.col, dir: 'asc' };
    };
  }

  return carsSort;
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

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
  isLoading: isLoadingReducer,
});
