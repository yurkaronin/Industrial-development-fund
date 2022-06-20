/* const progressCircle = document.querySelectorAll('.progress-circle');

for(let progressCircleItem of progressCircle) {

const indicator = progressCircleItem.querySelector('.progress-circle__indicator');
// радиус
  let radius = indicator.r.baseVal.value;
  console.log(radius);
  // длинна окружности
  let circleLength = 2 * Math.PI * radius;
  console.log(circleLength);

  let offSet = 100;

  indicator.style.strokeDasharray = `${circleLength} ${circleLength}`;
  indicator.style.strokeDashoffset = circleLength;

  function setProgress(percent) {
    let offSet = circleLength - percent / 100 * circleLength;
    indicator.style.strokeDashoffset = offSet;
  }
}


setProgress(0); */




// как получить значение радиуса окружности
// radius = (width / 2) - (strokeWidth * 2);
// 80 / 2 - 4 = 36

// длинна  окружности
