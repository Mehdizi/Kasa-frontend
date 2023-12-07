import React from 'react'
import { Link } from "react-router-dom"
import "./NotFound.scss"

export const NotFound = () => {
    return (
        <div className='not-found-wrapper'>
            <h2 className='title-not-found'>404</h2>
            <p className='text-not-found'>Oups! La page que vous demandez n'existe pas.</p>
            <p className='link-not-found'> <Link to={"/"}>Retourner sur la page d'accueil</Link> </p>
        </div>
    )
}
