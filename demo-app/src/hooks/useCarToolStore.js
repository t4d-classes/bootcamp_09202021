import { useState } from "react";

import { useSortedList } from './useSortedList';

export const useCarToolStore = (initialCars) => {

    // persisted, permanent data, the data for which we wrote the application
    const [
      cars, sortInfo, appendCar, replaceCar, ,
      removeCar, sortOnColumn ] = useSortedList([ ...initialCars ]);

    // temporary data, describing the UI in the moment, it does not last forever
    const [ editCarId, setEditCarId ] = useState(-1);

    const editCar  = carId => setEditCarId(carId);

    const cancelCar = () => setEditCarId(-1);

    return {
      
      // stateful data
      // cars: cars,
      cars,
      editCarId,
      sortInfo,
      
      // stateful functions
      appendCar,
      replaceCar,
      removeCar,
      sortOnColumn,
      editCar,
      cancelCar,
    };

};