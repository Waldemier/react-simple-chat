import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import dayjs from "dayjs";
import WebFontLoader from 'webfontloader';

import App from './App';
import "dayjs/locale/ru";

WebFontLoader.load({
    google: {
        families: ["Open Sans:300,400,700"],
    },
});

dayjs.locale("ru");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
