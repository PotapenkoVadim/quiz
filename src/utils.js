import { configutation } from './configuration';

const { markerActiveClass, resultDefaultAnswer, answerFieldAlertClass } =
  configutation;

export function setMarkerNumber(num, marker) {
  if (marker && num >= 0) {
    const displayedNum = num + 1;

    marker.innerHTML = displayedNum.toString();
    marker.classList.add(markerActiveClass);
  }
}

export function setQuizStepItemHeight(height, steps) {
  if (height && steps.length) {
    [...steps].map((item) => (item.style.minHeight = `${height}px`));
  }
}

export function moveQuizList({ step, slideSize }, quizList) {
  quizList.style.transform = `translateY(${slideSize * -step}px)`;
}

export function getAnswers(fields) {
  return [...fields].map(({ name, value }) => ({ name, value }));
}

export function setResultsByStep(resultSection, answers) {
  const fields = [...resultSection.children].slice(1);

  fields.map((field, index) => {
    const answer = answers[index]?.value;

    if (answer) {
      field.innerHTML = `Answer ${index + 1}: ${answer}`;
    } else {
      field.innerHTML = `Answer ${index + 1}: ${resultDefaultAnswer}`;
      field.classList.add(answerFieldAlertClass);
    }
  });
}
