import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.css';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/student/login', null, {
        params: {
          email: email,
          password: password,
          role: 'student',
        },
      });

      setMessage(response.data);

      if (response.data === "Student login successful") {
        // Store email in localStorage after successful login
        localStorage.setItem('userEmail', email);
        console.log(localStorage.getItem('userEmail'));
        // Navigate to the Student Home page
        navigate("/StudentHome");
      }
    } catch (error) {
      setMessage(' your login is not validated by the admin');
    }
  };

  return (
    <div className="login-page">
      <h2>Student Login</h2>

      <div className="user-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your student email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your student password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-button" onClick={handleLogin}>
          Login as Student
        </button>

        <p>{message}</p>

        {/* Add no-account section */}
        <p className="no-account">
          Don't have an account? <a href="/signup">Click here</a> to sign up.
        </p>
      </div>
    </div>
  );
};

export default StudentLogin;
