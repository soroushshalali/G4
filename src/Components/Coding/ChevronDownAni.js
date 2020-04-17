import React, { useState, useEffect } from 'react';

function useAni() {
    const [opc, setOpc] = useState("opc-chevron fas fa-chevron-down");
    const [opc2, setOpc2] = useState("fas fa-chevron-down");
    useEffect(() => {
        let flag = true;
        setInterval(() => {
            flag = !flag;
            if (flag) {
                setOpc("opc-chevron fas fa-chevron-down")
                setOpc2("fas fa-chevron-down")
            } else {
                setOpc2("opc-chevron fas fa-chevron-down")
                setOpc("fas fa-chevron-down")
            }
        }, 1500);
    })
    return [opc, opc2]
}
const ChevronDownAni = () => {
    const [opc, opc2] = useAni();
    return (
        <div>
            <span><i className={opc}></i></span><br></br>
            <span><i className={opc2}></i></span>
        </div>
    );
}
export default ChevronDownAni;