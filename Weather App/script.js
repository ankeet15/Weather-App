const apikey = '#';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hrs";
}

searchbtn.addEventListener('click', ()=>{
    checkWeather(searchbox.value);
})

checkWeather();