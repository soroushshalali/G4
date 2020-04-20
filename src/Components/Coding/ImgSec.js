import React from 'react';
import useCreateElement from './UseCreateElement';

const ImgSec = () => {
    const [span, setSpan] = useCreateElement(50);
    return (
        <article className="test-art" >
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
        </article>
    );
}
export default ImgSec;