import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
import Campus from './Components/Campus/Campus.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Campus />
      </div>
    </BrowserRouter>
  );
}

export default App;