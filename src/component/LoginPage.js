import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../style/LoginPage.css';

const LoginPage = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);

    // Redirect to respective login pages based on selected role
    if (selectedRole === 'student') {
      navigate('/student-login');
    } else if (selectedRole === 'teacher') {
      navigate('/teacher-login');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/admin/login', null, {
        params: {
          email: email,
          password: password,
          role: role,
        },
      });

      setMessage(response.data);

      if (response.data === "Login successful!") {
        navigate("/admin-home");
      }
    } catch (error) {
      setMessage('Error occurred during login');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      <div className="login-form">
        <label htmlFor="role">Select Role:</label>
        <select id="role" value={role} onChange={handleSelectChange}>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      {role === 'admin' && (
        <div className="user-form">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="login-button" onClick={handleLogin}>
            Login as Admin
          </button>

          <p>{message}</p>

          <p className="no-account">
            Don't have an account? <a href="/signup">Click here</a> to sign up.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
