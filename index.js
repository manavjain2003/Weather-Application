const apiKey = "be8fa4ed80464d439a470357252001";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("city");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");


searchBtn.addEventListener("click", function() {  
    const city = cityInput.value;
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`);
        const data = await response.json();
        
        if (response.ok === "404") {
            alert("City not found");
            return;
        }

        cityName.textContent = `${data.location.name}, ${data.location.country}`;
        temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
        weatherDescription.textContent = `Weather: ${data.current.condition.text}`;
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
        windSpeed.textContent = `Wind: ${data.current.wind_mph}`
        weatherInfo.style.display = "block"; 
    } catch (error) {
        alert("Error fetching weather data.");
    }
}
