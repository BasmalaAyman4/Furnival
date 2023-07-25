import logo from './logo.svg';
import React, { useLocation, useEffect, useState } from 'react'

import './App.css';
import Navbar from './Component/Global/Nav/Navbar';
import Router from './Routes/Router';
import Footer from './Component/Global/Footer/Footer';
import Loading from './Component/Global/Loading/Loading'
function App() {
  const [IsLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {IsLoading ?
        <Loading />
        :
        <>
          <Navbar />
          <Router />
          <Footer />
        </>
      }
    </div>
  );
}

export default App;
