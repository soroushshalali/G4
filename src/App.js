import React from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Coding from './Components/Coding/Coding';
import Workshop from './Components/Workshop/Workshop';
import Campus from './Components/Campus/Capmus';
import Form from './Components/Form/Form';
import Icon from './Icon';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Icon />
        <Route path='/Components/Coding' component={Coding} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;

