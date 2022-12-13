import { init } from './actions';

export function createStore(reducer, initialState) {
  let state = reducer(initialState, init());
  const subscribers = [];

  return {
    dispatch: (action) => {
      state = reducer(state, action);

      subscribers.forEach((subscriber) => subscriber());
    },

    subscribe: (callback) => subscribers.push(callback),
    getState: () => state,
  };
}
