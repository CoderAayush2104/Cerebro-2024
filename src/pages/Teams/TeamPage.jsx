import {useState} from "react";
import Navbar from "../../components/Navbar";
import TeamCard from "../../components/TeamCard";
import "./styles/teamPage.css"
import teamData from "../../data/teams.json"
const TeamPage = () => {
  const [currentTab, setCurrentTab] = useState("Core");
  const renderTeamCards = () => {
    console.log(teamData);

    if (currentTab in teamData.teams) {
      return teamData.teams[currentTab].map((data, index) => (
        
        <TeamCard key={index} member={data}/>
      ));
    } else {
      return <div>No members available for this category</div>;
    }
  };
  return (
    <>
      <Navbar />
      <div className="team-page">
        <span className="team-page-title">Our Teams</span>
        <div className="team-page-navbar">
        <span
            className={`team-page-nav-item ${currentTab === "Core" ? "active" : ""}`}
            onClick={() => setCurrentTab("Core")}
          >
            Core
          </span>
 
          <span
            className={`team-page-nav-item ${currentTab === "Design" ? "active" : ""}`}
            onClick={() => setCurrentTab("Design")}
          >
            Design
          </span>
          <span
            className={`team-page-nav-item ${currentTab === "Web Dev" ? "active" : ""}`}
            onClick={() => setCurrentTab("Web Dev")}
          >
            Web Dev
          </span>
    
          
        </div>
        <div className="team-page-cards-container">
       
        {renderTeamCards()}
        
        </div>
      </div>
    </>
  );
};

export default TeamPage;
