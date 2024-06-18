import React from 'react' 
import BannerAPropos from '../composants/bannerAPropos'
import Collapse from '../composants/Collapse'
import "../styles/collapse.scss"



export default function APropos() {

  // contenu qui sera affiché dans les Collapse
  const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return <>

  <BannerAPropos></BannerAPropos>

  <div className='flex'>
                <div className='about'>
                    <div><Collapse title="Fiabilité" content={fiabilite} /></div>
                    <div><Collapse title="Respect" content={respect} /></div>
                    <div><Collapse title="Service" content={service} /></div>
                    <div><Collapse title="Sécurité" content={securite} /></div>
                </div>
        </div>

  
    </>
  }
  
