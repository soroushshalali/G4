import React, { useState } from 'react';
import './campusstyle.css';

const Campus = () => {
  const [pho1, setPho1] = useState(1);
  const [phoZ1, setPhoZ1] = useState(5);
  const [pho2, setPho2] = useState();
  const [phoZ2, setPhoZ2] = useState();
  const [pho3, setPho3] = useState();
  const [phoZ3, setPhoZ3] = useState();
  const [pho4, setPho4] = useState();
  const [phoZ4, setPhoZ4] = useState();
  const [pho5, setPho5] = useState();
  const [phoZ5, setPhoZ5] = useState();
  const [pho6, setPho6] = useState();
  const [phoZ6, setPhoZ6] = useState();
  const [counter, setCounter] = useState(0);

  function GalleryFun() {
    if (counter == 0) {
      setPho2(1);
      setPhoZ2(5);
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    } else if (counter == 1) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3(1);
      setPhoZ3(5);
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    } else if (counter == 2) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4(1);
      setPhoZ4(5);
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    } else if (counter == 3) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5(1);
      setPhoZ5(5);
      setPho6("");
      setPhoZ6("");
    } else if (counter == 4) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6(1);
      setPhoZ6(5);
    } else if (counter == 5) {
      setPho2("");
      setPhoZ2("");
      setPho1(1);
      setPhoZ1(5);
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    }
    if (counter < 6) {
      setCounter(counter + 1)
    } else {
      setCounter(0)
    }
  }

  function GalleryFun2() {
    if (counter == 0) {
      setPho2(1);
      setPhoZ2(5);
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    } else if (counter == 1) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3(1);
      setPhoZ3(5);
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    } else if (counter == 2) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4(1);
      setPhoZ4(5);
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    } else if (counter == 3) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5(1);
      setPhoZ5(5);
      setPho6("");
      setPhoZ6("");
    } else if (counter == 4) {
      setPho2("");
      setPhoZ2("");
      setPho1("");
      setPhoZ1("");
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6(1);
      setPhoZ6(5);
    } else if (counter == 5) {
      setPho2("");
      setPhoZ2("");
      setPho1(1);
      setPhoZ1(5);
      setPho3("");
      setPhoZ3("");
      setPho4("");
      setPhoZ4("");
      setPho5("");
      setPhoZ5("");
      setPho6("");
      setPhoZ6("");
    }
    if (counter >= 0) {
      setCounter(counter - 1)
    } else {
      setCounter(5)
    }
  }
  return (
    <div className="grid">
      <img style={{ opacity: pho1, zIndex: phoZ1 }} src="img/_DSC2513_LowRes.jpg" alt="Codeing together" className="photo1" />
      <h2 className="title">Unser Campus ist <span className="outline">mehr</span></h2>
      <div className="article-1">
        <p>Unsere Schule befindet sich im Super7000. Auf über 1.000qm arbeiten mehr als 50 Unternehmen in offenen
        Büros und in Teambüros inklusive Telefonzellen, Meetingräumen, Bällebad und der legendären Eventfläche
        auf echtem Kunstrasen für Workshops, Meet-Ups & Co. Wir nutzen dieses einzigartige Umfeld, um Dich noch
        schneller in passende Jobs zu vermitteln.
    </p>
        <p className="hashtag"><strong>#superwinwin</strong></p>
      </div>
      <img style={{ opacity: pho2, zIndex: phoZ2 }} src="img/Super-Code__DSC2417_LowRes.jpg" alt="" className="photo2" />
      <img style={{ opacity: pho3, zIndex: phoZ3 }} src="img/_DSC2765_LowRes.jpg" alt="" className="photo3" />
      <img style={{ opacity: pho4, zIndex: phoZ4 }} src="img/jason-coudriet-dc80wb2nRHk-unsplash.jpg" alt="" className="photo4" />
      <img src="img/super7000_kreis.png" alt="Super7000 Kreis" className="superkreis" />
      <img style={{ opacity: pho5, zIndex: phoZ5 }} src="img/_DSC2464_LowRes.jpg" alt="" className="photo5" />
      <img style={{ opacity: pho6, zIndex: phoZ6 }} src="img/_Super-Code__DSC2412_Campus.jpg" alt="" className="photo6" />
      <div className="article-2">
        <p>SuperCode bietet ein arbeitsmarktlich aussichtsreiches und praxisnahes Bildungsangebot im IT-Bereich mit
        methodisch modernen und hohem Einsatz von Lehrpersonal. Hervorzuheben ist die hervorragende
        Branchenvernetzung sowie die innovative Praxiskompetenz der Geschäftsführung und des Teams
    </p>
        <p className="hashtag"><strong># Auszug aus dem Certqua Auditbericht</strong></p>
      </div>
      <div className='ArrowDiv' ><i onClick={GalleryFun2} class="fas fa-arrow-left"></i><i onClick={GalleryFun} class="fas fa-arrow-right"></i></div>
    </div>
  );
}

export default Campus;