import React from 'react';
import data from "../data/data.json";
import Card from './Card';
import "../styles/gallery.scss"

function Gallery () {
  return (
    <div className="gallery">
      {data.map((element) => (
        <Card key={element.id} element={element} />
      ))}
    </div>
  );
};

export default Gallery;