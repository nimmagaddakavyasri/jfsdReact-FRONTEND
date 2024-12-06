import React from 'react';
import './styleStudent/StudentSidebar.css';
import { Link } from 'react-router-dom';

const StudentSidebar = () => {
  return (
    <div className="student-sidebar">
      <h2>Quick Links</h2>
      <ul>
        <li><Link to="/student/my-courses">My Courses</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/grades">Grades</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/contact">Contact Support</Link></li>
      </ul>
    </div>
  );
};

export default StudentSidebar;
