import React from 'react'
import "./Banner.scss"


export const Banner = ({ imgPath, text }: { imgPath: string, text: string }) => {
  return (
    <div className='home-page-title-wrapper'>
      <img src={imgPath} alt="photographie d'une plage sauvage" />
      <h1>{text}</h1>
    </div>
  )
}
