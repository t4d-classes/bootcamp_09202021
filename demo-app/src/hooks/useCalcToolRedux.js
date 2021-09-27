import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction, createSubtractAction, createMultiplyAction,
  createDivideAction, createClearAction, createDeleteHistoryEntryAction,
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
} from "../actions/calcActions";

export const useCalcToolRedux = () => {

  const result = useSelector(state => {
  
    let result = 0;

    state.history.forEach(entry => {
      switch(entry.opName) {
        case ADD_ACTION:
          result = result + entry.opValue;
          break;
        case SUBTRACT_ACTION:
          result = result - entry.opValue;
          break;
        case MULTIPLY_ACTION:
          result = result * entry.opValue;
          break;
        case DIVIDE_ACTION:
          result = result / entry.opValue;
          break;
        default:
          break;
      }
    });

    return result;
  
  });
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

  return {
    result,
    history,
    errorMessage,
    ...actions,
  };

}