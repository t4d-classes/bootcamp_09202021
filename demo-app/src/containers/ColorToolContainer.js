import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { ColorTool } from '../components/ColorTool';

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";
import { toggleSortButtonTextSelector } from '../selectors/toggleSortButtonTextSelector';
import {
  createAppendColorAction, createRemoveColorAction, createSortColorsAction,
} from "../actions/colorToolActions";

export const ColorToolContainer = () => {

  const colors = useSelector(sortedItemsSelector("colors", "colorsSort"));

  const toggleSortButtonText = useSelector(toggleSortButtonTextSelector);  

  const actions = bindActionCreators({
    onAddColor: createAppendColorAction,
    onDeleteColor: createRemoveColorAction,
    onSortColors: createSortColorsAction,
  }, useDispatch());

  return <ColorTool colors={colors} toggleSortButtonText={toggleSortButtonText} {...actions} />;
};