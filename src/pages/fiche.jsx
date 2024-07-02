import React from 'react'
import { useParams } from 'react-router-dom'

import Erreur from "./erreur"

import "../styles/fiche.scss"
import Data from "../data/data.json"
import Collapse from "../composants/Collapse"
import Carousel from "../composants/Carousel"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const tableauEtoiles = [1, 2, 3, 4, 5]

function Fiche() {
    //récupère l'id
    const {id} = useParams();
    
    //cherche l'id dans data
    const logement = Data.find(element => element.id === id)

    //redirection vers la page d'erreur si url modifié
    if (!logement) return(<Erreur />)

    //récupère la liste des équipements
    const equipements = logement.equipments.map((element, index) => (
          <li key={"equip-"+index}>{element}</li>
        ))
    
    return (
      <div className='logement'>

        {/* carousel */}
          <Carousel pictures={logement.pictures}/>

        {/* titre, emplacement et tags */}
          <div className='ficheLogement'>
              <div>
                  <h1>{logement.title}</h1>
                  <h4>{logement.location}</h4>
                  <div className='ficheLogement_description'>
                      { logement.tags.map((element, index) => {
                          return(<p className='ficheLogement_description-tags' key={"tag-"+index}>{element}</p>)
                      })}
                  </div>
              </div>

            {/* nom du propriétaire et sa photo */}
              <div className='ficheLogement_photo'>
                  <div className='ficheLogement_photo-nom'>
                      <p>{logement.host.name}</p>
                      <img src={logement.host.picture} alt={logement.title} />
                  </div>
                  
                {/* les étoiles */}
                  <div className='ficheLogement_photo-etoiles'>
                      {
                          tableauEtoiles.map(element => {
                              const nombreEtoiles = parseInt(logement.rating)
                              return(<span key={"etoile-"+element} className={element <= nombreEtoiles ? 'span1' : 'span2'}><FontAwesomeIcon icon={faStar} /></span>)
                          })
                      }
                  </div>
              </div>
          </div>

        {/* description et équipements */}
          <div className='collapseLogement'>
              <Collapse title="Description" content={logement.description} />
              <Collapse title="Equipements" content={equipements} />
          </div>
  </div>
    )
}

export default Fiche;