// src/component/teacher/TeacherProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleteacher/TeacherProfile.css'; // Make sure to style accordingly

const TeacherProfile = () => {
  const [teacherProfile, setTeacherProfile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const email = localStorage.getItem('teacherEmail');
      if (!email) {
        // Redirect to login if the teacher email is not found
        window.location.href = '/teacher-login';
      }
  
      try {
        const response = await axios.get(`http://localhost:8080/teacher/profile/${email}`);
        console.log(response.data); // Log the data to check if it includes department and phone
        setTeacherProfile(response.data);
      } catch (err) {
        setError('Failed to load profile data');
      }
    };
  
    fetchProfile();
  }, []);
  

  return (
    <div className="teacher-profile">
      <h1>Teacher Profile</h1>
      {error && <p className="error-message">{error}</p>}

      {teacherProfile ? (
        <div className="profile-details">
          <p><strong>Email:</strong> {teacherProfile.email}</p>
          <p><strong>Name:</strong> {teacherProfile.name}</p>
         
          <p><strong>Phone:</strong> {teacherProfile.phone}</p>
          <p><strong>Role:</strong> {teacherProfile.role}</p>
          <p><strong>Accepted:</strong> {teacherProfile.accept ? 'Yes' : 'No'}</p>
          <p><strong>Profile Photo:</strong> <img src={teacherProfile.profilePhoto} alt="Profile" width="100" /></p>
          {/* Add other details as needed */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default TeacherProfile;
