import PropTypes from 'prop-types';

import { useForm } from "../hooks/useForm";

export const CarForm = ({ buttonText, onSubmitCar }) => {

  const [
    carForm,
    change,
    resetCarForm
  ] = useForm({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const submitCar = () => {

    onSubmitCar({ ...carForm });

    resetCarForm();
  };

  return (
    <form>
      <div>
        <label htmlFor="make-input">Make</label>
        <input
          type="text"
          id="make-input"
          value={carForm.make}
          onChange={change}
          name="make"
        />
      </div>
      <div>
        <label htmlFor="model-input">Model</label>
        <input
          type="text"
          id="model-input"
          value={carForm.model}
          onChange={change}
          name="model"
        />
      </div>
      <div>
        <label htmlFor="year-input">Year</label>
        <input
          type="number"
          id="year-input"
          value={carForm.year}
          onChange={change}
          name="year"
        />
      </div>
      <div>
        <label htmlFor="color-input">Color</label>
        <input
          type="text"
          id="color-input"
          value={carForm.color}
          onChange={change}
          name="color"
        />
      </div>
      <div>
        <label htmlFor="price-input">Price</label>
        <input
          type="number"
          id="price-input"
          value={carForm.price}
          onChange={change}
          name="price"
        />
      </div>
      <button type="button" onClick={submitCar}>
        {buttonText}
      </button>
    </form>
  );
};

CarForm.defaultProps = {
  buttonText: 'Submit Car',
};

CarForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmitCar: PropTypes.func.isRequired,
};