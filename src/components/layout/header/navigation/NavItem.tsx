import React from "react";
import { Link, useLocation } from "react-router-dom";

type NavItemType = {
  name: string;
  pathname: string;
};

export const NavItem = ({ name, pathname }: NavItemType) => {
  const location = useLocation();

  const isNavItemActive = location.pathname === pathname;

  const isLinkActive = isNavItemActive ? "active" : "";

  return (
    <li className={isLinkActive}>
      <Link to={pathname}>{name}</Link>
    </li>
  );
};
