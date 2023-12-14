import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { Lodging } from '../types/Lodging'
import "./LodgingById.scss"
import { AccordeonItem } from '../components/accordeonItem/AccordeonItem'
import { LodgingRating } from '../components/lodging/lodging-rating/LodgingRating'
import { EquipmentsList } from '../components/equipmentList/EquipmentsList'
import { LodgingDescription } from '../components/lodgingDescription/LodgingDescription'
import { LodgingCarrousel } from '../components/lodgingCarrousel/LodgingCarrousel'


export const LodgingById = () => {



    const locationInfos: Lodging = useLocation().state

    if (!locationInfos) return <Navigate to="/" />

    const { title, pictures, description, host, rating, location, equipments, tags } = locationInfos

    return (
        <main className='lodging-main-wrapper'>
            {/* <img className='lodging-main-img' src={pictures[0]} alt={title} /> */}
            <LodgingCarrousel pictures={pictures} />
            <section className='lodging-presentation-section'>
                <div className='lodging-section-div'>
                    <div className='title-wrapper'>
                        <h1>{title}</h1>
                        <p>{location}</p>
                    </div>
                    <div className='host-wrapper'>
                        <p>{host.name}</p>
                        <img src={host.picture} alt="host portrait" />
                    </div>
                </div>
            </section>
            <section className='lodging-description-section'>
                <div className='lodging-tags-wrapper'>
                    <ul className='lodging-tags-list'>
                        {tags.map((tag, index) => {
                            return (
                                <li key={index} className='lodging-tag-item' >
                                    {tag}
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <LodgingRating rating={rating} />
                    </div>
                </div>
                <div className='accordeon-list'>
                    <AccordeonItem title="Description" contentComponent={<LodgingDescription description={description} />} />
                    <AccordeonItem title="Équipements" contentComponent={<EquipmentsList equipments={equipments} />} />
                </div>

            </section>
        </main>
    )
}
