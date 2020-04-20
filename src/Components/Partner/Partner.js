import React from 'react';
import './Partner.css';

const Partner = () => {
  return (
<div className="partner-section">
    <h2 className="SuperPartner">#SuperPartner</h2>
    <div className="image-container">
      <div className="flex1">
        <img src="img/blanko_logo (1).jpg" alt="Blanko" className="partnerlogos" />
        <img src="img/cammio_logo.jpg" alt="cammio" className="partnerlogos" />
        <img src="img/digihub_logo.jpg" alt="digihub e.V." className="partnerlogos" />
        <img src="img/moweb_logo.jpg" alt="mo´web" className="partnerlogos" />
      </div>
      <div className="flex2">
        <img src="img/startupdorf_logo.jpg" alt="Startup Dorf" className="partnerlogos" />
        <img src="img/super7000_logo.jpg" alt="Super(7000)" className="partnerlogos" />
      </div>
    </div>
  </div>
  );
}

export default Partner;