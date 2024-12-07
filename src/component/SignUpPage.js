import React, { useState } from 'react';
import '../style/SignUpPage.css';

const SignUpPage = () => {
  const [role, setRole] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false); // Tracks password validity

  const handleSelectChange = (event) => {
    setRole(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);

    // Password validation logic
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (passwordRegex.test(inputPassword)) {
      setPasswordMessage('Password is valid!');
      setIsPasswordValid(true); // Mark as valid
    } else {
      setPasswordMessage(
        'Password must be at least 8 characters long and include uppercase, lowercase letters, and numbers.'
      );
      setIsPasswordValid(false); // Mark as invalid
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('role', role);

    if (selectedFile) {
      formData.append('image', selectedFile);
    }

    try {
      const response = await fetch('http://localhost:8080/student/saveData', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
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
            onChange={handlePasswordChange}
            required
          />
          <p
            className={`password-message ${isPasswordValid ? 'valid' : 'invalid'}`}
          >
            {passwordMessage}
          </p>

          <label htmlFor="profile-photo">Choose Profile Photo:</label>
          <input type="file" id="profile-photo" accept="image/*" onChange={handleFileChange} />

          {selectedFile && (
            <div className="image-preview">
              <p>Selected file: {selectedFile.name}</p>
              <img src={URL.createObjectURL(selectedFile)} alt="Profile Preview" />
            </div>
          )}

          <button
            className="signup-button"
            type="submit"
            disabled={!isPasswordValid} // Disable button if password is invalid
          >
            Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUpPage;
