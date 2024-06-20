import React from 'react';
import "../styles/header.scss"
import {Link} from "react-router-dom"
import Logo from "../Assets/Logo.png"

const Header = () => {
  return (
    <header className="header">
      <Link to ="/"  className="header__logo" >
        <img src={Logo} alt="logo kasa"/>
      </Link>
      <nav className="header__nav">
        <Link to ="/" className="header__nav-button" >Accueil</Link>
        <Link to ="/apropos" className="header__nav-button">A propos</Link>
      </nav>
    </header>
  );
};

export default Header;
