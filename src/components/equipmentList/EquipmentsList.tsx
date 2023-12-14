import React from 'react'
import "./EquipmentsList.scss"

export const EquipmentsList = ({ equipments }: { equipments: string[] }) => {
  return (
    <ul className='equipments-list' >
      {equipments.map((equipment, index) => <li key={index} className='equipment-item' > {equipment} </li>)}
    </ul>
  )
}
