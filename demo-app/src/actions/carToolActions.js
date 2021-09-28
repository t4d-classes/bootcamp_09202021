export const APPEND_CAR_ACTION = 'APPEND_CAR';
export const REPLACE_CAR_ACTION = 'REPLACE_CAR';
export const REMOVE_CAR_ACTION = 'REMOVE_CAR';
export const EDIT_CAR_ACTION = 'EDIT_CAR';
export const CANCEL_CAR_ACTION = 'CANCEL_CAR';
export const SORT_CARS_ACTION = 'SORT_CARS';

export const createAppendCarAction = car => ({ type: APPEND_CAR_ACTION, car });
export const createReplaceCarAction = car => ({ type: REPLACE_CAR_ACTION, car });
export const createRemoveCarAction = carId => ({ type: REMOVE_CAR_ACTION, carId });
export const createEditCarAction = carId => ({ type: EDIT_CAR_ACTION, carId });
export const createCancelCarAction = () => ({ type: CANCEL_CAR_ACTION });
export const createSortCarsAction = (col) => ({ type: SORT_CARS_ACTION, col });