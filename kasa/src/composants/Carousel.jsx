
import React, { useState } from 'react'
import chevronGauche from "../Assets/ChevronGauche.png"
import chevronDroit from "../Assets/ChevronDroit.png"
import "../styles/Carousel.scss"


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
                        <img src={chevronGauche} className='carousel_ChevronGauche' alt={'flèche gauche pour changer de photo '+index} />
                    </button>
                    <button onClick={() => setIndex(index + 1)}>{index}
                        <img src={chevronDroit} className='carousel_ChevronDroit' alt={'flèche droite pour changer de photo '+index} />
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

export default Carousel