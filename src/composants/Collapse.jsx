import React, { useState } from 'react'

import "../styles/collapse.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'



function Collapse({title, content}) {

    const [contentVisible, setContentVisible] = useState(false)

    const affContent = () => { 
        setContentVisible(!contentVisible) 
    }

    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />)

    return (
        <div className='collapse'>

            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div>
                    {collapseChevron}
                </div>
            </div>

            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse;