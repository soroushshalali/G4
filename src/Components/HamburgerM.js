import React, { useState, useEffect } from 'react';
import './hmStyle.css';
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in';


const HamburgerM = () => {
    const [link, setLink] = useState('/contact');
    const [test, setTest] = useState(true);
    const [className1, setClassName1] = useState('');
    const [className2, setClassName2] = useState('');
    const [className3, setClassName3] = useState('');

    function changeLink() {
        setTest(!test)
        test ? setLink('/') : setLink('/contact');
        test ? setClassName1('span1') : setClassName1('');
        test ? setClassName2('span2') : setClassName2('');
        test ? setClassName3('span3') : setClassName3('');

    }

    return (<FadeIn>
        <Link className='linkHM' onClick={changeLink} to={link} >
            <span className={className1} >----------</span>
            <span className={className2} >----------</span>
            <span className={className3} >----------</span>
        </Link></FadeIn>
    );
}

export default HamburgerM;