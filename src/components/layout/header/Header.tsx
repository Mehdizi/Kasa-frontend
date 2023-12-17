import React from "react";
import "./Header.scss";
import logo from "../../../assets/logos/LOGO-HEADER.png";
import { Navigation } from "./navigation/Navigation";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo kasa" />
      <Navigation />
    </header>
  );
};
