import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import VisionPlan from './Components/VisionPlan';
import Objectives from './Components/Objectives';
import Divisions from './Components/Divisions';
import Leadership from './Components/Leadership';
import Contact from './Components/Contact';
import Layout from './Components/Layout';
import Foundation from './Components/Foundation';
import Calendar from './Components/Calendar';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/vision-plan" element={<VisionPlan />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/foundation" element={<Foundation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
