import React from 'react';
import Coding from './Coding/Coding';
import Workshop from './Workshop/Workshop';
import Campus from './Campus/Capmus';
import Programming from './Coding/Programming';
import LogoC from './Coding/LogoC';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import Partner from './Partner/Partner';
import Footer from './Footer/Footer'
import Verctor from './Vector/Vector';


const Home = () => {
    // window.addEventListener("scroll", (el) => {
    //     console.log(el);
    // })
    return (
        <main>
            <Coding />
            <LogoC />
            <Programming />
            <Workshop />
            <Verctor />
            <Campus />
            <Partner />
            <Footer />
        </main>
    );
}

export default Home;