import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
// import Campus from './Components/Campus/Capmus.js';
// import Form from './Components/Form/Form';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Coding /> */}
        <Workshop />
        {/* <Form /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;