import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/Home/home';
import { useState } from 'react';

function App() {
  const [sideNavbar, setSideNavbar] = useState(true);


  const setSideNavbarFunc  = (value) =>{
    setSideNavbar(value)
  } 
  return (
    <>
      <Navbar setSideNavbarFunc={setSideNavbarFunc} sideNavbar={sideNavbar} />

      <Home sideNavbar = {sideNavbar} />
    </>
  );
}

export default App;
