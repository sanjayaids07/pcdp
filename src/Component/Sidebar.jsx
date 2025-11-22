import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpen, FaListAlt, FaSignOutAlt } from 'react-icons/fa';
import '../Style/Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">PCDP</h2>

      <div className="sidebar-item" onClick={() => navigate('/available')}>
        <FaListAlt className="sidebar-icon" />
        <span className="sidebar-label">Available Courses</span>
      </div>

      <div className="sidebar-item" onClick={() => navigate('/mycourse')}>
        <FaBookOpen className="sidebar-icon" />
        <span className="sidebar-label">My Courses</span>
      </div>

      <div className="sidebar-item" onClick={() => navigate('/')}>
        <FaSignOutAlt className="sidebar-icon" />
        <span className="sidebar-label">Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;