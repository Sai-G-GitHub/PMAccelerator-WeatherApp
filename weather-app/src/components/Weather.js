import React, { useState, useEffect } from "react";
import axios from "axios";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState(null);
  const [search, setSearch] = useState("");

  const fetchWeather = async (lat, lon) => {
    try {
      const res = await axios.get(`${api.base}forecast`, {
        params: {
          lat: lat,
          lon: lon,
          appid: api.key,
          units: "metric",
        },
      });
      setForecast(res.data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      alert("Failed to fetch weather data. Please try again later.");
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Unable to retrieve your location. Using default location.");
          setLocation({ lat: 40.7128, lon: -74.0060 });
        }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
      alert("Geolocation is not supported by your browser. Using default location.");
      setLocation({ lat: 40.7128, lon: -74.0060 });
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetchWeather(location.lat, location.lon);
    }
  }, [location]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    try {
      const res = await axios.get(`${api.base}weather`, {
        params: {
          q: search,
          appid: api.key,
          units: "metric",
        },
      });
      setLocation({ lat: res.data.coord.lat, lon: res.data.coord.lon });
      setSearch("");
    } catch (err) {
      console.error("City not found:", err);
      alert("City not found. Please try again.");
    }
  };

  const showInfo = () => {
    alert(
      "The Product Manager Accelerator Program is designed to support PM professionals through every stage of their career. From students looking for entry-level jobs to Directors looking to take on a leadership role, our program has helped over hundreds of students fulfill their career aspirations.\n\nOur Product Manager Accelerator community are ambitious and committed. Through our program they have learnt, honed and developed new PM and leadership skills, giving them a strong foundation for their future endeavours.\n\nLearn product management for free today on our YouTube channel\nhttps://www.youtube.com/c/drnancyli?sub_confirmation=1"
    );
  };

  if (!forecast) return <div className="loading">Loading...</div>;

  const today = forecast.list[0].main;
  const todayWeather = forecast.list[0].weather[0];
  const todayClouds = forecast.list[0].clouds;
  const todayWind = forecast.list[0].wind;

  const fiveDayForecast = forecast.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="container">
      <h1>Weather Forecast for {forecast.city.name}</h1>
      <h2>
        Coordinates: {forecast.city.coord.lat}, {forecast.city.coord.lon}
      </h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="today-header">
        <h3>Today's Weather</h3>
        <div className="info-section">
          <p>by Sai Aneesh Gangishetty</p>
          <button onClick={showInfo}>Info</button>
        </div>
      </div>
      <div className="weather-info">
        <p>Temperature: {today.temp} °C</p>
        <p>Min Temp: {today.temp_min} °C</p>
        <p>Max Temp: {today.temp_max} °C</p>
        <p>
          Weather: {todayWeather.main} ({todayWeather.description})
        </p>
        <p>Clouds: {todayClouds.all}%</p>
        <p>Wind Speed: {todayWind.speed} m/s</p>
      </div>
      <h3>5-Day Forecast</h3>
      <div className="weather-forecast">
        {fiveDayForecast.map((day, index) => (
          <div key={index} className="forecast-day">
            <h4>{new Date(day.dt_txt).toLocaleDateString()}</h4>
            <p>Min Temp: {day.main.temp_min}</p>
            <p>Max Temp: {day.main.temp_max}</p>
            <p>Weather: {day.weather[0].main}</p>
            <p>Clouds: {day.clouds.all}%</p>
            <p>Wind: {day.wind.speed} m/s</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather;
