import logo from './logo.svg';
import React, { useLocation, useEffect } from 'react'

import './App.css';
import Navbar from './Component/Global/Nav/Navbar';
import Router from './Routes/Router';
import Footer from './Component/Global/Footer/Footer';
function App() {
  return (
    <div className="App">

      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
