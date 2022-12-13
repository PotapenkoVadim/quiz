import { INIT, NEXT_STEP } from './actions';

export function reducer(state, action) {
  switch (action.type) {
    case INIT:
      return {
        ...state,
        slideSize: action.payload,
        isInit: true,
      };

    case NEXT_STEP:
      return {
        ...state,
        step: action.payload.step,
        answers: {
          ...state.answers,
          [action.payload.step]: action.payload.answers,
        },
        isInit: false,
      };

    default:
      return state;
  }
}
