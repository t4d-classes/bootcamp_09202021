import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from 'react';

import { CarForm } from '../components/CarForm';

import {
  appendCar
} from "../actions/carToolActions";

export const CarFormContainer = () => {

  const dispatch = useDispatch();

  const actions = useMemo(() => bindActionCreators({
    onSubmitCar: appendCar,
  }, dispatch), [dispatch]);

  return <CarForm buttonText="Add Car" {...actions} />;
};