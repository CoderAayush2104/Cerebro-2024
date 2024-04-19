import React from 'react'
import { Link } from 'react-router-dom'
import instagram from "/assets/teams/instagram_white.svg"
import linkedIn from "/assets/teams/linkedin_white.svg"
import "./teamCard.css"
const TeamCard = ({member}) => {
  return (
    <div className="team-card">
        <div className="team-card-photo">
            <img src={`/assets/teams/members/${member.profile_image}`} alt='profile' loading="lazy"/>
        </div>
        <div className="team-card-title">{member.name}</div>
        <div className="team-card-subtitle"></div>
        <div className="team-card-socials">
          <Link className="socials-link" to={`${member.linkedin}`} replace><img src={linkedIn} alt='LinkedIn'/></Link>
            <Link className="socials-link" to={`${member?.instagram}`} replace> <img src={instagram} alt='Instagram'/></Link>
           
        </div>
    </div>
  )
}

export default TeamCard