import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styleteacher/TeacherHome.css';

const TeacherHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/teacher-login');
  };

  const goToCourses = () => {
    navigate('/teacher/courses');
  };

  const goToProfile = () => {
    navigate('/teacher/profile');
  };

  return (
    <div className="teacher-home">
      <header className="teacher-header">
        <h1 className="header-title">Welcome to Teacher Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="teacher-actions">
        <button className="action-button" onClick={goToCourses}>
          Manage Courses
        </button>
        <button className="action-button" onClick={goToProfile}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default TeacherHome;
