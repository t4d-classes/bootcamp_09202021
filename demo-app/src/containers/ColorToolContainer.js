import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from 'react';

import { ColorTool } from '../components/ColorTool';

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";
import { toggleSortButtonTextSelector } from '../selectors/toggleSortButtonTextSelector';
import {
  refreshColors, appendColor,
  createRemoveColorAction, createSortColorsAction,
} from "../actions/colorToolActions";



export const ColorToolContainer = () => {

  const isLoading = useSelector(state => state.isLoading);
  const colors = useSelector(sortedItemsSelector("colors", "colorsSort"));
  const toggleSortButtonText = useSelector(toggleSortButtonTextSelector);  

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onRefreshColors: refreshColors,
    onAddColor: appendColor,
    onDeleteColor: createRemoveColorAction,
    onSortColors: createSortColorsAction,
  }, dispatch), [dispatch]);

  return <ColorTool colors={colors} isLoading={isLoading}
    toggleSortButtonText={toggleSortButtonText} {...actions} />;
};