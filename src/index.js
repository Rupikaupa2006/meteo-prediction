function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let city = searchInput.value.trim();
  if (!city) return;

  const apiKey = "3c76ad3ae9846eef1dbtc9a5o2bde00d"; 
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      document.querySelector("#city").innerHTML = data.city;
      document.querySelector("#temperature").innerHTML =
        Math.round(data.temperature.current) + "°C";
      document.querySelector("#description").innerHTML =
        data.condition.description;
      document.querySelector(
        "#humidity"
      ).innerHTML = `Humidity: ${data.temperature.humidity}%`;
      document.querySelector(
        "#wind"
      ).innerHTML = `Wind: ${data.wind.speed} km/h`;
      document.querySelector("#weather-icon").src = data.condition.icon_url;
    })
    .catch((error) => {
      alert(error.message);
    });
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
