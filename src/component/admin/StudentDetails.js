import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import '../../style/StudentDetails.css';

const StudentDetails = () => {
  const { id } = useParams();  // Get the student ID from the URL
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const [acceptStatus, setAcceptStatus] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/student/studentDetails/${id}`);
        setStudent(response.data);
        setAcceptStatus(response.data.accept);
      } catch (err) {
        setError('Error fetching student details');
      }
    };

    fetchStudentDetails();
  }, [id]);

  const handleAccept = async () => {
    setLoading(true); // Start loading
    try {
      await axios.put(`http://localhost:8080/student/acceptUser/${id}`);
      alert('Student accepted and email sent');
      setAcceptStatus(true);
    } catch (err) {
      console.error("Error details:", err);
      alert('Error updating student acceptance');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!student) {
    return <p>Loading student details...</p>;
  }

  return (
    <div className="student-details-page">
      <Sidebar /> {/* Sidebar included here */}
      <div className="student-details-content">
        <h1>Student Details</h1>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Enrolled Date:</strong> {student.enrolledDate}</p>
        {student.profilePhoto && (
          <img
            src={`http://localhost:8080/images/${student.profilePhoto}`}
            alt="Profile"
            style={{ width: '100px', height: '100px', borderRadius: '50%' }}
          />
        )}
        {/* Display CV file link */}
        {student.cvFilePath ? (
          <div>
            <h3>Uploaded CV:</h3>
            <a href={`http://localhost:8080/images/${student.cvFilePath}`} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
          </div>
        ) : (
          <p>No CV uploaded</p>
        )}
        <button
          onClick={handleAccept}
          className="accept-button"
          disabled={acceptStatus || loading} // Disable button if accepted or loading
        >
          {loading ? "Processing..." : acceptStatus ? "Accepted" : "Accept"}
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
