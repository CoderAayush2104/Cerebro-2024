import React from 'react'
import instagram from "../assets/teams/instagram_white.svg"
import linkedIn from "../assets/teams/linkedin_white.svg"
import "./teamCard.css"
const TeamCard = ({imagePath}) => {
  return (
    <div className="team-card">
        <div className="team-card-photo">
            <img src={`/src/assets/teams/${imagePath}`} alt='profile'/>
        </div>
        <div className="team-card-title">Gadha</div>
        <div className="team-card-subtitle"> Ghode ke upar</div>
        <div className="team-card-socials">
            <img src={linkedIn} alt='LinkedIn'/>
            <img src={instagram} alt='Instagram'/>
        </div>
    </div>
  )
}

export default TeamCard