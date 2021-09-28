import { combineReducers } from "redux";

import {
  ADD_ACTION, SUBTRACT_ACTION, MULTIPLY_ACTION,
  DIVIDE_ACTION, CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
  SET_ERROR_MESSAGE_ACTION,
} from "../actions/calcToolActions";

// Reducer: Pure Function
// 1. The only data input comes from parameters
// 2. The parameters cannot be mutated
// 3. The function cannot cause a side effect
// 4. The only result is the return value from the function

// s' = reducer(s, a)

// export const resultReducer = (result = 0 /* state */, action) => {
//   switch (action.type) {
//     case ADD_ACTION:
//       return result + action.value;
//     case SUBTRACT_ACTION:
//       return result - action.value;
//     case MULTIPLY_ACTION:
//       return result * action.value;
//     case DIVIDE_ACTION:
//       return result / action.value;
//     case CLEAR_ACTION:
//       return 0;
//     default:
//       return result;
//   }
// };

export const historyReducer = (history = [], action) => {

  if ([ADD_ACTION, SUBTRACT_ACTION,
      MULTIPLY_ACTION, DIVIDE_ACTION].includes(action.type)) {

    return [
      ...history,
      {
        id: Math.max(...history.map(h => h.id), 0) + 1,
        opName: action.type,
        opValue: action.value,
      },
    ]
  }

  if (action.type === DELETE_HISTORY_ENTRY_ACTION) {
    return history.filter(entry => entry.id !== action.entryId);
  }

  if (action.type === CLEAR_ACTION) {
    return [];
  }

  return history;
};

// feature state pattern
// export const calcToolReducer = (state = {}, action) => {
//   return {
//     ...state,
//     result: resultReducer(state.result, action),
//     history: historyReducer(state.history, action),
//   };
// };

export const errorMessageReducer = (errorMessage = "", action) => {

  if (action.type === SET_ERROR_MESSAGE_ACTION) {
    return action.errorMessage;
  }

  return "";

};

export const calcToolReducer = combineReducers({
  // result: resultReducer,
  history: historyReducer,
  errorMessage: errorMessageReducer,
});


/*
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
    case MULTIPLY_ACTION:
      return {
        ...state,
        result: state.result * action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'MULTIPLY',
            opValue: action.value,
          },
        ]
      };
    case DIVIDE_ACTION:
      return {
        ...state,
        result: state.result * action.value,
        history: [
          ...state.history,
          {
            id: Math.max(...state.history.map(h => h.id), 0) + 1,
            opName: 'DIVIDE',
            opValue: action.value,
          },
        ]
      };
    case CLEAR_ACTION:
      return {
        ...state,
        result: 0,
        history: [],
      };
    default:
      return state;
  }

};
*/