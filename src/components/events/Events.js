import React from "react";
import { useTranslation } from "react-i18next";
import data from "../../dummy-data.json";
import EventsItem from "./EventsItem";

const Events = () => {
  const [t] = useTranslation();
  return (
    <div className="tndh-events-wrapper">
      <h2 className="tndh-events-title">{t("events")}</h2>
      <EventsItem events={data.events} />
    </div>
  );
};

export default Events;
