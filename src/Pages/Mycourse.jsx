import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import '../Style/MyCourses.css';

// Corrected image imports (matching your exact filenames)
import algebraImg from '../assets/images/algebra.jpg';
import Apti from '../assets/images/apti.png';
import Aptitude from '../assets/images/aptitude.jpeg';
import Assem from '../assets/images/assembling.jpeg';
import Autonomy from '../assets/images/autonomy.jpeg';
import C from '../assets/images/c.jpeg';
import Computer from '../assets/images/computer-networking.jpeg';
import Creative from '../assets/images/creative-media.jpeg';
import Daily from '../assets/images/daily-challenge.jpeg';
import Electrical from '../assets/images/electrical-wiring.jpeg';
import Electronics from '../assets/images/electronics.jpeg';
import Gp from '../assets/images/gp.png';
import Ipr from '../assets/images/ipr-patent.jpeg';
import Leadership from '../assets/images/leadership.png';
import Linux from '../assets/images/linux.jpeg';
import Pcdp from '../assets/images/pcdp.png';
import Physical from '../assets/images/physical-fitness.jpeg';
import Plc from '../assets/images/plc.jpeg';
import Problem from '../assets/images/problem.jpeg';
import Prototype from '../assets/images/prototype.png';
import Ps from '../assets/images/ps-assessment.png';
import System from '../assets/images/system-administration.jpeg';
import Welding from '../assets/images/welding.jpeg';

function MyCourse() {
  const [courses, setCourses] = useState([]);

  const imageMap = {
    'Algebra': algebraImg,
    'Aptitude': Aptitude,
    'Aptitude Test': Apti,
    'Assembly and Dismantling': Assem,
    'Autonomy Affairs-Regulation': Autonomy,
    'C programming': C,
    'Computer Networking': Computer,
    'Creative Media': Creative,
    'Problem Solving Skills-Daily Challenge': Daily,
    'Electrical Wiring - Gurugulam Assessment': Electrical,
    'Electronics - Gurugulam Assessment': Electronics,
    'Gp-Challenge': Gp,
    'IPR-Patent Search': Ipr,
    'Leadership': Leadership,
    'Linux': Linux,
    'PCDP Logo': Pcdp,
    'Physical Fitness': Physical,
    'PLC - Gurugulam Assessment': Plc,
    'Problem Solving Skills - First Year': Problem,
    'Prototype_Gurugulam Assessment': Prototype,
    'Ps Assessment - Brainstroming(2025-2029)': Ps,
    'System Administration': System,
    'Welding': Welding
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registeredLevels')) || [];

    const enriched = stored.map(level => {
      const baseTitle = level.title.split(' - Level')[0];
      return {
        ...level,
        image: imageMap[baseTitle] || Pcdp  // fallback image
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
