import React from 'react'
import "./navbar.css"
import { Link,useLocation } from 'react-router-dom'
const Navbar = () => {

  const location = useLocation();

  return (
    <div className="navbar">
       {location.pathname !== "/" && 
        <span className="nav-item">
          <Link className='nav-link' to={"/"}>Home</Link>
        </span>
      }
      {location.pathname !== "/events" &&
        <span className="nav-item">
          <Link className='nav-link' to={"/events"}>Events</Link>
        </span>
      }
      {location.pathname !== "/timeline" &&
        <span className="nav-item">
          <Link className='nav-link' to={"/timeline"}>Timeline</Link>
        </span>
      }
      {location.pathname !== "/teams" &&
        <span className="nav-item">
          <Link className='nav-link' to={"/teams"}>Teams</Link>
        </span>
      }
      
    </div>
  )
}

export default Navbar