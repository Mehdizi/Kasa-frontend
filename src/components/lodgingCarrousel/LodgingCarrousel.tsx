import React, { useState } from 'react'
import "./LodgingCarrousel.scss"

export const LodgingCarrousel = ({ pictures }: { pictures: string[] }) => {

  const arrowLeft = <svg className='arrow-left' width="96" height="120" viewBox="0 0 96 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_246298_96)">
      <path d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_246298_96">
        <rect width="96" height="119.64" fill="white" transform="translate(0 0.303223)" />
      </clipPath>
    </defs>
  </svg>

  const arrowRight = <svg width="96" height="121" viewBox="0 0 96 121" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_246298_100)">
      <path d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_246298_100">
        <rect width="96" height="119.64" fill="white" transform="translate(0 0.825928)" />
      </clipPath>
    </defs>
  </svg>


  const [actualpicture, setActualPicture] = useState(0)
  const pictureNumber = pictures.length

  const goToNextPicture = () => {
    if (actualpicture + 1 === pictureNumber) {
      setActualPicture(0)
    } else {
      setActualPicture(actualpicture + 1)
    }
  }

  const goToPreviousPicture = () => {
    if (actualpicture === 0) {
      setActualPicture(pictureNumber - 1)
    } else {
      setActualPicture(actualpicture - 1)
    }
  }

  return (
    <div className='lodging-carrousel-wrapper' >
      <img className='lodging-carrousel-img' src={pictures[actualpicture]} alt="House photography" />
      <button className='previous-button carrousel-button' onClick={goToPreviousPicture} >{arrowLeft}</button>
      <button className='next-button carrousel-button' onClick={goToNextPicture}>{arrowRight}</button>
      <p className='current-img' >{actualpicture + 1}/{pictureNumber}</p>
    </div>
  )
}
