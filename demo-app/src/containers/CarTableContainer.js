import { useCarToolStoreContext } from "../contexts/carToolStoreContext";

import { CarTable } from '../components/CarTable';

// Container Component - connects a presentational subtree to the
//                       application store
//                     - generally not reusable
export const CarTableContainer = () => {

  const {
    cars,
    editCarId, 
    sortInfo, 
    editCar,
    removeCar,
    replaceCar,
    cancelCar,
    sortOnColumn,
  } = useCarToolStoreContext();

  const saveCar = (car) => {
    replaceCar(car);
    cancelCar();
  };

  const deleteCar = (carId) => {
    removeCar(carId);
    cancelCar();
  };

  // Car Table - presentational component, very reusable, only uses props
  return <CarTable cars={cars} editCarId={editCarId}
  carsSort={sortInfo} onSortCars={sortOnColumn}
  onEditCar={editCar} onDeleteCar={deleteCar}
  onSaveCar={saveCar} onCancelCar={cancelCar} />;


};