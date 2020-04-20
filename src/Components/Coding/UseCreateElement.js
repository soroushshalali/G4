import React, { useState, useEffect } from 'react';


function useCreateElement(para) {
    const [span, setSpan] = useState();
    let elArray2 = [];
    function ArrayFunc() {
        for (let i = 0; i < para; i++) {
            if (i % 3 == 0) {
                elArray2.push(<span style={{ opacity: 0 }} className="star" key={i} >.</span>)
            } else {
                elArray2.push(<span className="star" key={i} >.</span>)
            }
        }
        setSpan(elArray2);
    }
    // function blinken() {
    //     setInterval(() => {
    //         let randomNum = Math.floor(Math.random() * para);
    //         if (elArray2[randomNum].key == randomNum) {
    //             console.log(elArray2[randomNum].props.style);
    //         } else {
    //             console.log(false)
    //         }
    //     }, 2000);
    // }
    useEffect(() => {
        // blinken();
        ArrayFunc();
    }, [])
    return [span, ArrayFunc]
}

export default useCreateElement