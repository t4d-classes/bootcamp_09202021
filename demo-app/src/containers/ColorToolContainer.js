import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";
import { toggleSortButtonTextSelector } from '../selectors/toggleSortButtonTextSelector';
import {
  refreshColors, appendColor, removeColor, createSortColorsAction,
} from "../actions/colorToolActions";
import { ColorTool } from '../components/ColorTool';


export const ColorToolContainer = () => {

  const isLoading = useSelector(state => state.isLoading);
  const colors = useSelector(sortedItemsSelector("colors", "colorsSort"));
  const toggleSortButtonText = useSelector(toggleSortButtonTextSelector);  

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onRefreshColors: refreshColors,
    onAddColor: appendColor,
    onDeleteColor: removeColor,
    onSortColors: createSortColorsAction,
  }, dispatch), [dispatch]);

  useEffect(() => dispatch(refreshColors()), [dispatch]);

  return <ColorTool colors={colors} isLoading={isLoading}
    toggleSortButtonText={toggleSortButtonText} {...actions} />;
};