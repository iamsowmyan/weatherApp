import React, { createContext, useState } from 'react';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  const fetchWeather = async (city) => {
    if (!city) return;
    try { 
      setError(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=206c9845cee2fd4cb5b9623a89a5c122`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
      setHistory((prev) => [city, ...prev.filter((c) => c !== city)].slice(0, 5));
    } catch (err) {
      setError(err.message);
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    document.body.className = theme === 'light' ? 'dark' : 'light';
  };

  return (
    <WeatherContext.Provider
      value={{ weather, history, fetchWeather, error, theme, toggleTheme }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
