import React, { useState, useEffect } from 'react';

// function useLogoAni() {
//     const [borderR, setBorderR] = useState("0%" + "10%" + 80 + "% 10%");
//     function setBorder() {
//         let x;
//         function xValue() {
//             x = Math.floor(Math.random() * 30) + 10;
//             setBorderR("0% " + x + "% " + "10% 10%");
//             setTimeout(() => {
//                 setBorderR("0% " + 10 + "% " + x + "% " + 10 + "%");

//             }, 500);
//             setTimeout(() => {
//                 setBorderR("0% " + 10 + "% " + 10 + "% " + x + "%");
//             }, 500);
//         }
//         setInterval(xValue, 1500);
//     }
//     useEffect(() => {
//         setBorder();
//     }, [])
//     return [borderR, setBorderR]
// }

function useLogoAni() {
    const [topRight, setTopRight] = useState();
    const [bottomRight, setbottomRight] = useState();
    const [bottomLeft, setBottomLeft] = useState();
    function setBorder() {
        function xValue() {
            let x = Math.floor(Math.random() * 100) + 30;

            setTimeout(() => {
                setTopRight(x + '%')
            }, 500);

            setTimeout(() => {
                setbottomRight(x + '%')
            }, 1000);

            setTimeout(() => {
                setBottomLeft(x + '%')
            }, 1500);


        }
        setInterval(xValue, 1500);
    }
    useEffect(() => {
        setBorder();
    }, [])
    return [topRight, bottomRight, bottomLeft, setBorder]
}
const LogoSuperCode = () => {
    const [topRight, bottomRight, bottomLeft, setBorderR] = useLogoAni();
    return (
        <div>
            <div className='logosupercode' >
                <span style={{ borderTopRightRadius: topRight, borderBottomRightRadius: bottomRight, borderBottomLeftRadius: bottomLeft, borderTopLeftRadius: 0 }} >super(code)</span>
            </div>
        </div>
    );
}

export default LogoSuperCode;