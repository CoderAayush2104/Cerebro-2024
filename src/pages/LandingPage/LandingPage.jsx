import React from 'react'
import HeroSection from './HeroSection'
import "./styles/landingPage.css"
import RegisterHeroSection from './RegisterHeroSection'
import Footer from './Footer'
import PastYear from './PastYear'
import TimelineSection from './TimelineSection'
const LandingPage = () => {
  return (
    <div className='landing-page'>
        
        <HeroSection/>
        <RegisterHeroSection/>
        <TimelineSection/>
        <PastYear/>
        <Footer/>
        
    </div>
    
  )
}

export default LandingPage