import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import '../Style/MyCourses.css';



import algebraImg from '../assets/images/Algebra.jpg';
import Apti from '../assets/images/Apti.png';
import Assem from '../assets/images/Assembling.jpeg';
import Linux from '../assets/images/Linux.jpeg';
import System from '../assets/images/System administration.jpeg';
import Computer from '../assets/images/Computer networking.jpeg';
import C from '../assets/images/C.jpeg';
import Physical from '../assets/images/Physical fitness.jpeg';
import Plc from '../assets/images/PLC.jpeg';
import Problem from '../assets/images/Problem.jpeg';
import welding from '../assets/images/welding.jpeg';
import Leadership from '../assets/images/Leadership.png';
import Ps from '../assets/images/Psassessment.png';
import IPR from '../assets/images/Ipr patent.jpeg';
import Yoga from '../assets/images/Yoga.jpeg';
import Prototype from '../assets/images/Prototype.png';
import Gp from '../assets/images/Gp.png';
import Daily from '../assets/images/Daily chalenge.jpeg';
import Creative from '../assets/images/Creative media.jpeg';
import Autonomy from '../assets/images/Autonomy.jpeg';
import Electrical from '../assets/images/Electrical wiring.jpeg';
import Electronics from '../assets/images/electronics.jpeg';

function MyCourse() {
  const [courses, setCourses] = useState([]);

 
  const imageMap = {
    'Algebra': algebraImg,
    'Aptitude': Apti,
    'Assembly and Dismantling': Assem,
    'Linux': Linux,
    'System Administration': System,
    'Computer Networking': Computer,
    'C programming': C,
    'Physical Fitness': Physical,
    'PLC - Gurugulam Assessment': Plc,
    'Problem Solving Skills - First Year': Problem,
    'Welding': welding,
    'Leadership': Leadership,
    'Ps Assessment - Brainstroming(2025-2029)': Ps,
    'IPR-Patent Search': IPR,
    'Physical Fitness-Yoga': Yoga,
    'Prototype_Gurugulam Assessment': Prototype,
    'Gp-Challenge': Gp,
    'Problem Solving Skills-Daily Challenge': Daily,
    'Creative Media': Creative,
    'Autonomy Affairs-Regulation': Autonomy,
    'Electrical Wiring - Gurugulam Assessment': Electrical,
    'Electronics - Gurugulam Assessment': Electronics
  };
 
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registeredLevels')) || [];

    const enriched = stored.map(level => {
      const baseTitle = level.title.split(' - Level')[0];
      return {
        ...level,
        image: imageMap[baseTitle] || Autonomy
      };
    });

    setCourses(enriched);
  }, []);

  return (
    <div className="mc-container">
      <Sidebar />
      <div className="mc-content">
        <h2>My Registered Levels</h2>
        {courses.length > 0 ? (
          <div className="mc-grid">
            {courses.map((course, index) => (
              <div key={index} className="mc-card">
                <img src={course.image} alt={course.title} className="mc-image" />
                <h3>{course.title}</h3>
                
              </div>
            ))}
          </div>
        ) : (
          <p>No levels registered yet.</p>
        )}
      </div>
    </div>
  );
}

export default MyCourse;
