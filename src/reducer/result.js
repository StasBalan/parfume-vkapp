import { ADD_RESULT, CLEAR_RESULT } from '../actions/result';

export const inititalState = {
  result: ''
};

export function resultReducer(state = inititalState, action) {
  switch (action.type) {
    case ADD_RESULT:
      return {
        result: action.payload
      }
    case CLEAR_RESULT:
      return {
        result: ''
      }
    default:
      return state;
  }
}
