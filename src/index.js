import './index.html';
import './styles/main.scss';

import { createStore } from './data/store';
import { reducer } from './data/reduce';
import { moveNextStep, init } from './data/actions';
import { configutation } from './configuration';
import {
  setMarkerNumber,
  setQuizStepItemHeight,
  moveQuizList,
  getAnswers,
  setResultsByStep,
} from './utils';

const {
  initialState,
  selectors,
  steps: stepNames,
  resultActiveClass,
} = configutation;

const store = createStore(reducer, initialState);

const marker = document.querySelector(selectors.marker);
const form = document.querySelector(selectors.form);
const quizList = document.querySelector(selectors.quizList);
const results = document.querySelector(selectors.result);

const steps = quizList.children;
const buttonStep1 = steps[0].querySelector(selectors.button);
const buttonStep2 = steps[1].querySelector(selectors.button);
const buttonStep3 = steps[2].querySelector(selectors.button);
const step1Questions = steps[0].querySelectorAll(selectors.input);
const step2Questions = steps[1].querySelectorAll(selectors.input);
const step3Questions = steps[2].querySelectorAll(selectors.input);

store.subscribe(() => {
  const state = store.getState();
  const { step, slideSize, isInit, answers } = state;

  setMarkerNumber(step, marker);
  moveQuizList(state, quizList);

  if (step) {
    const resultSection = results.children[step - 1];

    setResultsByStep(resultSection, answers[step]);
  }

  if (isInit) {
    results.classList.add(resultActiveClass);

    setQuizStepItemHeight(slideSize, steps);
  }
});

store.dispatch(init(form.offsetHeight));

buttonStep1.addEventListener('click', () => {
  const answers = getAnswers(step1Questions);

  store.dispatch(moveNextStep({ step: stepNames.first, answers }));
});

buttonStep2.addEventListener('click', () => {
  const answers = getAnswers(step2Questions);

  store.dispatch(moveNextStep({ step: stepNames.second, answers }));
});

buttonStep3.addEventListener('click', () => {
  const answers = getAnswers(step3Questions);

  store.dispatch(moveNextStep({ step: stepNames.third, answers }));
});
