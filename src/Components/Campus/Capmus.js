import React from 'react';
import './campusstyle.css';

const Campus = () => {
  return (
    <div className="campussection">
      <div className="title-image">
        <img src="../../public/img/_DSC2464_LowRes.jpg" alt="Bild" className="image"/>
      </div>
      <div className="campusTitle">
        <h1 className="title">Unser Campus ist <span className="inverted">mehr</span></h1>
      </div>
    </div>
  );
}

export default Campus;