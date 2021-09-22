import PropTypes from 'prop-types';

import { carPropType  } from '../prop-types/cars';
import { useForm } from '../hooks/useForm';
 
export const CarEditRow = ({
  car,
  onSaveCar,
  onCancelCar: cancelCar,
}) => {

  const [
    carForm,
    change,
  ] = useForm({
    make: car.make,
    model: car.model,
    year: car.year,
    color: car.color,
    price: car.price,
  });

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