import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Workshop from './Components/Workshop/Workshop.js';
import Home from './Components/Home';
// import HamburgerM from './Components/HamburgerM';
import Form from './Components/Form/Form';
<<<<<<< HEAD

=======
>>>>>>> f2e33ab98a6cddede8f86796402a5f87df66d22a
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <HamburgerM /> */}
<<<<<<< HEAD
=======

>>>>>>> f2e33ab98a6cddede8f86796402a5f87df66d22a
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
>>>>>>> f2e33ab98a6cddede8f86796402a5f87df66d22a
