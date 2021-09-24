import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarForm } from '../components/CarForm';

export const CarFormContainer = () => {

  const {
    appendCar, cancelCar
  } = useCarToolStoreContext();

  const addCar = (car) => {
    appendCar(car);
    cancelCar();
  };

  return <CarForm buttonText="Add Car" onSubmitCar={addCar} />;
};