import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.css';

const TeacherLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/teacher/login', null, {
        params: {
          email: email,
          password: password,
          role: 'teacher',
        },
      });

      setMessage(response.data);

      if (response.data === "Teacher login successful") {
        navigate("/TeacherHome");
      }
    } catch (error) {
      setMessage('Error occurred during teacher login');
    }
  };

  return (
    <div className="login-page">
      <h2>Teacher Login</h2>

      <div className="user-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your teacher email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your teacher password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-button" onClick={handleLogin}>
          Login as Teacher
        </button>

        <p>{message}</p>

        <p className="no-account">
          Don't have an account? <a href="/teacher-signup">Click here</a> to sign up.
        </p>
      </div>
    </div>
  );
};

export default TeacherLogin;
