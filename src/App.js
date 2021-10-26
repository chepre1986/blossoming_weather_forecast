
import './App.css';
import Weather from "./Weather";
import SearchEngine from "./SearchEngine";
import Forecast from './Forecast';

function App() {
  return (
    <div className="App">
      <div className="container">
 <h1>
 🌺 Weather 🌺
 </h1>
 
  
 <SearchEngine />
  <Weather city="London"/>
  <Forecast />
 </div>

  <footer className="links">
   Created by Patrycja Szumska. Code {" "}
 <a href="https://github.com/chepre1986/blossoming_weather_forecast.git" target="_blank" rel="noreferrer">Open-source</a>
  </footer> 
  </div>
  );
}

export default App;
