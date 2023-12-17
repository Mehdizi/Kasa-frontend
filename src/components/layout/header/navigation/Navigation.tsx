import React from "react";
import { NavItem } from "./NavItem";
import "./Navigation.scss";

export const Navigation = () => {
  const navigationList = [
    { name: "Accueil", pathname: "/" },
    { name: "A Propos", pathname: "/About" },
  ];

  return (
    <nav className="header-navlist">
      <ul>
        {navigationList.map((nav, index) => {
          return (
            <NavItem key={index} name={nav.name} pathname={nav.pathname} />
          );
        })}
      </ul>
    </nav>
  );
};
