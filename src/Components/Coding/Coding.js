import React from 'react';
import './codingStyle.css';
import ImgSec from './ImgSec';
import TitleSec from './TitleSec';
import LogoSuperCode from './LogoSuperCode';

const Coding = () => {
    window.addEventListener("mouseover", (el) => {
        if (el.target.className == "star") {
            el.target.style.fontSize = "1.5em"
            el.target.style.color = "#5d3ede"
        }
    })
    window.addEventListener("mouseout", (el) => {
        if (el.target.className == "star") {
            el.target.style.fontSize = "1em"
            el.target.style.color = "#fff"
        }
    })
    return (
        <header className="coding" >
            <LogoSuperCode />
            <ImgSec />
            <TitleSec />
        </header >
    );
}
export default Coding;