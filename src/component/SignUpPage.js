import React, { useState } from 'react';
import '../style/SignUpPage.css';

const SignUpPage = () => {
  const [role, setRole] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSelectChange = (event) => {
    setRole(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object for multipart form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);
    
    // If an image file is selected, append it to the FormData
    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      const response = await fetch('http://localhost:8080/student/saveData', {
        method: 'POST',
        body: formData,  // Send as multipart/form-data
      });

      if (response.ok) {
        // Redirect to login page if sign-up is successful
        window.location.href = '/login';
      } else {
        console.error('Sign up failed');
      }
    } catch (error) {
      console.error('Error occurred during sign up:', error);
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>

      <div className="signup-form">
        <label htmlFor="role">Select Role:</label>
        <select id="role" value={role} onChange={handleSelectChange}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
      </div>

      {role && (
        <form className="user-form" onSubmit={handleFormSubmit} encType="multipart/form-data">
          <h3>{role.charAt(0).toUpperCase() + role.slice(1)} Sign Up</h3>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={`Enter your ${role} name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={`Enter your ${role} email`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder={`Create a ${role} password`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="profile-photo">Choose Profile Photo:</label>
          <input type="file" id="profile-photo" accept="image/*" onChange={handleFileChange} />

          {selectedFile && (
            <div className="image-preview">
              <p>Selected file: {selectedFile.name}</p>
              <img src={URL.createObjectURL(selectedFile)} alt="Profile Preview" />
            </div>
          )}

          <button className="signup-button" type="submit">
            Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
