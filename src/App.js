import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Coding from './Components/Coding/Coding';
import Workshop from './Components/Workshop/Workshop';
import Campus from './Components/Campus/Capmus';


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
