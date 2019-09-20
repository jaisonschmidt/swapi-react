/**
 * File: app.js
 * Type: MainComponent
 * Author: Jaison Schmidt
 * Description: Contrl application routes.
 * Data: 17/09/2019
 */
import React from 'react';

// pages
import Home from './pages/Home/Home';

// Generic CSS for all application
import './assets/scss/theme.scss';

// Start Application
const App = () => {
  return <Home />;
};

export default App;
