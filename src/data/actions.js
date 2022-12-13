export const INIT = '__INIT__';
export const NEXT_STEP = 'NEXT_STEP';

export function init(slideSize) {
  return {
    type: INIT,
    payload: slideSize
  };
}

export function moveNextStep(step) {
  return {
    type: NEXT_STEP,
    payload: step
  };
}
