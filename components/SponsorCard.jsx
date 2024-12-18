import React from 'react';
import FigmaImg from '../assets/sponsorsPage/FigmaImg.svg';
import Image from 'next/image';

function SponsorCard({title,Img,height,width}) {
  return (
    <div className="flex flex-col items-center justify-start">
      <Image src={Img||FigmaImg} width={width||200} height={height||100} alt="image" className="py-4 m-4" />
      <h1 className="text-xl text-center tracking-wide font-elevon text-white">{title||"TITLE SPONSORS"}</h1>
    </div>
  );
}

export default SponsorCard;
