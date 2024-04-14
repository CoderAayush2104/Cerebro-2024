import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./styles/eventPage.css";
import EventCard from "../../components/EventCard";
const EventPage = () => {
  return (
    <>
      <Navbar />
      <div className="event-page">
        <span className="event-page-title">Events</span>
        <div className="event-page-navbar">
          <span className="event-page-nav-item">Design</span>
          <span className="event-page-nav-item">Gaming</span>
          <span className="event-page-nav-item">Finance</span>
          <span className="event-page-nav-item">Technical</span>
        </div>
        <div className="event-page-cards-container">
          <EventCard imagePath={"event-info.png"} />
          <EventCard imagePath={"event-info.png"} />
          <EventCard imagePath={"event-info.png"} />
          <EventCard imagePath={"event-info.png"} />
        </div>
      </div>
    </>
  );
};

export default EventPage;
