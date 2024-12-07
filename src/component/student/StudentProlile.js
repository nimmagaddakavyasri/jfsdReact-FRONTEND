import React, { useEffect, useState } from 'react';
import './styleStudent/StudentProfile.css';

const StudentProfile = () => {
  const [student, setStudent] = useState(null); // Holds student data
  const [error, setError] = useState(null); // Holds error messages
  const [email, setEmail] = useState(null); // Holds the email
  const [cv, setCv] = useState(null); // Holds the selected CV file
  const [uploadMessage, setUploadMessage] = useState(null); // Holds upload status messages

  // Fetch email from localStorage when the component mounts
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
      setError('Email is missing. Please log in again.');
      return;
    }
    setEmail(userEmail); // Set the email if found
  }, []);

  // Fetch student profile data whenever email is set
  useEffect(() => {
    if (!email) return;

    fetch(`http://localhost:8080/student/profile?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch profile details, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setStudent(data))
      .catch((error) => setError(error.message));
  }, [email]);

  // Handle CV file selection
  const handleFileChange = (event) => {
    setCv(event.target.files[0]);
  };

  // Handle CV upload
  const handleUpload = () => {
    if (!cv) {
      setUploadMessage('Please select a CV file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('cv', cv);

    fetch('http://localhost:8080/student/upload-cv', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Upload failed, status: ${response.status}`);
        }
        return response.text();
      })
      .then((message) => setUploadMessage(`Upload successful: ${message}`))
      .catch((error) => setUploadMessage(`Upload failed: ${error.message}`));
  };

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="student-profile">
      <h2>Profile Details</h2>
      <p><strong>Email:</strong> {email}</p>

      {student ? (
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <td>{student.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{student.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{student.email}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>student</td>
            </tr>
            <tr>
              <th>Accept Status</th>
              <td>{student.accept === 1 ? 'Accepted' : 'Not Accepted'}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading profile...</p>
      )}

      <div className="upload-section">
        <h3>Upload CV</h3>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <p6> File size should not exceed 2MB</p6>
        {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
      </div>
    </div>
  );
};

export default StudentProfile;
