import React from 'react';
import "../styles/header.scss"
import {Link} from "react-router-dom"
import Logo from "/assets/Logo.png"

function Header () {
  return (
    <header className="header">
      <Link to ="/">
        <img src={Logo} alt="logo kasa"   className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to ="/" className="header__nav-button" >Accueil</Link>
        <Link to ="/apropos" className="header__nav-button">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
