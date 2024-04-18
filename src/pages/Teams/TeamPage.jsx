import React from "react";
import Navbar from "../../components/Navbar";
import TeamCard from "../../components/TeamCard";
import "./styles/teamPage.css"
const TeamPage = () => {
  return (
    <>
      <Navbar />
      <div className="team-page">
        <span className="team-page-title">Our Teams</span>
        <div className="team-page-navbar">
          <span className="team-page-nav-item">Core</span>
          <span className="team-page-nav-item">Core Support</span>
          <span className="team-page-nav-item">Sponsorship</span>
          <span className="team-page-nav-item">Design</span>
          <span className="team-page-nav-item">Web Dev</span>
          <span className="team-page-nav-item">Gaming</span>
        </div>
        <div className="team-page-cards-container">
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
          <TeamCard imagePath={"Akshat.jpg"} />
 
        
        </div>
      </div>
    </>
  );
};

export default TeamPage;
