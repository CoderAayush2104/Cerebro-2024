import React from 'react'
import "./styles/pastYear.css"
import PastYearCarousel from '../../components/PastYearCarousel'
const PastYear = () => {
 
  return (
    <div className="past-year-section">
        <span className="past-year-title">Past Year Glimpses</span>
       <PastYearCarousel/>
        
    </div>
  )
}

export default PastYear