
export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';
export const APPEND_COLOR_REQUEST_ACTION = 'APPEND_COLOR_REQUEST';
export const APPEND_COLOR_DONE_ACTION = 'APPEND_COLOR_DONE';
export const REMOVE_COLOR_REQUEST_ACTION = 'REMOVE_COLOR_REQUEST';
export const REMOVE_COLOR_DONE_ACTION = 'REMOVE_COLOR_DONE';
export const SORT_COLORS_ACTION = 'SORT_COLORS';

export const createRefreshColorsRequestAction = () => ({ type: REFRESH_COLORS_REQUEST_ACTION });
export const createRefreshColorsDoneAction = (colors) => ({ type: REFRESH_COLORS_DONE_ACTION, colors });
export const createAppendColorRequestAction = newColor => ({ type: APPEND_COLOR_REQUEST_ACTION, color: newColor });
export const createAppendColorDoneAction = appendedColor => ({ type: APPEND_COLOR_DONE_ACTION, color: appendedColor });
export const createRemoveColorRequestAction = colorId => ({ type: REMOVE_COLOR_REQUEST_ACTION, colorId });
export const createRemoveColorDoneAction = () => ({ type: REMOVE_COLOR_DONE_ACTION });
export const createSortColorsAction = () => ({ type: SORT_COLORS_ACTION });

export const refreshColors = () => {

  // this function being returned is the thunk action
  return dispatch => {

    dispatch(createRefreshColorsRequestAction());

    return fetch('http://localhost:3060/colors')
      .then(res => res.json())
      .then(colors => dispatch(createRefreshColorsDoneAction(colors)))

  };

};

export const appendColor = (newColor) => {

  return async dispatch => {

    dispatch(createAppendColorRequestAction(newColor));

    const res = await fetch('http://localhost:3060/colors',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newColor),
      });

    const appendedCar = await res.json();

    dispatch(createAppendColorDoneAction(appendedCar));
    dispatch(refreshColors());
  };

};

export const removeColor = (colorId) => {

  return async dispatch => {

    dispatch(createRemoveColorRequestAction(colorId));

    await fetch('http://localhost:3060/colors/' + encodeURIComponent(colorId),
      {
        method: 'DELETE',
      });

    dispatch(createRemoveColorDoneAction());
    dispatch(refreshColors());
  };

};