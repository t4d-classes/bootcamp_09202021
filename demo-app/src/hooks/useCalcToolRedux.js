import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";

import {
  createAddAction, createSubtractAction, createMultiplyAction,
  createDivideAction, createClearAction, createDeleteHistoryEntryAction,
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION,
} from "../actions/calcToolActions";

export const useCalcToolRedux = () => {

  const [result, counts] = useSelector(state => {
  
    let result = 0;

    let opCounts = {
      [ADD_ACTION]: 0,
      [SUBTRACT_ACTION]: 0,
      [MULTIPLY_ACTION]: 0,
      [DIVIDE_ACTION]: 0,
    };

    state.history.forEach(entry => {
      switch(entry.opName) {
        case ADD_ACTION:
          result = result + entry.opValue;
          opCounts[ADD_ACTION]++;
          break;
        case SUBTRACT_ACTION:
          result = result - entry.opValue;
          opCounts[SUBTRACT_ACTION]++;
          break;
        case MULTIPLY_ACTION:
          result = result * entry.opValue;
          opCounts[MULTIPLY_ACTION]++;
          break;
        case DIVIDE_ACTION:
          result = result / entry.opValue;
          opCounts[DIVIDE_ACTION]++;
          break;
        default:
          break;
      }
    });

    return [result, opCounts];
  
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
    counts,
    ...actions,
  };

}