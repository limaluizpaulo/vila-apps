import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SettingsContextProvider from './context/SettingsContext';

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
);
