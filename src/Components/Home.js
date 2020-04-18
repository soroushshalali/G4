import React from 'react';
import Coding from './Coding/Coding';
import Workshop from './Workshop/Workshop';
import Campus from './Campus/Capmus';
import Programming from './Coding/Programming';
import LogoC from './Coding/LogoC';





















const Home = () => {
    // window.addEventListener("scroll", (el) => {
    //     console.log(el);
    // })
    return (
        <article>
            <Coding />
            <LogoC />
            <Programming />
            <Workshop />
            <Campus />
        </article>
    );
}

export default Home;