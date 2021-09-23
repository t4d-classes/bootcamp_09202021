import PropTypes from 'prop-types';
import { colorsPropType } from '../prop-types/colors';

export const ColorList = ({
  colors,
  toggleSortButtonText,
  onDeleteColor: deleteColor,
  onSortColors: sortColors,
 }) => {

  return (
    <>
      <button type="button" onClick={sortColors}>{toggleSortButtonText}</button>
      <ul>{colors.map(({ id, name }) =>
        <li key={id}>
          {id} - {name}
          <button type="button" onClick={() => deleteColor(id)}>X</button>
        </li>)}
      </ul>
    </>
  );
};

ColorList.defaultProps = {
  colors: [],
  toggleSortButtonText: 'Sort Me!',
};

ColorList.propsTypes = {
  colors: colorsPropType.isRequired,
  toggleSortButtonText: PropTypes.string.isRequired,
  onDeleteColor: PropTypes.func.isRequired,
  onSortColors: PropTypes.func.isRequired,
};
