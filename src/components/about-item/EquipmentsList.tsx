import React from 'react'

export const LodgingDescription = ({ equipments, description }: { equipments: string[], description: string }) => {
  return (

    <ul>
      {equipments.map((e, index) => <li key={index}></li>)}
    </ul>
  )
}
