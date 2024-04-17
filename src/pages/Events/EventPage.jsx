import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";
import "./styles/eventPage.css";
import EventCard from "../../components/EventCard";
import eventData from "../../data/events.json";
const EventPage = () => {
  const [currentTab, setCurrentTab] = useState("Technical");
  const renderEventCards = () => {
    if (currentTab in eventData.events) {
      return eventData.events[currentTab].map((data, index) => (
        
        <EventCard key={index} event={data} />
      ));
    } else {
      return <div>No events available for this category</div>;
    }
  };

  return (
    <>
      <Navbar />
      <div className="event-page">
        <span className="event-page-title">Events</span>
        <div className="event-page-navbar">
        <span
            className={`event-page-nav-item ${currentTab === "Technical" ? "active" : ""}`}
            onClick={() => setCurrentTab("Technical")}
          >
            Technical
          </span>
          <span
            className={`event-page-nav-item ${currentTab === "Finance" ? "active" : ""}`}
            onClick={() => setCurrentTab("Finance")}
          >
            Finance
          </span>
          <span
            className={`event-page-nav-item ${currentTab === "Robotics" ? "active" : ""}`}
            onClick={() => setCurrentTab("Robotics")}
          >
            Robotics
          </span>
          <span
            className={`event-page-nav-item ${currentTab === "Design" ? "active" : ""}`}
            onClick={() => setCurrentTab("Design")}
          >
            Design
          </span>
          <span
            className={`event-page-nav-item ${currentTab === "Gaming" ? "active" : ""}`}
            onClick={() => setCurrentTab("Gaming")}
          >
            Gaming
          </span>
          <span
            className={`event-page-nav-item ${currentTab === "Maths" ? "active" : ""}`}
            onClick={() => setCurrentTab("Maths")}
          >
            Maths
          </span>
        </div>
        <div className="event-page-cards-container">
        {renderEventCards()}
        </div>
      </div>
    </>
  );
};

export default EventPage;
