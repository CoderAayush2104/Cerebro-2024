
import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./pastYearCarousel.css"
function PastYearCarousel() {


  

  return (
    <div>
      <Carousel
          animationHandler= 'fade'
          infiniteLoop
          autoPlay
          interval={3000}
          transitionTime={500}
          width={window.innerWidth * 0.8}
      
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          showStatus={false}
        >
          <div className="slide-img">
            <img src={"/assets/astronaut.png"} />
          </div>
          <div className="slide-img">
            <img src={"/assets/astronaut2.png"} />
          </div>
          <div className="slide-img">
            <img src={"/assets/moon.png"} />
          </div>
     
        </Carousel>
    </div>
  );
}

export default PastYearCarousel;