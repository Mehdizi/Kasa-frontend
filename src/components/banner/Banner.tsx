import React from "react";
import "./Banner.scss";

type BannerType = {
  imgPath: string;
  text: string;
};

export const Banner = ({ imgPath, text }: BannerType) => {
  return (
    <div className="home-page-title-wrapper">
      <img src={imgPath} alt="photographie d'une plage sauvage" />
      <h1>{text}</h1>
    </div>
  );
};
