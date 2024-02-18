require("dotenv").config();

const apiKey = process.env.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    $("#city").html(data.name);
    $("#temp").html(data.main.temp + "°C");
    $("#humidity").html(data.main.humidity + "%");
    $("#wind").html(data.wind.speed + "km/h");

    $("#weather-icon").attr("src", "images/" + data.weather[0].main.toLowerCase() + ".png");
}

$("button").click(function() {
    checkWeather($("#search > input").val());
})
