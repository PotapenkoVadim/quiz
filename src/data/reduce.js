import { INIT, NEXT_STEP } from './actions';

export function reducer(state, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        slideSize: action.payload,
        isInit: true
      };

    case NEXT_STEP:
      return {
        ...state,
        step: action.payload,
        isInit: false
      };

    default:
      return state;
  }
}
