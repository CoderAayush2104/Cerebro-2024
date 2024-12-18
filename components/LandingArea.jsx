'use client';
import React, { useEffect, useRef, useState } from 'react';
import cli2 from '../assets/LandingArea/cli1.svg';
import cli3 from '../assets/LandingArea/cli2.svg';
import cli4 from '../assets/LandingArea/cli3.svg';
import cli5 from '../assets/LandingArea/cli4.svg';
import cli1 from '../assets/LandingArea/cli5.svg';
import coi from '../assets/LandingArea/COIMainTextt.svg';
import cyborg from '../assets/LandingArea/Cyborg.png';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import UnleashBanner from "../assets/LandingArea/UnleashBanner.svg";

gsap.registerPlugin(ScrollTrigger);

const desktopImages = [cli1, cli2, cli3, cli4, cli5];

function LandingArea() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const imageRefs = useRef([]);
  const topLayerRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    gsap.utils.toArray(imageRefs.current).forEach((el, index) => {
      gsap.fromTo(el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
    });

    gsap.utils.toArray(topLayerRefs.current).forEach((el, index) => {
      gsap.fromTo(el,
        { y: 0 },
        {
          y: 100 * (index + 1),
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile, isTablet]);

  return (
    <div className="relative min-h-[80vh]">
      {/* Top Layer */}
      <div className="absolute inset-0 topLayer z-0 ">
        <div className="absolute w-screen content-center top-0 left-0 h-full flex flex-col items-center justify-center">
          <div className="relative w-full h-full flex justify-center items-center ">
            <Image
              src={cyborg}
              alt="Cyborg"
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
          <div className="absolute w-screen inset-0 bg-gradient-to-b from-transparent to-[#212121]"></div>
          <div className={`relative w-screen h-auto bg-white items-center flex max-md:scale-125`}>
            <Image src={UnleashBanner} alt="ub" className="object-contain" objectFit="contain" />
          </div>
        </div>
        <div
          className="absolute bottom-0 right-0 w-full h-full flex justify-center items-center translate-y-10 "
          ref={(el) => (topLayerRefs.current[1] = el)}
        >
          <Image
            src={coi}
            alt="COI"
            layout="fill"
            objectFit="contain"
            className="object-contain  translate-y-3"
          />
        </div>
      </div>

      {/* Bottom Layer */}
      <div className="relative -z-10 flex flex-col justify-center ">
        {desktopImages.map((image, index) => (
          <motion.div
            key={index}
            className="p-6 max-[1050px]:px-3 "
            ref={(el) => (imageRefs.current[index] = el)}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <Image
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default LandingArea;
