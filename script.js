function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "c250bc8e2e7fde9cdf7bc1b9fe82272e"; // <-- Replace this with your real OpenWeatherMap API key

  if (city === "") {
    document.getElementById("weatherResult").innerHTML = "<p style='color:red;'>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const result = `
          <h2>Weather in ${data.name}</h2>
          <p> Temperature: ${data.main.temp}°C</p>
          <p> Condition: ${data.weather[0].description}</p>
          <p> Humidity: ${data.main.humidity}%</p>
          <p> Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById("weatherResult").innerHTML = result;
      } else {
        document.getElementById("weatherResult").innerHTML = "<p style='color:red;'>City not found. Please try again.</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherResult").innerHTML = "<p style='color:red;'>Something went wrong. Please try later.</p>";
    });
}
