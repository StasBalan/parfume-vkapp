import { USER_ANSWER, CLEAR_ANSWERS, SELECTE_ITEM, CLEAR_SELECTE_ITEM, CLEAR_ONE_ANSWER } from '../actions/answer';

export const inititalState = {
  answers: [],
  selectedItems: []
};

export function answersReducer(state = inititalState, action) {
  switch (action.type) {
    case USER_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload]
      }
    case SELECTE_ITEM:
      return {
        ...state,
        selectedItems: [...state.selectedItems, ...action.payload]
      }
    case CLEAR_SELECTE_ITEM:
      return {
        ...state,
        selectedItems: [...action.payload]
      }
    case CLEAR_ONE_ANSWER:
      const deletedLastElement = state.answers.pop();
      return {
        answers: [...state.answers],
        selectedItems: []
      };
    case CLEAR_ANSWERS:
      return {
        answers: [],
        selectedItems: []
      }
    default:
      return state;
  }
}
