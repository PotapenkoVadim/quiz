export const configutation = {
  initialState: {
    step: 0,
    isInit: false,
  },
  selectors: {
    marker: '#marker',
    form: '#form',
    quizList: '#quiz-list',
    button: 'button',
    input: 'input',
    result: '#result',
  },
  classes: {
    markerActiveClass: 'marker_active',
    resultActiveClass: 'result_active',
    answerFieldAlertClass: 'result__answer_alert',
  },
  steps: {
    first: 1,
    second: 2,
    third: 3,
  },
  resultDefaultAnswer: 'You didn`t answer.',
};
