import PropTypes from 'prop-types';

import { carsPropType } from '../prop-types/cars';
import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const dataCols = [
  { name: 'id', caption: 'Id' },
  { name: 'make', caption: 'Make' },
  { name: 'model', caption: 'Model' },
  { name: 'year', caption: 'Year' },
  { name: 'color', caption: 'Color' },
  { name: 'price', caption: 'Price' },
];

const sortArrowWrapper = (col, dir) => aCol => {
  if (col === aCol) {
    return dir === 'asc' ? 'v' : '^';
  } else {
    return '';
  }
};

const sortHeaderColWrapper = (sortCars, sortArrow) => ({ col: { name, caption} }) => {
  return (
    <th>
      <button type="button" onClick={() => sortCars(name)}>
        {caption} {sortArrow(name)}
      </button>
    </th>
  );
};

export const CarTable = ({
  cars, editCarId, carsSort: { col, dir },
  onEditCar: editCar, onDeleteCar: deleteCar,
  onSaveCar: saveCar, onCancelCar: cancelCar,
  onSortCars: sortCars,
}) => {

  const sortArrow = sortArrowWrapper(col, dir);

  sortArrow('id')

  const SortHeaderCol = sortHeaderColWrapper(sortCars, sortArrowWrapper(col, dir));

  return (
    <table>
      <thead>
        <tr>
          {dataCols.map(dataCol => <SortHeaderCol key={dataCol.id} col={dataCol} />)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) =>
          car.id === editCarId
            ? <CarEditRow key={car.id} car={car}
                onSaveCar={saveCar} onCancelCar={cancelCar} />
            : <CarViewRow key={car.id} car={car}
                onEditCar={editCar} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
  carsSort: {
    col: 'id',
    dir: 'asc',
  },
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  editCarId: PropTypes.number.isRequired,
  carsSort: PropTypes.shape({
    col: PropTypes.oneOf(['id', 'make', 'model', 'color', 'price']).isRequired,
    dir: PropTypes.oneOf(['asc','desc']).isRequired,
  }).isRequired,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
  onSortCars: PropTypes.func.isRequired,
};