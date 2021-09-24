

import { ADD_ACTION, SUBTRACT_ACTION } from "../actions/calcActions";

// Reducer: Pure Function
// 1. The only data input comes from parameters
// 2. The parameters cannot be mutated
// 3. The function cannot cause a side effect
// 4. The only result is the return value from the function

export const calcToolReducer = (state = { result: 0, history: [] }, action) => {

  switch (action.type) {
    case ADD_ACTION:
      return { 
        ...state,
        result: state.result + action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'ADD',
            opValue: action.value,
          },
        ]
      };
    case SUBTRACT_ACTION:
      return {
        ...state,
        result: state.result - action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'SUBTRACT',
            opValue: action.value,
          },
        ]
      };
    default:
      return state;
  }

};