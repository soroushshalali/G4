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
    useEffect(() => {
        ArrayFunc();
    }, [])
    return [span, ArrayFunc]
}

export default useCreateElement