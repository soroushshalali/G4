import React, { useState } from 'react';
import useCreateElement from './UseCreateElement';

const ImgSec = () => {
    const [span, setSpan] = useCreateElement(50);
    // const [backColor, setBackColor] = useState();
    // window.addEventListener("scroll", (el) => {
    //     console.log(el);
    //     // let x = el.path[1].scrollY - 300;
    //     // setBackColor("rgb(" + x + "," + x + "," + x + ")")
    // })
    return (
        <article className="test-art" >

            <section className="img-sec" >
                <img src="img/Vector22.png" alt="" />
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
        </article>
    );
}
export default ImgSec;