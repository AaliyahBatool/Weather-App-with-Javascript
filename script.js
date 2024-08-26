const apiKey = 'f521e5437e8129d00a481a02a3c6e278';
const searchCity = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-btn");
const icon = document.querySelector(".weather-info img");

const apiURL = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

searchBtn.addEventListener("click", ()=>{
    const city = searchCity.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

async function checkWeather(city) {
    try {
        const res = await fetch(apiURL + city);
        console.log(res);
        if (!res.ok) {
            throw new Error("City not found");
        }
        const data = await res.json();

         // Update the UI with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind: " + data.wind.speed + " km/h";
        const description = document.querySelector(".weather-desc").innerHTML = data.weather[0].description;

        // Updating icons
        if (description == "thunderstorm") {
            icon.src = "thunderstorm.png";
        }
        if (description == "mist") {
            icon.src = "mist.png";
        }
        if (description == "broken clouds") {
            icon.src = "brokenclouds.png";
        }
        if (description == "clear sky") {
            icon.src = "clearday.png";
        }
        if (description == "scattered clouds") {
            icon.src = "scatteredclouds.png";
        }
        if (description == "snow") {
            icon.src = "snow.png";
        }
        if (description == "shower rain") {
            icon.src = "dayrain.png";
        }
        if (description == "few clouds") {
            icon.src = "dayclouds.png";
        }
        if (description == "rain") {
            icon.src = "shower.png";
        }

    } catch (error) {
        alert(error.message)
    }
}

