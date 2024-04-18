import React from "react";

import "./eventCard.css";
const EventCard = ({ event }) => {
  console.log(event)
  return (
    <div className="event-page-card">
      <div className="event-page-card-content">
        <div className="event-page-card-front">
          <img src={`/assets/event-card/events/${event.image_name}`} className="event-image" alt="Event Info" loading="lazy" />
          <span className="event-page-card-title">{event.title}</span>
          <span className="event-page-card-info">{event.timings}</span>
        </div>
        <div className="event-page-card-back">
          <span className="event-page-card-title">{event.title}</span>
          <span className="event-page-card-info">
            {event.description}
          </span>
          <span className="event-page-card-prizes">Prizes : {event.prizes}</span>
        
        </div>
      </div>
    </div>
  );
};

export default EventCard;
