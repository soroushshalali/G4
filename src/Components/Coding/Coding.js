import React, { useState, useEffect } from 'react';
import './codingStyle.css';
import ChevronDownAni from './ChevronDownAni';


function useCreateStar(para) {
    const [span, setSpan] = useState();
    let elArray2 = [];
    function func() {
        for (let i = 0; i < para; i++) {
            elArray2.push(<span className="star" key={i} >+</span>)
        }
        setSpan(elArray2)
    }
    useEffect(() => {
        func();
    }, [])
    return [span, func]
}



const Coding = () => {
    const [span, setSpan] = useCreateStar(50);
    window.addEventListener("mouseover", (el) => {
        if (el.target.className == "star") {
            // el.target.style.fontSize = "2em"
            el.target.style.color = "#5d3ede"
        }
    })
    window.addEventListener("mouseout", (el) => {
        if (el.target.className == "star") {
            // el.target.style.fontSize = "1em"
            el.target.style.color = "#fff"
        }
    })

    return (
        <header className="coding" >
            <section className="img-sec" >
                <div className="star-div1" >
                    {span}
                </div>
                <div className="star-div2" >
                    {span}
                </div>
                <div className="star-div3" >
                    {span}
                </div>
                <img src="img/coding.jpg" alt="Coding" />
            </section>
            <section className="title-sec" >
                <ChevronDownAni />
                <h1>Teste deine<br></br>Codingskills in<br></br>einem unserer<br></br><span>Workshops</span></h1>
                <h5>2384273864872364<i className="fas fa-phone"></i></h5>
            </section>
        </header >
    );
}

export default Coding;