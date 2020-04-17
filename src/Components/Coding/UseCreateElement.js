import React, { useState, useEffect } from 'react';


function useCreateElement(para) {
    const [span, setSpan] = useState();
    let elArray2 = [];
    function func() {
        for (let i = 0; i < para; i++) {
            elArray2.push(<span className="star" key={i} >.</span>)
        }
        setSpan(elArray2)
    }
    useEffect(() => {
        func();
    }, [])
    return [span, func]
}
export default useCreateElement