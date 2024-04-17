import React from "react";

import "./eventCard.css";
const EventCard = ({ imagePath }) => {
  console.log(imagePath);
  return (
    <div className="event-page-card">
      <div className="event-page-card-content">
        <div className="event-page-card-front">
          <img src={`/assets/event-card/${imagePath}`} alt="Event Info" />
          <span className="event-page-card-title">Vision</span>
          <span className="event-page-card-info">12:30pm - 1:30pm</span>
        </div>
        <div className="event-page-card-back">
          <span className="event-page-card-title">Vision</span>
          <span className="event-page-card-info">
            Sed ut perspiciatis unde omnis iste uis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur?
          </span>
          <span className="event-page-card-prizes">Prizes : 3K</span>
          <button className="event-page-card-button">Register</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
