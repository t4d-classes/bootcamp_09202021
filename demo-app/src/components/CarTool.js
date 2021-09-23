import { useState } from "react";

import { carsPropType } from "../prop-types/cars";
import { ToolHeader } from "./ToolHeader";
import { CarTable } from "./CarTable";
import { CarForm } from "./CarForm";
import { ToolFooter } from "./ToolFooter";

import { useSortedList } from '../hooks/useSortedList';

export const CarTool = ({ cars: initialCars }) => {

  // persisted, permanent data, the data for which we wrote the application
  const [ cars, sortInfo, appendCar, replaceCar, , removeCar, sortOnColumn ] = useSortedList([ ...initialCars ]);

  // temporary data, describing the UI in the moment, it does not last forever
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {
    appendCar(car);
    setEditCarId(-1);
  };

  const putCar = (car) => {
    replaceCar(car);
    setEditCarId(-1);
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    setEditCarId(-1);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  const editCar = setEditCarId;

  console.log('re-render');

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={cars} editCarId={editCarId}
        carsSort={sortInfo} onSortCars={sortOnColumn}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={putCar} onCancelCar={cancelCar} />
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