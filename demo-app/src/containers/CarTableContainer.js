import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { CarTable } from '../components/CarTable';

import { sortedItemsSelector } from "../selectors/sortedItemsSelector";
import {
  createReplaceCarAction, createRemoveCarAction, createEditCarAction,
  createCancelCarAction, createSortCarsAction
} from "../actions/carToolActions";

export const CarTableContainer = () => {

  const cars = useSelector(sortedItemsSelector("cars", "carsSort"));

  const editCarId = useSelector(({ editCarId }) => editCarId);
  const carsSort = useSelector(s => s.carsSort);

  const actions = bindActionCreators({
    onSaveCar: createReplaceCarAction,
    onDeleteCar: createRemoveCarAction,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
    onSortCars: createSortCarsAction,
  }, useDispatch());

  // Car Table - presentational component, very reusable, only uses props
  return <CarTable cars={cars} editCarId={editCarId} carsSort={carsSort} {...actions} />;


};