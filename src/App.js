import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';

import Form from './Components/Form/Form';
import Coding from './Components/Coding/Coding';
import Programming from './Components/Coding/Programming';
import Campus from './Components/Campus/Capmus';
import Home from './Components/Home';
import Icon from './Icon';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Icon />
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Form} />
      </div>
    </BrowserRouter>
  );
}

export default App;