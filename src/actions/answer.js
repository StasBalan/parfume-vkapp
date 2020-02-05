export const USER_ANSWER = "USER_ANSWER";
export const CLEAR_ONE_ANSWER = "CLEAR_ONE_ANSWER";
export const CLEAR_ANSWERS = "CLEAR_ANSWERS";
export const SELECTE_ITEM = "SELECTE_ITEM";
export const CLEAR_SELECTE_ITEM = "CLEAR_SELECTE_ITEM";

export function userAnswer(payload) {
  return {
    type: USER_ANSWER,
    payload: payload
  }
}

export function clearOneAnswer() {
  return {
    type: CLEAR_ONE_ANSWER,
  }
}

export function clearAnswer() {
  return {
    type: CLEAR_ANSWERS,
  }
}

export function selecteItem(payload) {
  return {
    type: SELECTE_ITEM,
    payload: payload
  }
}

export function clearSelecetItem(payload) {
  return {
    type: CLEAR_SELECTE_ITEM,
    payload: payload
  }
}
