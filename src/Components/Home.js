import React, { Component } from 'react';
import Coding from './Coding/Coding';
import Workshop from './Workshop/Workshop';
import Campus from './Campus/Capmus';
import Programming from './Coding/Programming';




const Home = () => {
    return (
        <article>
            <Coding />
            <Programming />
            <Workshop />
            <Campus />
        </article>
    );
}

export default Home;