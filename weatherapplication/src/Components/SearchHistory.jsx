import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function SearchHistory() {
  const { history, fetchWeather } = useContext(WeatherContext);

  return (
    <div className="history">
      <h4>Search History</h4>
      <ul>
        {history.map((city, index) => (
          <li key={index} onClick={() => fetchWeather(city)}>
            {city}
          </li>
        ))}
      </ul> 
    </div>
  );
}

export default SearchHistory;