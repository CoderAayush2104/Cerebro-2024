
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./pastYearCarousel.css"
function PastYearCarousel() {


  const isMobileDevice = window.matchMedia("only screen and (max-width: 760px)").matches;

  return (
    <div>
      <Carousel
          animationHandler= 'fade'
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          width={isMobileDevice ? window.innerWidth * 0.8 : window.innerWidth * 0.6}
      
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
        >
          <div className="slide-img">
            <img src={"/assets/landing-page-carousel/1.jpg"} loading='lazy' />
          </div>
          <div className="slide-img">
            <img src={"/assets/landing-page-carousel/2.jpg"} loading='lazy' />
          </div>
          <div className="slide-img">
            <img src={"/assets/landing-page-carousel/3.jpg"} loading='lazy'/>
          </div>
          <div className="slide-img">
            <img src={"/assets/landing-page-carousel/4.jpg"} loading='lazy'/>
          </div>
     
        </Carousel>
    </div>
  );
}

export default PastYearCarousel;