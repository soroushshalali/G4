import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Coding from './Components/Coding/Coding';
//import Workshop from './Components/Workshop/Workshop';
import Campus from './Components/Campus/Capmus';
// import Form from './Components/Form/Hamburger';
// import Form from './Components/Form/Form';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Campus />

        <Campus />

      </div>
    </BrowserRouter>
  );
}

export default App;