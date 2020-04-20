import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="topface">
        <div className="text-container">
          <h2>Worauf wartest du noch?</h2>
          <h2 className="outline">Die nächsten Kurse sarten im Mai</h2>
        </div>
        <div className="flex1-footer">
          <Link to="#" className="button">TICKETS</Link>
          <Link to="#" className="button">KONTAKT</Link>
        </div>
      </div>
      <div className="bottomface">
        <p><strong>Super(Code)</strong></p>
        <p>© 2020</p>
      </div>
    </div>
  );
}

export default Footer;