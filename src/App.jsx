import React, { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import "./App.css"
import EventPage from "./pages/Events/EventPage"
import TeamPage from './pages/Teams/TeamPage';
import TimelinePage from './pages/Timeline/TimelinePage';

function App() {
 
  return (
    <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/teams" element={<TeamPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
