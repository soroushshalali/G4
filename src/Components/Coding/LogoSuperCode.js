import React, { useState, useEffect } from 'react';
import useSuperCodeLogo from './UseAniHook';

function useOpacity() {
    const [opacity, setOpacity] = useState();
    window.addEventListener("scroll", (el) => {
        setOpacity((1000 - el.path[1].scrollY) / 1000);
    })
    return [opacity]
}

const LogoSuperCode = () => {
    const [backColor, setBackColor] = useState();
    const [opacity] = useOpacity();
    const [topRight, bottomRight, bottomLeft, topLeft, setBorderR] = useSuperCodeLogo();
    return (
        <div>
            <div className='logosupercode' >
                <span>super(code)</span>
            </div>
        </div>
    );
}

export default LogoSuperCode;