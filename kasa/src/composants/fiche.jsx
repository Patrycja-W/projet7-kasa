
import React from 'react';
import "../styles/fichelogement.scss"


const Fiche = ({ element }) => {
  return (
    <div className="card">
      <img src={element.cover} alt={element.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{element.title}</h2>
        <p className="card-location">{element.location}</p>
        <div className="card-tags">
          {element.tags.map(tag => (
            <span key={tag} className="card-tag">{tag}</span>
          ))}
        </div>
        <div className="card-footer">
          <div className="card-avatars">
            <img src={element.host.picture} alt={element.host.name} className="card-avatar" />
          </div>
          <div className="card-author">
            <p>{element.host.name}</p>
            <div className="card-rating">
              {'★'.repeat(element.rating)}{'☆'.repeat(5 - element.rating)}
            </div>
          </div>
        </div>
        <div className="card-description">
          <p>{element.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Fiche;
