import React, { useState } from 'react';



const ChevronDownAni = () => {
    const [opc, setOpc] = useState();
    const [opc2, set2Opc] = useState();
    function animationFunc() {
        let flag = true;
        flag = !flag;
        console.log(flag);
    }
    return (
        <div>
            <span><i className="fas fa-chevron-down"></i></span><br></br>
            <span><i className="fas fa-chevron-down"></i></span>
        </div>
    );
}
export default ChevronDownAni;