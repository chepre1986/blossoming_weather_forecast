
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
 <h1>
 🌺 Weather 🌺
 </h1>
 
  
 <form className="search-form">
 <div className="row">
   <div className="col-6"> <input type="text" className="form-control" placeholder="Enter city name..." /></div>
 <div className="col-3"> <input type="button" className="btn btn-outline-secondary" value="Search" /></div>
  </div> 
  </form>
 </div>

  <footer className="links">
   Created by Patrycja Szumska. Code {" "}
 <a href="https://github.com/chepre1986/blossoming_weather_forecast.git" target="_blank" rel="noreferrer">Open-source</a>
  </footer> 
  </div>
  );
}

export default App;
