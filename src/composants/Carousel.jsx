
import React, { useState } from 'react'
import "../styles/carousel.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'




function Carousel({pictures}) { 

    const [index, setIndex] = useState(0)  
    const totalPictures = pictures.length-1 

    if (index < 0) setIndex(totalPictures) 
    if (index > totalPictures) setIndex(0)  
    
    return(
        <div className='carousel'>

                <img src={pictures[index]} className="carousel_img" key={"car-"+index} alt={"photo "+index} />

            {totalPictures > 0 && ( 
                <div> 
                    <button onClick={() => setIndex(index - 1)}>{index}
                    <FontAwesomeIcon icon={faChevronLeft} alt={+index} className='carousel_ChevronGauche'/>
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                    <FontAwesomeIcon icon={faChevronRight} alt={+index}className='carousel_ChevronDroit' />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (

                <div className='div-compteur'> 
                    <p className='carousel_compteurImages'>
                        {index+1}/{totalPictures+1}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel;