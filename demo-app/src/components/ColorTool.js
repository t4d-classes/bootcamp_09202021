import { useEffect } from 'react';


import { colorsPropType } from '../prop-types/colors';

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';

export const ColorTool = ({
  colors, toggleSortButtonText,
  onRefreshColors: refreshColors,
  onAddColor: addColor,
  onDeleteColor: deleteColor,
  onSortColors: sortColors,
}) => {

  useEffect(() => {
    refreshColors();
  }, []);

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors}
        toggleSortButtonText={toggleSortButtonText}
        onDeleteColor={deleteColor} onSortColors={sortColors} />
      <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );


};

ColorTool.defaultProps = {
  colors: [],
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
};