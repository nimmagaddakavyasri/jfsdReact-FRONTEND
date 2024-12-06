import React, { useEffect, useState } from 'react';
import './styleStudent/StudentProfile.css';

const StudentProfile = () => {
  const [student, setStudent] = useState(null); // Holds student data
  const [error, setError] = useState(null); // Holds error messages
  const [email, setEmail] = useState(null); // Holds the email

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

    console.log(`Fetching profile for email: ${email}`);
    fetch(`http://localhost:8080/student/profile?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch profile details, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Profile data retrieved:', data);
        setStudent(data);
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
        setError(error.message);
      });
  }, [email]);

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
              <td>{student.role}</td>
            </tr>
            <tr>
              <th>Accept Status</th>
              <td>{student.accept === 1 ? 'Accepted' : 'Not Accepted'}</td>
            </tr>
            <tr>
              <th>Profile Photo</th>
              <td>
                {student.profilePhoto ? (
                  <img
                    src={student.profilePhoto}
                    alt="Profile"
                    className="profile-photo"
                  />
                ) : (
                  'No profile photo available'
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default StudentProfile;
