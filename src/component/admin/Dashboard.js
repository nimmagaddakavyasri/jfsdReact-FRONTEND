// src/component/admin/Dashboard.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import '../../style/AdminDashboard.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [acceptedStudents, setAcceptedStudents] = useState([]);
  const [offeredCourses, setOfferedCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAcceptedStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/student/acceptedStudents'); // Adjust endpoint as needed
        setAcceptedStudents(response.data);
      } catch (err) {
        console.error('Error fetching accepted students', err);
      }
    };

    const fetchOfferedCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/offered'); // Adjust endpoint for offered courses
        setOfferedCourses(response.data);
      } catch (err) {
        console.error('Error fetching offered courses', err);
      }
    };

    fetchAcceptedStudents();
    fetchOfferedCourses();
  }, []);

  const handleStudentCardClick = () => {
    navigate('/admin/accepted-students');
  };

  const handleAddCourseCardClick = () => {
    navigate('/admin/add-course'); // Navigate to the Add Course page
  };

  const handleOfferedCoursesCardClick = () => {
    navigate('/admin/offered-courses'); // Navigate to the Offered Courses page
  };

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard.</p>

        {/* Card for accepted students */}
        <div className="dashboard-card" onClick={handleStudentCardClick} style={{ cursor: 'pointer' }}>
          <h2>Accepted Students</h2>
          <p>Total Accepted: {acceptedStudents.length}</p>
        </div>

        {/* Card for adding a course */}
        <div className="dashboard-card" onClick={handleAddCourseCardClick} style={{ cursor: 'pointer' }}>
          <h2>Add a Course</h2>
          <p>Click to add a new course to the system.</p>
        </div>

        {/* Card for offered courses */}
        <div className="dashboard-card" onClick={handleOfferedCoursesCardClick} style={{ cursor: 'pointer' }}>
          <h2>Offered Courses</h2>
          <p>Total Offered: {offeredCourses.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
