export const REFRESH_CARS_REQUEST_ACTION = 'REFRESH_CARS_REQUEST';
export const REFRESH_CARS_DONE_ACTION = 'REFRESH_CARS_DONE';
export const APPEND_CAR_REQUEST_ACTION = 'APPEND_CAR_REQUEST';
export const APPEND_CAR_DONE_ACTION = 'APPEND_CAR_DONE';
export const REPLACE_CAR_REQUEST_ACTION = 'REPLACE_CAR_REQUEST';
export const REPLACE_CAR_DONE_ACTION = 'REPLACE_CAR_DONE';
export const REMOVE_CAR_REQUEST_ACTION = 'REMOVE_CAR_REQUEST';
export const REMOVE_CAR_DONE_ACTION = 'REMOVE_CAR_DONE';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createRefreshCarsRequestAction = () => ({ type: REFRESH_CARS_REQUEST_ACTION });
export const createRefreshCarsDoneAction = (cars) => ({ type: REFRESH_CARS_DONE_ACTION, cars });
export const createAppendCarRequestAction = newCar => ({ type: APPEND_CAR_REQUEST_ACTION, car: newCar });
export const createAppendCarDoneAction = appendedCar => ({ type: APPEND_CAR_DONE_ACTION, car: appendedCar });
export const createReplaceCarRequestAction = carId => ({ type: REPLACE_CAR_REQUEST_ACTION, carId });
export const createReplaceCarDoneAction = () => ({ type: REPLACE_CAR_DONE_ACTION });
export const createRemoveCarRequestAction = carId => ({ type: REMOVE_CAR_REQUEST_ACTION, carId });
export const createRemoveCarDoneAction = () => ({ type: REMOVE_CAR_DONE_ACTION });
export const createEditCarAction = carId => ({ type: EDIT_CAR_ACTION, carId });
export const createCancelCarAction = () => ({ type: CANCEL_CAR_ACTION });
export const createSortCarsAction = (col) => ({ type: SORT_CARS_ACTION, col });

export const refreshCars = () => {

  // this function being returned is the thunk action
  return dispatch => {

    dispatch(createRefreshCarsRequestAction());

    return fetch('http://localhost:3060/cars')
      .then(res => res.json())
      .then(cars => dispatch(createRefreshCarsDoneAction(cars)));
  };
};

export const appendCar = (newCar) => {

  return async dispatch => {

    dispatch(createAppendCarRequestAction(newCar));

    const res = await fetch('http://localhost:3060/cars',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCar),
      });

    const appendedCar = await res.json();

    dispatch(createAppendCarDoneAction(appendedCar));
    dispatch(refreshCars());
  };

};

export const replaceCar = (car) => {

  return async dispatch => {

    dispatch(createReplaceCarRequestAction(car));

    await fetch('http://localhost:3060/cars/' + encodeURIComponent(car.id),
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
      });

    dispatch(createReplaceCarDoneAction());
    dispatch(refreshCars());
  };

};

export const removeCar = (carId) => {

  return async dispatch => {

    dispatch(createRemoveCarRequestAction(carId));

    await fetch('http://localhost:3060/cars/' + encodeURIComponent(carId),
      {
        method: 'DELETE',
      });

    dispatch(createRemoveCarDoneAction());
    dispatch(refreshCars());
  };

};