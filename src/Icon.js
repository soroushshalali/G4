import React, { Component } from 'react';
import './icon.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";
import Coding from './Components/Coding/Coding';

import Form from './Components/Form/Form';

class Icon extends Component {
    state = {}
    render() {
        return (
            <section>
                <Link to='/contact' >
                    <div id="nav-icon2">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div></Link>
            </section>
        );
    }
}
export default Icon;

// $(document).ready(function () {
//     $('#nav-icon2').click(function () {
//         $(this).toggleClass('open');
//     });
// });
