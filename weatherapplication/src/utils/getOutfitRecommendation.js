export default function getOutfitRecommendation(weather) {
  const temp = weather.main.temp;
  const condition = weather.weather[0].main;

  if (condition === 'Rain') return 'Take an umbrella';
  if (temp < 10) return 'Wear a warm jacket';
  if (temp > 25 && condition === 'Clear') return 'Sunglasses suggested';
  if (condition === 'Snow') return 'Wear boots and gloves';
  return 'Dress comfortably'; 
}
