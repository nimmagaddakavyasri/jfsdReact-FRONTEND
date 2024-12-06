import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../admin/Sidebar'; 
import '../../style/ManageTeachers.css';

const ManageTeachers = () => {
  const [pendingCount, setPendingCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [rejectedTeachers, setRejectedTeachers] = useState([]); // New state to store rejected teachers list
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  // Fetch teacher counts from backend
  useEffect(() => {
    fetchTeacherCounts();
  }, []);

  const fetchTeacherCounts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/teacherCounts');
      const { pending, accepted, rejected } = response.data;
      setPendingCount(pending);
      setAcceptedCount(accepted);
      setRejectedCount(rejected);
    } catch (error) {
      console.error('Error fetching teacher counts:', error);
      setMessage('Could not load teacher data');
    }
  };

  const handleRejectedClick = () => {
    navigate('/admin/manage-teachers/rejected-faculty');
  };

  const handlePendingClick = () => navigate('/admin/manage-teachers/pending-faculty');
  const handleAcceptedClick = () => navigate('/admin/manage-teachers/accepted-faculty');

  return (
    <div className="manage-teachers-container">
      <Sidebar />
      <div className="manage-teachers-content">
        <h2>Manage Teachers</h2>
        <p>{message}</p>

        <div className="teacher-summary-cards">
          <div className="summary-card pending" onClick={() => navigate('/admin/manage-teachers/pending-faculty')}>
            <h3>Pending Faculty</h3>
            <p>{pendingCount}</p>
          </div>
          <div className="summary-card accepted" onClick={() => navigate('/admin/manage-teachers/accepted-faculty')}>
            <h3>Accepted Faculty</h3>
            <p>{acceptedCount}</p>
          </div>
          <div className="summary-card rejected" onClick={handleRejectedClick}>
            <h3>Rejected Faculty</h3>
            <p>{rejectedCount}</p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ManageTeachers;
