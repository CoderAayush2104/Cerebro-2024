import React from "react";
import "./timeLine.css";
import Navbar from "../../components/Navbar";
import timeLine from "../../data/timeline.json"
const TimelinePage = () => {
	const renderEventCards = () => {
	
	
	
		return timeLine.map((event,index) =>(
		
				<li className="hex-grid__item" key={index}>
					<div className="hex-grid__content">
						<span className="timeline-event-title">{event.title}</span>
						<span className="timeline-event-date">{event.timings}</span>
					</div>
				</li>
			)
		);
	}
	
  return (
    <div className="timeline-page">
      <Navbar />
      <span className="timeline-title">Timeline</span>
      <ul className="hex-grid__list">
			{renderEventCards()}
      </ul>
    </div>
  );
};

export default TimelinePage;
