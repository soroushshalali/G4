import React from 'react';
import './campusstyle.css';

const Campus = () => {
  return (
    <div className="campussection">
      <div className="title-image">
        <img src="img/_DSC2464_LowRes.jpg" alt="Bild" className="image"/>
      </div>
      <div className="campusTitle">
        <h1 className="title">Unser Campus ist <span className="inverted">mehr</span></h1>
      </div>
      <div className="article-whereAreWe">
        <p className="paragrapf">
          Unsere Schule befindet sich im Super7000. Auf über 1000 qm arbeiten mehr als 50 Unternehmen in offenen Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legendären Eventfläche auf echtem Kunstrasen für Workshops, Meet-Ups Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch schneller in passende Jobs zu vermitteln.
        </p>
        <div className="hashtag">
          <p>
            #superwinwin
          </p>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Campus;