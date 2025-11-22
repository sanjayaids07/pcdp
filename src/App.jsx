import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import MyCourse from './Pages/Mycourse'
   import CourseDetail from './Pages/Course Details';
import AvailableCourses from './Pages/Availablecourses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mycourse" element={<MyCourse />} />
      

        <Route path="/available" element={<AvailableCourses />} />
     
<Route path="/course-detail" element={<CourseDetail />} />
      </Routes>
    </Router>
  );
}

export default App; 