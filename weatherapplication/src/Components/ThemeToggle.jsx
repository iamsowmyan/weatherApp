import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(WeatherContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
} 

export default ThemeToggle;