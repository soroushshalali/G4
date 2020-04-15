import React from 'react';
import './codingStyle.css';

const Coding = () => {
    return (
        <header className="coding" >
            <section className="img-sec" >
                <img src="img/coding.jpg" alt="Coding" />
            </section>
            <section className="title-sec" >
                <div>
                    <span><i class="fas fa-chevron-down"></i></span><br></br>
                    <span><i class="fas fa-chevron-down"></i></span>
                </div>
                <h1>Teste deine<br></br>Codingskills<br></br>in einem<br></br>unserer<br></br><span>Workshops</span></h1>
                <h5>2384273864872364<i class="fas fa-phone"></i></h5>
            </section>
        </header>
    );
}

export default Coding;