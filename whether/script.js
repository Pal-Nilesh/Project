const apikey = "6a2032b24b73227e868a011fd6820a71";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search-bar");
const searchbtn = document.querySelector(".icon");
const photo = document.querySelector(".rain");

async function wheather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".par").innerHTML = data.main.humidity + "%";
  document.querySelector(".spee").innerHTML = data.wind.speed + "km/h";
  if (data.weather[0].main == "Clouds") {
    photo.src = "8501970-removebg-preview.png";
  } else if (data.weather[0].main == "Clear") {
    photo.src = "164806.png";
  } else if (data.weather[0].main == "Rain") {
    photo.src = "8501970-removebg-preview.png";
  } else if (data.weather[0].main == "Drizzle") {
    photo.src = "8504201-removebg-preview.png";
  } else if (data.weather[0].main == "Haze") {
    photo.src = "10195061.png";
  }
}

searchbtn.addEventListener("click", () => {
  wheather(searchbox.value);
});
