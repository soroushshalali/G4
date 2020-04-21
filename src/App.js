import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
import Home from './Components/Home';
import HamburgerM from './Components/HamburgerM';
import Form from './Components/Form/Form';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HamburgerM />
        <Route path='/' component={Home} exact />
        <Route path='/contact' component={Form} />
      </div>
    </BrowserRouter>
  );
}
export default App;