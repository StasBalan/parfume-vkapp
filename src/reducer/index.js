import { combineReducers } from 'redux';

import { answersReducer } from './answers';
import { resultReducer } from './result';

export default combineReducers({
  answers: answersReducer,
  result: resultReducer
});
