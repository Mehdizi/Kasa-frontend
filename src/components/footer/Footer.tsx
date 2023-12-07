import React from 'react'
import logoFooter from "../../assets/logos/LOGO-FOOTER.png"
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer className='footer'>
      <img className='logo-footer' src={logoFooter} alt='logo kasa' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
