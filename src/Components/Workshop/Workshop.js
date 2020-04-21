import React from 'react';
import "./workshop.css"
import WorkshopItem from "./WorkshopItem.js"
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
                <WorkshopItem className="accordion" name="1 Monat Web-Developer Front-End Online"/>
                <WorkshopItem className="accordion" name="1 Monat UX & UI Design Online"/>
            </section>
        </>
     );
}
 
export default Workshop;