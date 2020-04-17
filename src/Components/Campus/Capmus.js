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
          <p className="itemImage">
            #superwinwin
          </p>
        </div>
      </div>
      <div>
          <img src="public/img/_DSC2513_LowRes.jpg" alt="gemeinsam Spaß am coden"/>
        </div>
        <div>
          <img src="public/img/...."></img>
        </div>
        <div className="article-two">
          <h2>
            <span className="char1">S</span>
            <span className="char2">U</span>
            <span className="char3">P</span>
            <span className="char4">E</span>
            <span className="char5">R</span>
            <span className="char6">(</span>
            <span className="char7">7</span>
            <span className="char8">0</span>
            <span className="char9">0</span>
            <span className="char10">0</span>
            <span className="char11">)</span>
          </h2>
        <p className="paragrapf">
          SuperCode bietet ein arbeitsmarktlich aussichtsreich und praxisnahes Bildungsangebot im IT-Bereich mit methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams.
        </p>
        <div className="hashtag">
          <p>
            # Auszug aus dem Certqua Auditbericht
          </p>
        </div>
      </div>
    </div>
  );
}

export default Campus;