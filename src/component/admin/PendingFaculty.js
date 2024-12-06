import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../admin/Sidebar'; // Import Sidebar component
import '../../style/PendingFaculty.css';

const PendingFaculty = () => {
  const [pendingFaculty, setPendingFaculty] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch pending faculty data from backend
  useEffect(() => {
    fetchPendingFaculty();
  }, []);

  const fetchPendingFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:8080/teacher/pendingFaculty');
      setPendingFaculty(response.data);
    } catch (error) {
      console.error('Error fetching pending faculty:', error);
      setMessage('Could not load pending faculty data');
    }
  };

  // Handle accept action
  const handleAccept = async (facultyId) => {
    try {
      // Make the PUT request to accept the faculty
      const response = await axios.put(`http://localhost:8080/teacher/acceptFaculty/${facultyId}`);
      if (response.status === 200) {
        // Successfully accepted, update the UI to reflect the change
        setPendingFaculty((prev) =>
          prev.filter((faculty) => faculty.id !== facultyId)
        );
        setMessage('Faculty accepted successfully.');
      } else {
        setMessage('Error accepting faculty.');
      }
    } catch (error) {
      console.error('Error accepting faculty:', error);
      setMessage('Error accepting faculty.');
    }
  };

  // Handle reject action (you can implement similar logic if needed)
  const handleReject = (facultyId) => {
    console.log(`Rejecting faculty with ID: ${facultyId}`);
    // Implement reject functionality if needed
  };

  return (
    <div className="pending-faculty-container">
      {/* Sidebar */}
      <Sidebar />

      <div className="pending-faculty-content">
        <h2>Pending Faculty</h2>
        <p>{message}</p>

        {pendingFaculty.length > 0 ? (
          <table className="faculty-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Profile Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingFaculty.map((faculty) => (
                <tr key={faculty.id}>
                  <td>{faculty.id}</td>
                  <td>{faculty.name}</td>
                  <td>{faculty.email}</td>
                  <td>
                    {faculty.profilePhoto ? (
                      <img
                        src={`http://localhost:8080/images/${faculty.profilePhoto}`}
                        alt={`${faculty.name}'s profile`}
                        className="faculty-photo"
                      />
                    ) : (
                      'No photo'
                    )}
                  </td>
                  <td>
                    <button
                      className="action-btn accept-btn"
                      onClick={() => handleAccept(faculty.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="action-btn reject-btn"
                      onClick={() => handleReject(faculty.id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No pending faculty at this time.</p>
        )}
      </div>
    </div>
  );
};

export default PendingFaculty;
