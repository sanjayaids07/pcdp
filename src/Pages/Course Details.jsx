import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import '../Style/CourseDetails.css';

function CourseDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state?.course;
  const username = location.state?.username;
  const [registeredLevels, setRegisteredLevels] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('registeredLevels')) || [];
    setRegisteredLevels(stored.map(item => item.title));
  }, []);

  const handleRegister = (level) => {
    const stored = JSON.parse(localStorage.getItem('registeredLevels')) || [];
    const levelData = {
      ...course,
      title: level.title,
      level: level.level,
      username: username
    };
    const updated = [...stored, levelData];
    localStorage.setItem('registeredLevels', JSON.stringify(updated));
    setRegisteredLevels(updated.map(item => item.title));
    navigate('/mycourse', { state: { username } });
  };

  if (!course) return <p>Course not found</p>;

  let levelCount = 1;
  if (course.title === 'Algebra') levelCount = 2;
  else if (course.title === 'Aptitude') levelCount = 12;
  else if (course.title === 'Assembly and Dismantling') levelCount = 1;
  else if (course.title === 'Autonomy Affairs-Regulation') levelCount = 1;
  else if (course.title === 'C programming') levelCount = 7;
  else if (course.title === 'Computer Networking') levelCount = 4;
  else if (course.title === 'Creative Media') levelCount = 1;
  else if (course.title === 'Electrical Wiring - Gurugulam Assessment') levelCount = 1;
  else if (course.title === 'Electronics - Gurugulam Assessment') levelCount = 1;
  else if (course.title === 'Gp-Challenge') levelCount = 2;
  else if (course.title === 'IPR-Patent Search') levelCount = 2;
  else if (course.title === 'Leadership') levelCount = 4;
  else if (course.title === 'Linux') levelCount = 4;
  else if (course.title === 'Physical Fitness') levelCount = 4;
  else if (course.title === 'Physical Fitness-Yoga') levelCount = 1;
  else if (course.title === 'PLC - Gurugulam Assessment') levelCount = 1;
  else if (course.title === 'Problem Solving Skills - First Year') levelCount = 1;
  else if (course.title === 'Problem Solving Skills-Daily Challenge') levelCount = 1;
  else if (course.title === 'Prototype_Gurugulam Assessment') levelCount = 1;
  else if (course.title === 'Ps Assessment - Brainstroming(2025-2029)') levelCount = 1;
   else if (course.title === 'System Administration') levelCount = 3;
  else if (course.title === 'Welding') levelCount = 1;
  


  const levelBoxes = Array.from({ length: levelCount }, (_, i) => ({
    title: `${course.title} - Level ${i + 1}`,
    level: i + 1,
    image: course.image,
    rewards: course.rewards,
    preRequest: course.preRequest,
    assessmentType: course.assessmentType
  }));

  return (
    <div style={{ display: 'flex', flexGrow: 1 }}>
      <Sidebar />
      <div className="cd-container">
        <h2>{course.title} Course Levels</h2>

        {levelBoxes.map((level, index) => {
          const isRegistered = registeredLevels.includes(level.title);
          const previousLevelTitle = levelBoxes[index - 1]?.title;
          const isPreviousRegistered = index === 0 || registeredLevels.includes(previousLevelTitle);

          return (
            <div key={index} className="cd-box">
              <div className="cd-title-section">
                <div>
                  <h2>{level.title}</h2>
                  <p>Level: {level.level} 🔒 Beginner</p>
                </div>
                <img src={level.image} alt={level.title} />
              </div>

              <div className="cd-card">
                <div className="cd-meta-side">
                  <div className="cd-meta-item"><strong>With Rewards</strong> ⏣ {level.rewards}</div>
                  <div className="cd-meta-item"><strong>Pre Request</strong> {level.preRequest}</div>
                  <div className="cd-meta-item"><strong>Assessment Type</strong> {level.assessmentType}</div>
                </div>
              </div>

              {!isRegistered && isPreviousRegistered ? (
                <button className="cd-button" onClick={() => handleRegister(level)}>
                  Register
                </button>
              ) : isRegistered ? (
                <p className="cd-registered-message">Already Registered ✅</p>
              ) : (
                <p className="cd-locked-message">Complete previous level to unlock</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseDetail;


