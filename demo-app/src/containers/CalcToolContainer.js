import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction, createSubtractAction
} from "../actions/calcActions";

import { CalcTool } from "../components/CalcTool";

export const CalcToolContainer = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction
  }, useDispatch());

  return <CalcTool result={result} history={history} {...actions} />;

};