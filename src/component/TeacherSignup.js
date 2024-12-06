import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/TeacherSignup.css';

const TeacherSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  const handleSignup = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('role', 'teacher'); // Role set to 'teacher'
      formData.append('profilePhoto', profilePhoto); // Profile photo file

      const response = await axios.post('http://localhost:8080/teacher/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data);

      // Redirect to teacher login page if registration is successful
      if (response.data === "Teacher registration successful") {
        navigate("/teacher-login");
      }
    } catch (error) {
      setMessage('Error occurred during teacher signup');
    }
  };

  return (
    <div className="signup-page">
      <h2>Teacher Signup</h2>

      <div className="user-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="profilePhoto">Profile Photo:</label>
        <input
          type="file"
          id="profilePhoto"
          name="profilePhoto"
          onChange={handleFileChange}
        />

        <button className="signup-button" onClick={handleSignup}>
          Sign Up as Teacher
        </button>

        <p>{message}</p>

        <p className="have-account">
          Already have an account? <a href="/teacher-login">Click here</a> to log in.
        </p>
      </div>
    </div>
  );
};

export default TeacherSignup;
