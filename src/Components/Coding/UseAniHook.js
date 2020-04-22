import React, { useState, useEffect } from 'react';



function useSuperCodeLogo() {
    const [topRight, setTopRight] = useState();
    const [bottomRight, setbottomRight] = useState();
    const [bottomLeft, setBottomLeft] = useState();
    const [topLeft, setTopLeft] = useState();
    function setBorder() {
        function xValue() {
            let x = Math.floor(Math.random() * 100) + 20;

            setTimeout(() => {
                setTopRight(x + '%')
            }, 375);

            setTimeout(() => {
                setbottomRight(x + '%')
            }, 750);

            setTimeout(() => {
                setBottomLeft(x + '%')
            }, 1125);

            setTimeout(() => {
                setTopLeft(x + '%')
            }, 1500);
        }
        setInterval(xValue, 1500);
    }
    useEffect(() => {
        setBorder();
    }, [])
    return [topRight, bottomRight, bottomLeft, topLeft, setBorder]
}

export default useSuperCodeLogo;