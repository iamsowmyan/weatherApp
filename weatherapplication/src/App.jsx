import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import OutfitRecommendation from './components/OutfitRecommendation';
import SearchHistory from './components/SearchHistory';
import ThemeToggle from './components/ThemeToggle';
import { WeatherProvider } from './context/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="app">
        <h1 className="text-center">
          Weather-Based Outfit Recommender
        </h1>
        <ThemeToggle />
        <SearchBar />
        <WeatherDisplay />
        <OutfitRecommendation />
        <SearchHistory />
      </div>
    </WeatherProvider> 
  );
}

export default App;