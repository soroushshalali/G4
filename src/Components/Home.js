import React, { Component } from 'react';
import Coding from './Coding/Coding';
import Workshop from './Workshop/Workshop';
import Campus from './Campus/Capmus';




const Home = () => {
    return (
        <article>
            <Coding />
            <Workshop />
            <Campus />
        </article>
    );
}

export default Home;