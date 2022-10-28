// Libraries
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// React Elements
import App from "./app/App";
import DropDown from "./buttons/dropdown";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <>
        <App />
        <Router>
            <DropDown />
        </Router>
    </>
    , rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
