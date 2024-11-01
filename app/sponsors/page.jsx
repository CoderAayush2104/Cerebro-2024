import Image from "next/image";
import React from "react";
import SponsorCard from '../../components/SponsorCard';
import Cubelelo from '../../assets/sponsorsPage/Cubelelo_Logo_HR4.png';
import Evelelo_Light from '../../assets/sponsorsPage/Evepaper_Light.png';
import JDoodle from '../../assets/sponsorsPage/JDoodle_Logo_JPEG.jpg';
import Noticebard from '../../assets/sponsorsPage/noticebard.png';
import SF from '../../assets/sponsorsPage/SF_Logo_White.png';
import InterviewBuddy from '../../assets/sponsorsPage/InterviewBuddy_Logo_updated_White_BG.png'
const sponsorPage=()=>{

    return(
        <div className="py-8 w-full h-auto container mx-auto px-4 rounded-2xl" >
            <div className="flex space-y-4 flex-col content-center justify-center items-center ">
                <div className="text-3xl text-orange-500 underline">Event Sponsor</div>
               <SponsorCard title="Cubelelo" Img={Cubelelo} width={200}/> 
               <SponsorCard title="Interview Buddy" Img={InterviewBuddy} width={200}/>  
               <SponsorCard title="JDoodle" Img={JDoodle} width={200}/> 
                <div className="text-3xl mt-4 text-purple-400 underline pt-16">Media Partner</div>
               <SponsorCard title="EVEPAPER" Img={Evelelo_Light} width={200}/> 
               <SponsorCard title="Noticebard" Img={Noticebard} width={200}/> 
                <div className="text-3xl mt-4 text-orange-500 underline pt-16">Merch Partner</div>
               <SponsorCard title="Stubborn Factory" Img={SF} width={200}/> 
            </div>
        </div>
    )
}

export default sponsorPage;