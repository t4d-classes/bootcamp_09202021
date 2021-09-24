import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction, createSubtractAction
} from "../actions/calcActions";

import { CalcTool } from "../components/CalcTool";

export const CalcToolContainer = () => {

  const result = useSelector(state => state.result);

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction
  }, useDispatch());

  // const dispatch = useDispatch();

  // const onAdd = value => {
  //   const addAction = createAddAction(value);
  //   dispatch(addAction);
  // }

  // const onSubtract = value => dispatch(createSubtractAction(value));

  // const actions = {
  //   onAdd, onSubtract
  // };




  return <CalcTool result={result} {...actions} />;

};