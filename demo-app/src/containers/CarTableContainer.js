import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import { CarTable } from '../components/CarTable';

import {
  createReplaceCarAction, createRemoveCarAction, createEditCarAction,
  createCancelCarAction, createSortCarsAction
} from "../actions/carToolActions";

export const CarTableContainer = () => {

  const cars = useSelector(state => {

    const { cars } = state;
    const { col: sortCol, dir: sortDir }= state.carsSort;

    return [ ...cars ].sort((a,b) => {
      if (a[sortCol] === b[sortCol]) {
        return 0;
      } else {
        if (a[sortCol] < b[sortCol]) {
          return sortDir === 'asc' ? -1 : 1;
        } else {
          return sortDir === 'desc' ? -1 : 1;
        }
      }
    })
  });

  const editCarId = useSelector(state => state.editCarId);
  const carsSort = useSelector(state => state.carsSort);

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