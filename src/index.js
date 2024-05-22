import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/Basics/Basics.css'
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BasicUseState } from './components/Basics/BasicUseState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
    <BasicUseState/>
  // </React.StrictMode>
);

