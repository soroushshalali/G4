import React, { useState, useEffect } from 'react';

const LogoSuperCode = () => {
    const [borderR, setBorderR] = useState("0%" + "10%" + 80 + "% 10%");
    function setBorder() {
        let x;

        function xValue() {
            x = Math.floor(Math.random() * 30) + 10;
            setBorderR("0% " + x + "% " + "10% 10%");
            setTimeout(() => {
                setBorderR("0% " + 10 + "% " + x + "% " + 10 + "%");

            }, 500);
            setTimeout(() => {
                setBorderR("0% " + 10 + "% " + 10 + "% " + x + "%");
            }, 500);
        }
        setInterval(xValue, 1500);
    }


    useEffect(() => {
        setBorder();
    }, [])

    return (
        <div>
            <div className='logosupercode' >
                <span style={{ borderRadius: borderR }} >super(code)</span>
            </div>
        </div>
    );
}

export default LogoSuperCode;