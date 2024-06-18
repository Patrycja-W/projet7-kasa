import React from 'react' 
import "../styles/card.scss"
import {Link} from "react-router-dom"


const Card = ({ element }) => {
    return (
      <Link to ="/fiche/:id" className="card">
        <img src={element.cover} alt={element.title} className="card_image" />
        <h2 className="card_title">{element.title}</h2>
      </Link>

    );
  };

  
  export default Card;





