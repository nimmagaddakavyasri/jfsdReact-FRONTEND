import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/ManageUsers.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const ManageUsers = () => {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/students');
        setStudents(response.data);
      } catch (err) {
        setError('Error fetching students');
      }
    };

    fetchStudents();
  }, []);

  const handleDetailsClick = (studentId) => {
    navigate(`/admin/manage-users/${studentId}`); // Navigate to the student details page
  };

  return (
    <div className="manage-users-page">
      <Sidebar /> 
      <h1>Manage Users</h1>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>
                {student.profilePhoto ? (
                  <img
                    src={`http://localhost:8080/images/${student.profilePhoto}`}
                    alt="Profile"
                    style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                  />
                ) : (
                  'No Image'
                )}
              </td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button 
                  onClick={() => handleDetailsClick(student.id)} 
                  className="details-button"
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
