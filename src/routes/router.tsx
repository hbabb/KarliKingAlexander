import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from '../modules/home';
import { Hobbies } from '../modules/hobbies';
import { Projects } from '../modules/projects';
import { Resume } from '../modules/resume';
import { Pdh } from '../modules/pdh';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/pdh" element={<Pdh />} />
    </Routes>
  </Router>
);

export default AppRouter;