// src/component/teacher/TeacherHome.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleteacher/TeacherHome.css';

const TeacherHome = () => {
  const [teacherEmail, setTeacherEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the email from local storage
    const email = localStorage.getItem('teacherEmail');
    if (email) {
      setTeacherEmail(email);
    } else {
      // Redirect to login if email is not found
      navigate('/teacher-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear local storage and navigate to login
    localStorage.removeItem('teacherEmail');
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
        <p className="teacher-email">Logged in as: {teacherEmail}</p>
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
