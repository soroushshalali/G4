import React from 'react';
import './codingStyle.css';
import ChevronDownAni from './ChevronDownAni';

const Coding = () => {
    return (
        <header className="coding" >
            <section className="img-sec" >
                <h1>super(code)</h1>
                <div>
                    <img src="img/coding.jpg" alt="Coding" />
                </div>
            </section>
            <section className="title-sec" >
                <ChevronDownAni />
                <h1>Teste deine<br></br>Codingskills in<br></br>einem unserer<br></br><span>Workshops</span></h1>
                <h5>2384273864872364<i class="fas fa-phone"></i></h5>
            </section>
        </header>
    );
}

export default Coding;