const clockContainer = document.querySelector(".js-clock .clock__text");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  clockContainer.innerHTML = time;
  return;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  return;
}

init();
