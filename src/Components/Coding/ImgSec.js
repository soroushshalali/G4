import React, { useState } from 'react';
import useCreateElement from './UseCreateElement';
import useSuperCodeLogo from './UseAniHook';

const ImgSec = () => {
    const [span, setSpan] = useCreateElement(50);
    const [topRight, bottomRight, bottomLeft, topLeft, setBorderR] = useSuperCodeLogo();
    return (
        <article className="test-art" >
            <section className="img-sec" >
                <span style={{ borderTopRightRadius: topRight, borderBottomRightRadius: bottomRight, borderBottomLeftRadius: bottomLeft, borderTopLeftRadius: topLeft }} >.</span>
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