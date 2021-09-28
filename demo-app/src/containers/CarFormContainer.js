import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

import { CarForm } from '../components/CarForm';

import {
  createAppendCarAction
} from "../actions/carToolActions";

export const CarFormContainer = () => {

  const actions = bindActionCreators({
    onSubmitCar: createAppendCarAction,
  }, useDispatch());

  return <CarForm buttonText="Add Car" {...actions} />;


};