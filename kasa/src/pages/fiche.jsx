import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Erreur from "./erreur"

import "../styles/fiche.scss"
import Data from "../data/data.json"
import Collapse from "../composants/Collapse"
import Carousel from "../composants/Carousel"

const arrayStars = [1, 2, 3, 4, 5]

function Fiche() {
    // récupère l'ID de l'URL
    const {id} = useParams();
    
    // cherche l'id dans le fichier logements.json
    const record = Data.find(element => element.id === id)
    
    // si l'URL à été modifié manuellement, redirection vers la page d'erreur
    if (!record) return(<Erreur />)

    // récupère la liste des équipements
    const equipements = record.equipments.map((element, index) => (
          <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
        ))
    

    return (
      <div className='logement'>

          {/* carousel d'images */}
          <Carousel pictures={record.pictures}/>


          {/* 1 - affiche le titre, l'emplacement et les tags */}
          <div className='ficheLogement'>
              <div>
                  <h1>{record.title}</h1>
                  <h4>{record.location}</h4>
                  <div className='ficheLogement_description'>
                      { record.tags.map((element, index) => {
                          return(<p className='ficheLogement_description-tags' key={"tags_"+index}>{element}</p>)
                      })}
                  </div>
              </div>

              {/* 2 - Affiche le nom du propriétaireet sa photo */}
              <div className='ficheLogement_photo'>
                  <div className='ficheLogement_photo-nom'>
                      <p>{record.host.name}</p>
                      <img src={record.host.picture} alt={record.title} />
                  </div>
                  
                  {/* 3 - Met et colorie les étoiles */}
                  <div className='ficheLogement_photo-etoiles'>
                      {
                          arrayStars.map(element => {
                              const nbreEtoiles = parseInt(record.rating)
                              return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                          })
                      }
                  </div>
              </div>
          </div>

          {/* affiche la description et les équipements */}
          <div className='collapseLogement'>
              <Collapse title="Description" content={record.description} />
              <Collapse title="Equipements" content={equipements} />
          </div>
  </div>
    )
}

export default Fiche