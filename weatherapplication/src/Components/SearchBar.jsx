import React, { useState, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext.jsx';
import debounce from '../hooks/useDebounce.js';

function SearchBar() {
  const [input, setInput] = useState('');
  const { fetchWeather } = useContext(WeatherContext);

  const handleSearch = debounce((value) => {
    fetchWeather(value);
  }, 700);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        onChange={(e) => {
          setInput(e.target.value);
          handleSearch(e.target.value);
        }}
        value={input}
      />
    </div> 
  );
}

export default SearchBar;
