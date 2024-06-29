import React, { useState } from 'react'

import "../styles/collapse.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



function Collapse({title, content}) {

    const [contenuVisible, setContentVisible] = useState(false)

    const afficherContenu = () => { 
        setContentVisible(!contenuVisible) 
    }

    const collapseContenu = (contenuVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contenuVisible ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />)

    return (
        <div className='collapse'>

            <div className='collapse__header' onClick={afficherContenu}>
                <span>{title}</span>
                <div>
                    {collapseChevron}
                </div>
            </div>

            <div className={collapseContenu}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse;