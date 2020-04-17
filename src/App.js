import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Workshop />
      </div>
    </BrowserRouter>
  );
}

export default App;

