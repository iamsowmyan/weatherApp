import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function WeatherDisplay() {
  const { weather, error } = useContext(WeatherContext);

  if (error) return <div className="error">{error}</div>;
  if (!weather) return null;

  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main}</p>
      <p>Wind: {weather.wind.speed} m/s</p>
      <p>Humidity: {weather.main.humidity}%</p> 
    </div>
  );
}

export default WeatherDisplay;