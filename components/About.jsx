"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import portal from '../assets/LandingArea/gif.gif';
import Carousel from './Carousel'; // Import the Carousel component

function About() {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-11-11T00:00:00'); // November 11, 2024
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className='flex flex-col lg:flex-row content-center items-center justify-center bg-[#212121] w-screen px-28 max-lg:p-12 max-lg:px-4'>
        {/* Animate the portal image */}
        <motion.div 
          className='w-full flex lg:w-[30%] min-h-[auto] lg:min-h-screen items-center justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={portal}
            width={300}
            height={300}
            alt="Cerebro Logo"
            className="mb-4"
          />
        </motion.div>

        {/* Animate text section */}
        <motion.div 
          className='w-full flex-col flex lg:w-[70%] min-h-[auto] px-20 max-lg:px-4'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <motion.p 
            className='text-white pb-4 max-lg:text-6xl text-7xl'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            The Beta Test
          </motion.p>

          <div className='w-full h-[3px] bg-white mt-6'></div>

          <motion.div 
            className='py-4 text-sm font-inter mb-3'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Back in 2013, Cerebro was like a beta test of epic proportions. No one really knew what they were doing (not that anyone would admit it), but everyone was excited to finally have a technical fest to call their own. It was the dawn of the Wi-Fi struggle, where students tested both their knowledge and their patience. Ideas clashed, laptops crashed, and the coffee machines worked harder than anyone else. Little did we know, this chaotic trial run would evolve into the intellectual showdown we proudly host today!
          </motion.div>

          <div className='w-full h-[3px] mb-12 bg-white'></div>

          {/* Use the Carousel component here */}
          <Carousel />
        </motion.div>
      </div>

      {/* Timer Section with CTA Buttons */}
      <div className='w-screen h-auto text-black bg-white text-center p-8'>
        <h2 className="text-2xl font-bold mb-4">Countdown to November 11, 2024</h2>
        <p className="text-6xl">
          {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </p>
        <h2 className="text-2xl font-bold mb-4 my-8 text-orange-500">Online : 11th - 15th Novemeber 2024</h2>
        <h2 className="text-2xl font-bold mb-4 text-purple-500">Offline : 16th - 17th Novemeber 2024</h2>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          {/* Register Now Button */}
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
            onClick={() => window.location.href = 'https://unstop.com/college-fests/cerebro-2024-25-indian-institute-of-information-technology-vadodara-267990'} // Adjust the URL as needed
          >
            Register Now
          </button>

          {/* Download Brochure Button (Purple) */}
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
            onClick={() => window.location.href = 'https://drive.google.com/file/d/16x9fMMO8RyCaLbgWv58bT60NN0Q_5IsK/view?usp=sharing'} // Adjust URL or download path as needed
          >
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
