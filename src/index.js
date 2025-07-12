import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './build.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

"devDependencies": {
  "tailwindcss": "^4.1.11",
  "autoprefixer": "^10.4.21",
  "postcss": "^8.5.6",
  "postcss-cli": "^11.0.1"
}