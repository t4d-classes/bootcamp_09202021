import PropTypes from 'prop-types';

import { CarViewRow } from './CarViewRow';
import { carsPropType } from '../prop-types/cars';

export const CarTable = ({ cars, onDeleteCar: deleteCar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Car</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) =>
          <CarViewRow key={car.id} car={car} onDeleteCar={deleteCar} />)}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: carsPropType.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};