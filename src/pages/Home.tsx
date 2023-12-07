import React from 'react'
import { Link } from "react-router-dom"
import homePageImg from "../assets/images/Home-page-image.jpg"
import "./Home.scss"
import LodgingDatas from "../models/lodging-data.json"

export const Home = () => {
    return (
        <>
            <div className='home-page-title-wrapper'>
                <img src={homePageImg} alt="photographie d'une plage sauvage" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <main className='main-home-wrapper'>
                <ul className='lodging-cards-wrapper'>
                    {LodgingDatas.map((data) => {
                        return (
                            <Link to={`lodging/:{data.id}`}>
                                <li key={data.id} className='lodging-card'>
                                    <img className='lodging-cover' src={data.cover} alt="" />
                                    <h2>{data.title}</h2>
                                </li>
                            </Link>

                        )
                    })}
                </ul>

            </main>
        </>




    )
}
