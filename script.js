const url =
  "https://api.open-meteo.com/v1/forecast?latitude=50.11&longitude=8.68&current=temperature_2m,wind_speed_10m";

async function holeWetter() {
  const antwort = await fetch(url);
  const daten = await antwort.json();
  document.getElementById("ausgabe").textContent =
    `${daten.current.temperature_2m} °C, Wind ${daten.current.wind_speed_10m} km/h`;
}

document.getElementById("knopf").addEventListener("click", holeWetter);