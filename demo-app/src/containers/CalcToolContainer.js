import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction, createSubtractAction, createMultiplyAction,
  createDivideAction, createClearAction, createDeleteHistoryEntryAction
} from "../actions/calcToolActions";

import { CalcTool } from "../components/CalcTool";

export const CalcToolContainer = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => {
    if (state.errorMessage) {
      return 'Error: ' + state.errorMessage;
    } else {
      return "";
    }
  });

  const actions = bindActionCreators({
    onAdd: createAddAction,
    onSubtract: createSubtractAction,
    onMultiply: createMultiplyAction,
    onDivide: createDivideAction,
    onClear: createClearAction,
    onDeleteHistoryEntry: createDeleteHistoryEntryAction,
  }, useDispatch());

  return <CalcTool result={result} history={history}
    errorMessage={errorMessage} {...actions} />;

};