import React, { useState } from 'react';
import ChevronDownAni from './ChevronDownAni';

function useClick(className) {
    const [color, setColor] = useState();
    window.addEventListener("click", (el) => {
        if (el.target.className == className) {
            setColor('header-title')
        }
    })
    setTimeout(() => {
        setColor('')
    }, 2000);
    return [color]
}



const TitleSec = () => {
    const [className] = useClick("title-sec");
    return (
        <section className="title-sec" >
            <ChevronDownAni />
            <h1 className={className}>Teste deine Codingskills in einem unserer <span className={className} >Workshops</span></h1>
            <h5>2384273864872364<i className="fas fa-phone"></i></h5>
        </section>
    );
}
export default TitleSec;