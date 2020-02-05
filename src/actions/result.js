export const ADD_RESULT = "ADD_RESULT";
export const CLEAR_RESULT = "CLEAR_RESULT";

export function addResult(payload) {
  return {
    type: ADD_RESULT,
    payload: payload
  }
}

export function clearResult() {
  return {
    type: CLEAR_RESULT,
  }
}
