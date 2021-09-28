import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { ColorTool } from '../components/ColorTool';

import {
  createAppendColorAction, createRemoveColorAction, createSortColorsAction,
} from "../actions/colorToolActions";

export const ColorToolContainer = () => {

  const colors = useSelector(state => {

    const { colors } = state;
    const { col: sortCol, dir: sortDir }= state.colorsSort;

    return [ ...colors ].sort((a,b) => {
      if (a[sortCol] === b[sortCol]) {
        return 0;
      } else {
        if (a[sortCol] < b[sortCol]) {
          return sortDir === 'asc' ? -1 : 1;
        } else {
          return sortDir === 'desc' ? -1 : 1;
        }
      }
    });
  });

  const toggleSortButtonText = useSelector(state => {
    if (state.colorsSort.col === 'id') {
      return "Sorted by Id";
    } else {
      if (state.colorsSort.dir === 'asc') {
        return "Sorted by Name A->Z";
      } else {
        return "Sorted by Name Z->A";
      }
    }
  });  

  const actions = bindActionCreators({
    onAddColor: createAppendColorAction,
    onDeleteColor: createRemoveColorAction,
    onSortColors: createSortColorsAction,
  }, useDispatch());

  return <ColorTool colors={colors} toggleSortButtonText={toggleSortButtonText} {...actions} />;
};