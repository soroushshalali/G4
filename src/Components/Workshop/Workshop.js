import React from 'react';
import "./workshop.css"
import WorkshopItem from "./WorkshopItem.js"
import Frontend from "./Frontend.js"
import Designworkshop from "./Designworkshop.js"
import "./workshop.css"



const Workshop = () => {
    return (
        <>
            <section className="lerne-zu-coden">
                <h2>
                Von <span>Anfänger bis Business –</span><br></br>
                lerne Coden in einem unserer<br></br><span>Workshops.</span>
                </h2>
            </section>
            <section>
                <WorkshopItem className="accordion" name="kostenloser HTML & CSS Workshop  Online"/>
                <Frontend className="accordion" name="1 Monat Web-Developer Front-End Online"/>
                <Designworkshop className="accordion" name="1 Monat UX & UI Design Online"/>

            </section>
        </>
     );
}
 
export default Workshop;