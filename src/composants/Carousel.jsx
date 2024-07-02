
import React, { useState } from 'react'
import "../styles/carousel.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'




function Carousel({pictures}) { 

    const [index, setIndex] = useState(0)  
    const totalPhotos = pictures.length-1 

    if (index < 0) setIndex(totalPhotos) 
    if (index > totalPhotos) setIndex(0)  
    
    return(
        <div className='carousel'>

                <img src={pictures[index]} className="carousel_img" key={"photo-"+index} alt={"photo"+index} />

            {totalPhotos > 0 && ( 
                <div> 
                    <button onClick={() => setIndex(index - 1)}>
                    <FontAwesomeIcon icon={faChevronLeft} className='carousel_ChevronGauche'/>
                    </button>
                    <button onClick={() => setIndex(index + 1)}>
                    <FontAwesomeIcon icon={faChevronRight} className='carousel_ChevronDroit' />
                    </button>
                </div>
            )}
            {totalPhotos > 0 && (

                <div className='div-compteur'> 
                    <p className='carousel_compteurImages'>
                        {index+1}/{totalPhotos+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel;