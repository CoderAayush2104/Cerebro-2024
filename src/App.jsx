import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import "./App.css"
import EventPage from "./pages/Events/EventPage"
import TeamPage from './pages/Teams/TeamPage';
import TimelinePage from './pages/Timeline/TimelinePage';
import Loading from './components/Loading';
function App() {
  const [loading,setLoading] = useState(true);
  setTimeout(() => setLoading(false),3000);
  return (
    <BrowserRouter> 
    {loading ? (
      <Loading/>
    ) : (

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
    )}
    
    </BrowserRouter>
  );
}

export default App;
