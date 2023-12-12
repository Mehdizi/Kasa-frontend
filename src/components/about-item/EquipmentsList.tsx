import React from 'react'

export const LodgingDescription = ({ equipments }: { equipments: string[] }) => {
  return (
    <ul>
      {equipments.map((e, index) => <li key={index}> {e} </li>)}
    </ul>
  )
}
