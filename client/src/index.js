// Libraries
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';

// Style Sheets
import "./maps/styles.css";

// React Elements
import App from "./app/App";
import MapChart from "./maps/CountryMap";
import WorldMap from "./maps/WorldMap";

const rootElement = document.getElementById("root");
ReactDOM.render(<><App /><WorldMap /><MapChart /></>, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







