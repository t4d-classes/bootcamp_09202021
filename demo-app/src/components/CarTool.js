import { useState } from "react";

import { carsPropType } from "../prop-types/cars";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import { ToolFooter } from "./ToolFooter";

export const CarTool = ({ cars: initialCars }) => {

  // persisted, permanent data, the data for which we wrote the application
  const [ cars, setCars ] = useState([ ...initialCars ]);

  // temporary data, describing the UI in the moment, it does not last forever
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {
    setCars([
      ...cars,
      {
        ...car,
        id: Math.max(...cars.map(c => c.id), 0) + 1,
      },
    ]);
  };

  const deleteCar = (carId) => {
    setCars(cars.filter(c => c.id !== carId));
  };

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        onEditCar={setEditCarId} onDeleteCar={deleteCar} />
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );
};

CarTool.defaultProps = {
  cars: [],
};

CarTool.propTypes = {
  cars: carsPropType.isRequired,
};