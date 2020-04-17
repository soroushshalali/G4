import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
import Campus from './Components/Campus/Campus.js';
import Form from './Components/Form/Form';
import Coding from './Components/Coding/Coding.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Campus />
        <Coding />
        <Workshop />
        <Form />
      </div>
    </BrowserRouter>
  );
}

export default App;