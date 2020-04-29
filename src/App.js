import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Portafolio from "./Pages/Portafolio";
import Footer from "./Pages/Footer";
import {FaArrowCircleUp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <User/>
      <Portafolio/>
      <Footer email="rcuencadev@gmail.com" direction="Calle Los Escritores 132, Lima Perú" phone="967707915"/>
      <div className="top-button">
        <a href="#home"><FaArrowCircleUp color="#FF6600" size="50px"/></a>
      </div>
    </div>
  );
}

export default App;
