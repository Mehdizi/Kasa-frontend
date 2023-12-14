import React from 'react'
import { Link, useLocation } from "react-router-dom"

export const NavItem = ({ name, pathname }: { name: string, pathname: string }) => {

  const location = useLocation()

  const isNavItemActive = location.pathname === pathname

  const isLinkActive = isNavItemActive ? "active" : ""

  return (
    <li className={isLinkActive} >
      <Link to={pathname}>
        {name}
      </Link>
    </li>
  )
}
