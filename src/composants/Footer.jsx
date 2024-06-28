import React from 'react';
import "../styles/footer.scss"
import LogoFooter from "../Assets/LogoFooter.png"

function Footer () {
  return (
    <div className="footer">
        <img className="footer_logo" src={LogoFooter} alt="logo footer"  />
        <p className="footer_texte">© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;