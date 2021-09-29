import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useEffect } from 'react';

import { CarTable } from '../components/CarTable';

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";
import {
  refreshCars, replaceCar, removeCar, createEditCarAction,
  createCancelCarAction, createSortCarsAction
} from "../actions/carToolActions";

const sortedCarsSelector = sortedItemsSelector("cars", "carsSort");

export const CarTableContainer = () => {

  const cars = useSelector(sortedCarsSelector);
  const editCarId = useSelector(s => s.editCarId);
  const carsSort = useSelector(s => s.carsSort);

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onSaveCar: replaceCar,
    onDeleteCar: removeCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
    onSortCars: createSortCarsAction,
  }, dispatch), [dispatch]);

  useEffect(() => dispatch(refreshCars()), [dispatch]);  

  return <CarTable cars={cars} editCarId={editCarId} carsSort={carsSort} {...actions} />;
};