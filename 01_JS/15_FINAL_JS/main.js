const countDownform = document.querySelector('#countdownForm');
const inputContainer = document.querySelector('#input-container');
const dateEl = document.querySelector('#date-picker');
const titleEl = document.querySelector('#title');

const countDownElement = document.querySelector('#countdown');
const countDownTitle = document.querySelector('#countdown-title');
const tiemeElemets = document.querySelectorAll('.countdown span');
const resetBtn = document.querySelector('#countdown-button-reset');

const complete = document.querySelector('#complete');
const info = document.querySelector('#complete-info');
const completeBtn = document.querySelector('#complete-button');

//Var de ayuda

let title = '';
let date = '';
let counDownValue = Date;
let countDownActive;
let savedCountdown;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const renderDom = () => {
  countDownActive = setInterval(() => {
    inputContainer.hidden = true;
    const now = new Date().getTime();
    const diff = counDownValue - now;

    const days = Math.floor(diff / day);
    const hours = Math.floor((diff % day) / hour);
    const minutes = Math.floor((diff % hour) / minute);
    const seconds = Math.floor((diff % minute) / second);

    if (diff < 0) {
      countDownElement.hidden = true;
      info.innerText = 'VAAAMOOOOOo';
      clearInterval(countDownActive);
      localStorage.removeItem('countdounw');
      complete.hidden = false;
    } else {
      complete.hidden = true;
      tiemeElemets[0].innerText = days;
      tiemeElemets[1].innerText = hours;
      tiemeElemets[2].innerText = minutes;
      tiemeElemets[3].innerText = seconds;
      countDownTitle.innerText = title;
      countDownElement.hidden = false;
    }
  }, second);
};

const updateCountdown = (e) => {
  e.preventDefault();
  date = dateEl.value;
  title = titleEl.value;
  savedCountdown = {
    date,
    title,
  };

  if (date === '') {
    return;
  }
  localStorage.setItem('countdounw', JSON.stringify(savedCountdown));
  countDownform;
  counDownValue = new Date(date).getTime();
  renderDom();
};

const reset = () => {
  countDownElement.hidden = true;
  complete.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countDownActive);
  localStorage.removeItem('countdounw');
  title = '';
  date = '';
  countDownform.reset();
};

const restoreCountdown = () => {
  if (localStorage.getItem('countdounw')) {
    inputContainer.hidden = true;
    savedCountdown = JSON.parse(localStorage.getItem('countdounw'));
    title = savedCountdown.title;
    date = savedCountdown.date;

    counDownValue = new Date(date).getTime();
    renderDom();
  }
  return;
};

function init() {
  const today = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000
  )
    .toISOString()
    .split('Z')[0]
    .slice(0, 16);
  console.log(today);
  dateEl.min = today;
  restoreCountdown();
  countDownform.addEventListener('submit', updateCountdown);
  resetBtn.addEventListener('click', reset);
  completeBtn.addEventListener('click', reset);

  console.log(today);
}

init();
