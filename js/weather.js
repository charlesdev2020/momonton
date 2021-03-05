const WEATHER_API_KEY = "d533c79217b3d54c8d0487b81ebaefc1";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?";

const weather = document.querySelector(".js-weather .weather__text");

function getWeather(coords) {
  fetch(
    `${WEATHER_API_URL}lat=${coords.lat}&lon=${coords.lng}&appid=${WEATHER_API_KEY}&units=metric`
  )
    .then((response) => response.json())
    .then((json) => {
      const place = json.name;
      const temperature = json.main.temp;
      weather.innerHTML = `${Math.floor(temperature)}° @ ${place}`;
    });
}

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const coords = {
    lat,
    lng,
  };
  localStorage.setItem("coords", JSON.stringify(coords));
  getWeather(coords);
}

function handleGeoFailure() {
  console.log("can't get geo location");
}

function loadWeather() {
  const currentCoords = localStorage.getItem("coords");
  if (currentCoords !== null) {
    const parsedCoords = JSON.parse(currentCoords);
    getWeather(parsedCoords);
    return;
  } else {
    navigator.geolocation.getCurrentPosition(
      handleGeoSuccess,
      handleGeoFailure
    );
  }
}

function init() {
  loadWeather();
}

init();
