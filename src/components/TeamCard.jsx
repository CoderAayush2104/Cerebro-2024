import React from 'react'
import instagram from "/assets/teams/instagram_white.svg"
import linkedIn from "/assets/teams/linkedin_white.svg"
import "./teamCard.css"
const TeamCard = ({imagePath}) => {
  return (
    <div className="team-card">
        <div className="team-card-photo">
            <img src={`/assets/teams/members/${imagePath}`} alt='profile' loading="lazy"/>
        </div>
        <div className="team-card-title">Akshat Patel</div>
        <div className="team-card-subtitle">President</div>
        <div className="team-card-socials">
            <img src={linkedIn} alt='LinkedIn'/>
            <img src={instagram} alt='Instagram'/>
        </div>
    </div>
  )
}

export default TeamCard