import { useState } from "react";

export const CarTool = (props) => {

  const [
    carForm,
    setCarForm,
  ] = useState({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const change = e => {
    setCarForm({
      ...carForm,
      [e.target.name]: e.target.value,
    });
  };

  console.log(carForm);

  return (
    <>
      <header>
        <h1>Car Tool</h1>
      </header>
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
          {props.cars.map((car) => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.color}</td>
              <td>{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
            type="text"
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
            type="text"
            id="price-input"
            value={carForm.price}
            onChange={change}
            name="price"
          />
        </div>
        <button type="button">
          Add Car
        </button>
      </form>
    </>
  );
};