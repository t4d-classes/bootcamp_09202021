
export const REFRESH_COLORS_REQUEST_ACTION = 'REFRESH_COLORS_REQUEST';
export const REFRESH_COLORS_DONE_ACTION = 'REFRESH_COLORS_DONE';

export const APPEND_COLOR_ACTION = 'APPEND_COLOR';
export const REMOVE_COLOR_ACTION = 'REMOVE_COLOR';
export const SORT_COLORS_ACTION = 'SORT_COLORS';

export const createRefreshColorsRequestAction = () => ({ type: REFRESH_COLORS_REQUEST_ACTION });
export const createRefreshColorsDoneAction = (colors) => ({ type: REFRESH_COLORS_DONE_ACTION, colors });

export const createAppendColorAction = color => ({ type: APPEND_COLOR_ACTION, color });
export const createRemoveColorAction = colorId => ({ type: REMOVE_COLOR_ACTION, colorId });
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