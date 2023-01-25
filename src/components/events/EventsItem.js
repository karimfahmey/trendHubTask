import React from "react";
import { Link } from "react-router-dom";
import "./EventsItemStyle.scss";

const EventsItem = ({ events }) => {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index} className="tndh-events-item">
          <div className="tndh-events-item--media">
            <Link to={`/events/${event.id}`}  state={{event}}>
              <img src={require(`../../assets/img/events/${event.media}`)} alt={event.title} />
            </Link>
            <span className="tndh-events-item--date">
              <span>{event.date.month}</span>
              <span>{event.date.day}</span>
            </span>
          </div>
          <div className="tndh-events-item--content">
            <h3 className="tndh-events-title">{event.title}</h3>
            <p className="tndh-events-description">{event.content}</p>
            <div className="tndh-events-meta">
              <p className="tndh-events-location"><i class="fa-sharp fa-solid fa-location-dot"></i>{event.location}</p>
              <p className="tndh-events-time"><i class="fa-solid fa-clock"></i>{event.time}</p>
              <div className="tndh-events-btn">
                <i class="fa-sharp fa-solid fa-share-nodes"></i>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EventsItem;
