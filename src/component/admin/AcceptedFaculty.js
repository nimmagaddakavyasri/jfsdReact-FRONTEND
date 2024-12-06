import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '../admin/Sidebar'; // Import Sidebar component
import '../../style/AcceptedFaculty.css'; // You can create a separate CSS file for styling

const AcceptedFaculty = () => {
  const [acceptedFaculty, setAcceptedFaculty] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch accepted faculty data from backend
  useEffect(() => {
    fetchAcceptedFaculty();
  }, []);

  const fetchAcceptedFaculty = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/acceptedFaculty');
      setAcceptedFaculty(response.data);
    } catch (error) {
      console.error('Error fetching accepted faculty:', error);
      setMessage('Could not load accepted faculty data');
    }
  };

  return (
    <div className="accepted-faculty-container">
      <Sidebar />

      <div className="accepted-faculty-content">
        <h2>Accepted Faculty</h2>
        <p>{message}</p>

      
        

        {acceptedFaculty.length > 0 ? (
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
              {acceptedFaculty.map((faculty) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No accepted faculty at this time.</p>
        )}
      </div>
    </div>
  );
};

export default AcceptedFaculty;
