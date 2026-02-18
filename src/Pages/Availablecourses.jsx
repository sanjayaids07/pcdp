import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Component/Sidebar';
import '../Style/Availablecourses.css';

// Corrected image imports (matching your exact folder names)
import algebraImg from '../assets/images/algebra.jpg';
import Apti from '../assets/images/apti.png';
import Assem from '../assets/images/assembling.jpeg';
import Linux from '../assets/images/linux.jpeg';
import System from '../assets/images/system-administration.jpeg';
import Computer from '../assets/images/computer-networking.jpeg';
import C from '../assets/images/c.jpeg';
import Physical from '../assets/images/physical-fitness.jpeg';
import Plc from '../assets/images/plc.jpeg';
import Problem from '../assets/images/problem.jpeg';
import Welding from '../assets/images/welding.jpeg';
import Leadership from '../assets/images/leadership.png';
import Ps from '../assets/images/ps-assessment.png';
import IPR from '../assets/images/ipr-patent.jpeg';
import Yoga from '../assets/images/yoga.jpeg';
import Prototype from '../assets/images/prototype.png';
import Gp from '../assets/images/gp.png';
import Daily from '../assets/images/daily-challenge.jpeg';
import Creative from '../assets/images/creative-media.jpeg';
import Autonomy from '../assets/images/autonomy.jpeg';
import Electrical from '../assets/images/electrical-wiring.jpeg';
import Electronics from '../assets/images/electronics.jpeg';

const courses = [
  { title: 'Algebra', levels: 2, difficulty: 'Beginner', progress: 1, category: 'Math', image: algebraImg },
  { title: 'Aptitude', levels: 12, difficulty: 'Beginner', progress: 0, category: 'Logic', image: Apti },
  { title: 'Assembly and Dismantling', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Mechanical', image: Assem },
  { title: 'Prototype_Gurugulam Assessment', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Prototype },
  { title: 'Linux', levels: 4, difficulty: 'Beginner', progress: 0, category: 'Math', image: Linux },
  { title: 'System Administration', levels: 3, difficulty: 'Beginner', progress: 0, category: 'Logic', image: System },
  { title: 'Computer Networking', levels: 4, difficulty: 'Beginner', progress: 0, category: 'Mechanical', image: Computer },
  { title: 'C programming', levels: 7, difficulty: 'Beginner', progress: 1, category: 'Regulations', image: C },
  { title: 'Physical Fitness', levels: 4, difficulty: 'Beginner', progress: 0, category: 'Math', image: Physical },
  { title: 'Problem Solving Skills-Daily Challenge', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Logic', image: Daily },
  { title: 'Leadership', levels: 4, difficulty: 'Beginner', progress: 0, category: 'Mechanical', image: Leadership },
  { title: 'IPR-Patent Search', levels: 2, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: IPR },
  { title: 'PLC - Gurugulam Assessment', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Math', image: Plc },
  { title: 'Welding', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Logic', image: Welding },
  { title: 'Physical Fitness-Yoga', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Mechanical', image: Yoga },
  { title: 'Ps Assessment - Brainstroming(2025-2029)', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Ps },
  { title: 'Problem Solving Skills - First Year', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Problem },
  { title: 'Electronics - Gurugulam Assessment', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Electronics },
  { title: 'Gp-Challenge', levels: 2, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Gp },
  { title: 'Creative Media', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Creative },
  { title: 'Autonomy Affairs-Regulation', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Autonomy },
  { title: 'Electrical Wiring - Gurugulam Assessment', levels: 1, difficulty: 'Beginner', progress: 0, category: 'Regulations', image: Electrical },
];

function AvailableCourses() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [sort, setSort] = useState('Name');
  const navigate = useNavigate();

  const filteredCourses = courses
    .filter(course =>
      (category === 'All Categories' || course.category === category) &&
      course.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'Name') return a.title.localeCompare(b.title);
      if (sort === 'Progress') return (b.progress / b.levels) - (a.progress / a.levels);
      return 0;
    });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <div className="course-page">
          <div className="search-header">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />

            <select value={category} onChange={(e) => setCategory(e.target.value)} className="dropdown">
              <option>All Categories</option>
              <option>Math</option>
              <option>Logic</option>
              <option>Mechanical</option>
              <option>Regulations</option>
            </select>

            <select value={sort} onChange={(e) => setSort(e.target.value)} className="dropdown">
              <option>Name</option>
              <option>Progress</option>
            </select>
          </div>

          <h2 className="course-title">Courses Available</h2>

          <div className="course-grid">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="course-card"
                onClick={() => navigate('/course-detail', { state: { course } })}
              >
                <img src={course.image} alt={course.title} className="course-img" />

                <h3>{course.title}</h3>

                <div className="course-name">
                  <p>Levels: {course.levels}</p>
                  <p>{course.difficulty}</p>
                </div>

                <div className="progress-bar">
                  {Array.from({ length: course.levels }).map((_, i) => (
                    <div
                      key={i}
                      className={`progress-segment ${i < course.progress ? 'filled' : ''}`}
                    ></div>
                  ))}
                </div>

                <p className="progress-text">
                  {course.progress}/{course.levels} levels &nbsp;|&nbsp;
                  {Math.round((course.progress / course.levels) * 100)}%
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AvailableCourses;

