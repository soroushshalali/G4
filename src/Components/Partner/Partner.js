import React, { useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [display1, setDisplay1] = useState();
  const [display2, setDisplay2] = useState();
  function changeDisplay1() {
    setDisplay1('grid');
    setDisplay2('none');
  }
  function changeDisplay2() {
    setDisplay2('flex');
    setDisplay1('none');
  }
  return (
    <div className="partner-section">
      <h2 className="SuperPartner">#SuperPartner</h2>
      <div className="image-container">
        <div style={{ display: display1 }} className="flex1">
          <img src="img/blanko_logo (1).jpg" alt="Blanko" className="partnerlogos" />
          <img src="img/cammio_logo.jpg" alt="cammio" className="partnerlogos" />
          <img src="img/digihub_logo.jpg" alt="digihub e.V." className="partnerlogos" />
          <img src="img/moweb_logo.jpg" alt="mo´web" className="partnerlogos" />
        </div>
        <div style={{ display: display2 }} className="flex2">
          <img src="img/startupdorf_logo.jpg" alt="Startup Dorf" className="partnerlogos logoX" />
          <img src="img/super7000_logo.jpg" alt="Super(7000)" className="partnerlogos logoY" />
        </div>
      </div>
      <input onClick={changeDisplay1} name='btn-Radio' className="btn-Radio" type='radio'></input>
      <input onClick={changeDisplay2} name='btn-Radio' className="btn-Radio" type='radio'></input>
    </div>
  );
}

export default Partner;