import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Lodging } from "../../types/Lodging";
import "./LodgingById.scss";
import { AccordeonItem } from "../../components/accordeon-item/AccordeonItem";
import { LodgingRating } from "../../components/lodging/lodging-rating/LodgingRating";
import { EquipmentsList } from "../../components/equipment-list/EquipmentsList";
import { LodgingDescription } from "../../components/lodging/lodging-description/LodgingDescription";
import { LodgingCarrousel } from "../../components/lodging/lodging-carrousel/LodgingCarrousel";

export const LodgingById = () => {
  const locationInfos: Lodging = useLocation().state;

  if (!locationInfos) return <Navigate to="*" />;

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = locationInfos;

  return (
    <main className="lodging-main-wrapper">
      <LodgingCarrousel pictures={pictures} />
      <section className="lodging-presentation-section">
        <div className="lodging-section-div-title">
          <div className="title-wrapper">
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
        </div>
        <div className="host-wrapper">
          <p>{host.name}</p>
          <img src={host.picture} alt="host portrait" />
        </div>
        <div className="lodging-tags-wrapper">
          <ul className="lodging-tags-list">
            {tags.map((tag, index) => {
              return (
                <li key={index} className="lodging-tag-item">
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <LodgingRating rating={rating} />
      </section>

      <section>
        <div className="accordeon-list">
          <AccordeonItem
            title="Description"
            contentComponent={<LodgingDescription description={description} />}
          />
          <AccordeonItem
            title="Équipements"
            contentComponent={<EquipmentsList equipments={equipments} />}
          />
        </div>
      </section>
    </main>
  );
};
