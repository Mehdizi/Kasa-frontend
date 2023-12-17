import React from 'react'
import "./LodgingDescription.scss"

export const LodgingDescription = ({ description }: { description: string }) => {
  return (
    <div className='lodging-description' >{description}</div>
  )
}
