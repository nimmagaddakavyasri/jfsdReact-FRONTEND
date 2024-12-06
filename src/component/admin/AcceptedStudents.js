// src/component/admin/AcceptedStudents.js
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import '../../style/AcceptedStudents.css';

const AcceptedStudents = () => {
  const [acceptedStudents, setAcceptedStudents] = useState([]);

  useEffect(() => {
    const fetchAcceptedStudents = async () => {
      try {
        const response = await axios.get('http://localhost:8080/student/acceptedStudents'); // Adjust endpoint as needed
        setAcceptedStudents(response.data);
      } catch (err) {
        console.error('Error fetching accepted students', err);
      }
    };

    fetchAcceptedStudents();
  }, []);

  return (
    <div className="accepted-students-page">
      <Sidebar />
      <div className="accepted-students-content">
        <h1>Accepted Students List</h1>
        <ul>
          {acceptedStudents.map((student) => (
            <li key={student.id}>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Enrolled Date:</strong> {student.enrolledDate}</p>
              {/* Add more student details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AcceptedStudents;
