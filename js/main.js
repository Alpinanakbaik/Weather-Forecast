const apiKey = "7364e7c9052338442760f05f9b54099c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".cari input");
const searchButton = document.querySelector(".cari button");
const weatherIcon = document.querySelector(".icon-cuaca")

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  
  console.log(data);
  
  document.querySelector(".kota").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity+ "%";
  document.querySelector(".pressure").innerHTML = data.main.pressure+ " hPa";
  
  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "foto/clouds.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "foto/clear.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "foto/rain.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "foto/mist.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "foto/drizzle.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "foto/snow.png";
  }
}

searchButton.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
