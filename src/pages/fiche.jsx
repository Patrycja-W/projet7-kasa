import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Erreur from "./erreur"

import "../styles/fiche.scss"
import Data from "../data/data.json"
import Collapse from "../composants/Collapse"
import Carousel from "../composants/Carousel"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const tableauEtoiles = [1, 2, 3, 4, 5]

function Fiche() {

    const {id} = useParams();
    
    const enregistrement = Data.find(element => element.id === id)

    if (!enregistrement) return(<Erreur />)

    const equipements = enregistrement.equipments.map((element, index) => (
          <li key={"equip-"+index.toString()}>{element}</li>
        ))
    
    return (
      <div className='logement'>

          <Carousel pictures={enregistrement.pictures}/>

          <div className='ficheLogement'>
              <div>
                  <h1>{enregistrement.title}</h1>
                  <h4>{enregistrement.location}</h4>
                  <div className='ficheLogement_description'>
                      { enregistrement.tags.map((element, index) => {
                          return(<p className='ficheLogement_description-tags' key={"tag-"+index}>{element}</p>)
                      })}
                  </div>
              </div>

              <div className='ficheLogement_photo'>
                  <div className='ficheLogement_photo-nom'>
                      <p>{enregistrement.host.name}</p>
                      <img src={enregistrement.host.picture} alt={enregistrement.title} />
                  </div>
                  
                  <div className='ficheLogement_photo-etoiles'>
                      {
                          tableauEtoiles.map(element => {
                              const nombreEtoiles = parseInt(enregistrement.rating)
                              return(<span key={"etoile-"+element} className={element <= nombreEtoiles ? 'span1' : 'span2'}><FontAwesomeIcon icon={faStar} /></span>)
                          })
                      }
                  </div>
              </div>
          </div>

          <div className='collapseLogement'>
              <Collapse title="Description" content={enregistrement.description} />
              <Collapse title="Equipements" content={equipements} />
          </div>
  </div>
    )
}

export default Fiche;