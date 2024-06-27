import React from 'react';
import data from "../data/data.json";
import Card from './Card';
import "../styles/gallery.scss"

const gallery = () => {
  return (
    <div className="gallery">
      {data.map((element, index) => (
        <Card key={element.id} element={element} />
      ))}
    </div>
  );
};

export default gallery;