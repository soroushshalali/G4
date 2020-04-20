import React from 'react';
import './campusstyle.css';

const Campus = () => {
  return (
<div className="grid">
  <img src="img/_DSC2513_LowRes.jpg" alt="Codeing together" className="photo1" />
  <h2 className="title">Unser Campus ist <span className="outline">mehr</span></h2>
  <div className="article-1">
    <p>Unsere Schule befindet sich im Super7000. Auf über 1.000qm arbeiten mehr als 50 Unternehmen in offenen
      Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legendären Eventfläche
      auf echtem Kunstrasen für Workshops, Meet-Ups & Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch
      schneller in passende Jobs zu vermitteln.
    </p>
    <p className="hashtag"><strong>#superwinwin</strong></p>
  </div>
  <img src="img/Super-Code__DSC2417_LowRes.jpg" alt="" className="photo2" />
  <img src="img/_DSC2765_LowRes.jpg" alt="" className="photo3" />
  <img src="img/jason-coudriet-dc80wb2nRHk-unsplash.jpg" alt="" className="photo4" />
  <img src="img/super7000_kreis.png" alt="Super7000 Kreis" className="superkreis" />
  <img src="img/_DSC2464_LowRes.jpg" alt="" className="photo5" />
  <img src="img/_Super-Code__DSC2412_Campus.jpg" alt="" className="photo6" />
  <div className="article-2">
    <p>SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes Bildungsangebot im IT-Bereich mit
      methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende
      Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams
    </p>
    <p className="hashtag"><strong># Auszug aus dem Certqua Auditbericht</strong></p>
  </div>
</div>
  );
}

export default Campus;