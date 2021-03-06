import PropTypes from 'prop-types';

import { colorsPropType } from '../prop-types/colors';
import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';
import { ToolFooter } from './ToolFooter';

export const ColorTool = ({
  colors, toggleSortButtonText, isLoading,
  onAddColor: addColor,
  onDeleteColor: deleteColor,
  onSortColors: sortColors,
}) => {

  return (
    <>
      {isLoading && <div>Loading...</div>}
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
  isLoading: false,
};

ColorTool.propTypes = {
  colors: colorsPropType.isRequired,
  toggleSortButtonText: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onAddColor: PropTypes.func.isRequired,
  onDeleteColor: PropTypes.func.isRequired,
  onSortColors: PropTypes.func.isRequired,
};