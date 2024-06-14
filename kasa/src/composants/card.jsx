import React from 'react' 
import "../styles/card.scss"


const Card = ({ element }) => {
    return (
      <div className="card">
      <img src={element.cover} alt={element.title} className="card_image" />
      <h2 className="card_title">{element.title}</h2>
      </div>
    );
  };

  
  export default Card;




