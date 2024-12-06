import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../admin/Sidebar'; // Import Sidebar component
import '../../style/RejectedFaculty.css'; // Create a CSS file for styling
import { useNavigate } from 'react-router-dom';

const RejectedFaculty = () => {
  const [rejectedFaculty, setRejectedFaculty] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  
  useEffect(() => {
    fetchRejectedFaculty();
  }, []);

  const fetchRejectedFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:8080/teacher/rejected-faculty');
      setRejectedFaculty(response.data);
    } catch (error) {
      console.error('Error fetching rejected faculty:', error);
      setMessage('Could not load rejected faculty data');
    }
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="rejected-faculty-container">
      <Sidebar />

      <div className="rejected-faculty-content">
      <div className="back-button" onClick={handleBackClick}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/93/93634.png" // Replace with a back arrow icon URL
            alt="Back"
            className="back-avatar"
          />
        </div>

        <h2>Rejected Faculty</h2>
        <p>{message}</p>

        {rejectedFaculty.length > 0 ? (
          <table className="faculty-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Profile Photo</th>
              </tr>
            </thead>
            <tbody>
              {rejectedFaculty.map((faculty) => (
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
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/50')} // Fallback image
                      />
                    ) : (
                      'No photo'
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No rejected faculty at this time.</p>
        )}
      </div>
    </div>
  );
};

export default RejectedFaculty;
