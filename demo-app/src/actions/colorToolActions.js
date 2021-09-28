export const APPEND_COLOR_ACTION = 'APPEND_COLOR';
export const REMOVE_COLOR_ACTION = 'REMOVE_COLOR';
export const SORT_COLORS_ACTION = 'SORT_COLORS';

export const createAppendColorAction = color => ({ type: APPEND_COLOR_ACTION, color });
export const createRemoveColorAction = colorId => ({ type: REMOVE_COLOR_ACTION, colorId });
export const createSortColorsAction = () => ({ type: SORT_COLORS_ACTION });