import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import getOutfitRecommendation from '../utils/getOutfitRecommendation';

function OutfitRecommendation() {
  const { weather } = useContext(WeatherContext);
  if (!weather) return null;

  const suggestion = getOutfitRecommendation(weather);

  return <div className="outfit">Suggestion: {suggestion}</div>;
} 

export default OutfitRecommendation; 