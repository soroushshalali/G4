import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
import Home from './Components/Home';
import HamburgerM from './Components/HamburgerM';
import Form from './Components/Form/Form';
<<<<<<< HEAD
=======

>>>>>>> 562c91a93a15989d83eebeb6237fbdfae499a2ab
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
<<<<<<< HEAD
export default App;
=======

export default App;

>>>>>>> 562c91a93a15989d83eebeb6237fbdfae499a2ab
