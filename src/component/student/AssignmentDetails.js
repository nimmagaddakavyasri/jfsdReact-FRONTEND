import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './styleStudent/AssignmentDetails.css';

const AssignmentDetails = () => {
  const { id } = useParams(); // Extract assignment ID from the route
  const location = useLocation();
  const assignment = location.state?.assignment; // Retrieve assignment data from state

  if (!assignment) {
    return <p>No assignment details available for ID: {id}</p>;
  }

  return (
    <div className="assignment-details">
      <header className="assignment-details-header">
        <h1>{assignment.title}</h1>
        <p>Due Date: {assignment.dueDate}</p>
      </header>

      <div className="questions-list">
        <h2>Questions</h2>
        <ul>
          {assignment.questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentDetails;
