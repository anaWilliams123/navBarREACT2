
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import logo from './components/img/logo12.png';



function App() {
  return (
    <div className="App">
    <Navbar />
    <img src={logo} width="110px"></img>
    
  </div>

);
  }

export default App;
