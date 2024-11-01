"use client";
import React, { useState } from 'react';
import ProfileCard from "../../components/ProfileCard";
import { motion } from "framer-motion";

function Team() {
  const [activeEvent, setActiveEvent] = useState("Inst. Management");

  const eventHandler = (eventName) => {
    setActiveEvent(eventName);
  };

  return (
    <div className="px-4 pb-16">
      <div className='flex flex-col items-center mt-4'>
        <h1 className='text-white text-3xl md:text-4xl'>OUR TEAM</h1>
        <div className="flex flex-wrap justify-center space-x-3 space-y-2">
          {["Inst. Management",
            "Presidents",
            "Web Dev Team",
            "Sponsorship Team",
            "Public Relation Team",
            "Logistics Team",
            "On-Ground Team",
            "Design Team",
          ].map((event) => (
            <button
              key={event}
              className={` text-lg md:text-xl px-3 py-2 md:px-4 md:py-2 rounded-md ${activeEvent === event ? "underline underline-offset-4 text-black bg-white rounded-lg shadow-white shadow-md button-active" : ""}`}
              onClick={() => eventHandler(event)}
            >
              {event}
            </button>
          ))}
        </div>
      </div>

      {/* Presidents*/}
      {activeEvent === 'Inst. Management' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Dr. Dharmendra Singh ", position: "DIRECTOR" },
              { name: "Dr. Ajay Nath", position: " Associate Dean Student Affairs" },
              { name: "Dr. Ravi Nahta", position: "PIC" },
              { name: "Dr. Naveen Kumar", position: "Former PIC" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="Inst_Mgmt"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {activeEvent === 'Presidents' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Vaibhav Jonwal", position: "GYMKHAHA" },
              { name: "Amon Sharma", position: "TECH. COMMITTEE" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="web_dev"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Sponsorship Team*/}
      {activeEvent === 'Sponsorship Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Tushant Akar", position: "LEAD" },
              { name: "Yatharth Shivhare", position: "LEAD" },
              { name: "Ziyan Solkar", position: "Co-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="sponsorship"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Anuj Saha", position: "Member" },
              { name: "Karan Lokchandani", position: "Member" },
              { name: "Anika Garg", position: "Member" },
              { name: "Vinit Khandelwal", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="sponsorship"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* Design Team */}
      {activeEvent === 'Design Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Amon Sharma", position: "LEAD" },
              { name: "Rishabh Ahlawat", position: "LEAD" },
              { name: "Mhd. Anas", position: "CO-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="design"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Devyash Saini", position: "Member" }, 
              { name: "Shreetej Meshram", position: "Member" },
              { name: "Srushti Chewale", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="design"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* On-Ground Team */}
      {activeEvent === 'On-Ground Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Kunj Thakkar", position: "LEAD" },
              { name: "Dhruv Sachdeva", position: "LEAD" },
              { name: "Karan", position: "Host / Co-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="on_ground"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Ansh", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="on_ground"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* Logistics Team*/}
      {activeEvent === 'Logistics Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Sanket Trivedi", position: "LEAD" },
              { name: "Maurya Patel", position: "LEAD" },
              { name: "Devanshi", position: "CO-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="logistics"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Karan", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="logistics"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/*Public Relation Team*/}
      {activeEvent === 'Public Relation Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Shubham Gupta", position: "LEAD" },
              { name: "Palkush Dave", position: "LEAD" },
              { name: "Anuj Saha", position: "CO-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="public_relations"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[ 
              { name: "Mohmed Husain", position: "Member" },
              { name: "Aishna Bhatia", position: "Member" },
              { name: "Nitin Kumar", position: "Member" },
              { name: "Vinay Saini", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="public_relations"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {/* Web Dev Team */}
      {activeEvent === 'Web Dev Team' && (
        <div>
          <div className='flex flex-wrap justify-center mt-10 px-4 md:px-8'>
            {[ 
              { name: "Amon Sharma", position: "LEAD" },
              { name: "Kaustubh Duse", position: "LEAD" },
              { name: "Devyash Saini", position: "CO-LEAD" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="web_dev"
                />
              </motion.div>
            ))}
          </div>
          <div className='flex flex-wrap justify-center mt-10 gap-4'>
            {[
              { name: "Jaydeep Bejoy", position: "Member" },
              { name: "Ansh", position: "Member" },
              { name: "Soham Haldar", position: "Member" },
              { name: "Prateek", position: "Member" },
            ].map((profile, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProfileCard
                  name={profile.name}
                  position={profile.position}
                  team="web_dev"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Team;