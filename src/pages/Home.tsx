import React from 'react'
import { Link } from "react-router-dom"
import homePageImg from "../assets/images/Home-page-image.jpg"
import "./Home.scss"
import LodgingDatas from "../models/lodging-data.json"
import { Banner } from '../components/banner/Banner'

export const Home = () => {

    return (
        <>
            <Banner imgPath={homePageImg} text='Chez vous, partout et ailleurs' />
            <main className='main-home-wrapper'>
                <ul className='lodging-cards-wrapper'>
                    {LodgingDatas.map((data) => {
                        return (
                            <li key={data.id} className='lodging-card'>
                                <Link to={`lodging/:${data.id}`} state={data}>
                                    <img className='lodging-card-cover' src={data.cover} alt={data.description} />
                                    <h2>{data.title}</h2>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </>
    )
}