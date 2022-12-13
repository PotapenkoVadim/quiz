import './index.html';
import './styles/main.scss';

import { createStore } from './data/store';
import { reducer } from './data/reduce';
import { init } from './data/actions';

const initialState = {
  step: 1,
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  const state = store.getState();

  console.log(state);
});

store.dispatch(init());
