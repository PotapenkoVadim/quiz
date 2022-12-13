import './index.html';
import './styles/main.scss';

import { createStore } from './data/store';
import { reducer } from './data/reduce';
import { moveNextStep, init } from './data/actions';
import { configutation } from './configuration';

const {
  initialState,
  selectors,
  markerActiveClass
} = configutation;

const store = createStore(reducer, initialState);

const marker = document.getElementById(selectors.marker);
const form = document.getElementById(selectors.form);
const quizList = document.getElementById(selectors.quizList);
const steps = quizList.children;
const buttonStep1 = steps[0].querySelector(selectors.button);
const buttonStep2 = steps[1].querySelector(selectors.button);
const buttonStep3 = steps[2].querySelector(selectors.button);

store.subscribe(() => {
  const state = store.getState();

  console.log(state);

  setMarkerNumber(state.step);
  moveQuizList(state);

  if (state.isInit) {
    setQuizStepItemHeight(state.slideSize);
  }
});

store.dispatch(init(form.offsetHeight));

buttonStep1.addEventListener('click', () => store.dispatch(moveNextStep(1)));
buttonStep2.addEventListener('click', () => store.dispatch(moveNextStep(2)));
buttonStep3.addEventListener('click', () => store.dispatch(moveNextStep(3)));

function setMarkerNumber(num) {
  if (marker && num >= 0) {
    const displayedNum = num + 1;

    marker.innerHTML = displayedNum.toString();
    marker.classList.add(markerActiveClass);
  }
}

function setQuizStepItemHeight(height) {
  if (height) {
    [...steps].map(item => item.style.minHeight = `${height}px`);
  }
}

function moveQuizList({ step, slideSize }) {
  quizList.style.transform = `translateY(${slideSize * (-step)}px)`;
}
