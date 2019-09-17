import React from "react";

export function WeatherCard() {
  return (
    <div className="container">
      <div className="card">
        <img src="https://i.imgur.com/0tPvfeT.png" />
        <div className="weather"><h1>Partly Cloudy</h1></div>
        <div className="cityname">
          <h1>Miami, FL</h1>
        </div>
        <div className="citydata">
          <h3>Monday | Sept 16 | 1:20</h3>
        </div>
        <div className="forecast">
          <h2>88 92 <font size="+4">86</font> 75 82</h2>
        </div>
      </div>
    </div>
  );
}
