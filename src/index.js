import React from "react";
import ReactDOM from "react-dom";
import { WeatherCard } from "./weatherapp"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <WeatherCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
