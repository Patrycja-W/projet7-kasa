import React from 'react';
import "../styles/banner.scss"

function Banner (props) {
  return (
    <div className="bannerRoot">
      <div className="banner" style={{backgroundImage: `url(${props.image})`}}></div>
      <h1>{props.texte}</h1>
    </div>
   
  );
};

export default Banner;