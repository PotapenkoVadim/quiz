export const INIT = '__INIT__';
export const MOVE_NEXT_STEP = 'MOVE_NEXT_STEP';

export function init(slideSize) {
  return {
    type: INIT,
    payload: slideSize,
  };
}

export function moveNextStep(payload) {
  return {
    type: MOVE_NEXT_STEP,
    payload,
  };
}
