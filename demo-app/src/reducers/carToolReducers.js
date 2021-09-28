import { combineReducers } from "redux";

import {
  APPEND_CAR_ACTION, REPLACE_CAR_ACTION, REMOVE_CAR_ACTION,
  EDIT_CAR_ACTION, CANCEL_CAR_ACTION, SORT_CARS_ACTION,
} from "../actions/carToolActions";

const carList = [
  {
    id: 1,
    make: "Ford",
    model: "Fusion Hybrid",
    year: 2021,
    color: "blue",
    price: 45000,
  },
  {
    id: 2,
    make: "Tesla",
    model: "S",
    year: 2019,
    color: "white",
    price: 120000,
  },
];

export const carsReducer  = (cars = carList, action) => {

  switch (action.type) {
    case APPEND_CAR_ACTION:
      return [
        ...cars,
        {
          ...action.car,
          id: Math.max(...cars.map(c => c.id), 0) + 1,
        },
      ]
    case REPLACE_CAR_ACTION:
      const newCars = [...cars];
      const carIndex = newCars.findIndex(c => c.id === action.car.id);
      newCars[carIndex] = action.car;
      return newCars;
    case REMOVE_CAR_ACTION:
      return cars.filter(c => c.id !== action.carId);
    default:
      return cars;
  }
};

export const editCarIdReducer = (editCarId = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.carId;
  }

  if ([
    APPEND_CAR_ACTION, REPLACE_CAR_ACTION,
    REMOVE_CAR_ACTION, CANCEL_CAR_ACTION
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


export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
  carsSort: carsSortReducer,
});
