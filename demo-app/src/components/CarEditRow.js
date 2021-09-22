import PropTypes from 'prop-types';
import { useState } from "react";

import { carPropType  } from '../prop-types/cars';

export const CarEditRow = ({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}) => {

  const [
    carForm,
    setCarForm,
  ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.type === 'number'
        ? parseInt(e.target.value, 10)
        : e.target.value,
    });
  };

  const saveCar = () => {
    onSaveCar({
      ...carForm,
      id: car.id,
    });
  };


  return (
    <tr>
      <td>{car.id}</td>
      <td><input
          type="text"
          value={carForm.make}
          onChange={change}
          name="make"
        /></td>
      <td><input
          type="text"
          value={carForm.model}
          onChange={change}
          name="model"
        /></td>
      <td><input
          type="number"
          value={carForm.year}
          onChange={change}
          name="year"
        /></td>
      <td><input
          type="text"
          value={carForm.color}
          onChange={change}
          name="color"
        /></td>
      <td><input
          type="number"
          value={carForm.price}
          onChange={change}
          name="price"
        /></td>
      <td>
        <button type="button" onClick={saveCar}>Save</button>
        <button type="button" onClick={cancelCar}>Cancel</button>
      </td>
    </tr>
  );

};

CarEditRow.propTypes = {
  car: carPropType.isRequired,
  onSaveCar: PropTypes.func.isRequired,
  onCancelCar: PropTypes.func.isRequired,
};