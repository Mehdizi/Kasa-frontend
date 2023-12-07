import React from 'react'
import { Link } from "react-router-dom"
import "./Header.scss"
import logo from "../../assets/logos/LOGO-HEADER.png"


export const Header = () => {
  return (
    <header className='header'>
      <div className='img-navbar-wrapper'>
        <img src={logo} alt="logo kasa" />
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to={"/About"}>
                A Propos
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  )
}