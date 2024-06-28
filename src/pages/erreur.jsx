import React from 'react'
import { Link } from "react-router-dom"
import "../styles/erreur.scss"

function ErrorPage() {
    return (
        <div className='error'>
            <span>404</span>
            <h4>Oups! La page que vous demandez n'existe pas.</h4>
            <p><Link to="/">Retourner sur la page d’accueil</Link></p>
        </div>
    )
}

export default ErrorPage;