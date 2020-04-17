import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
import Campus from './Components/Campus/Capmus.js';
import Coding from './Components/Coding/Coding.js';
import Form from './Components/Form/Form.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Workshop />
        <Form />
      </div>
    </BrowserRouter>
  );
}

export default App;