import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styleStudent/SubmitAssignment.css';

const SubmitAssignment = () => {
  const location = useLocation();
  const [assignmentDetails, setAssignmentDetails] = useState(null);

  // Extract the assignment data passed through the Link (state)
  useEffect(() => {
    if (location.state) {
      setAssignmentDetails(location.state.assignment);
    }
  }, [location]);

  if (!assignmentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="submit-assignment">
      <h1>Submit Assignment</h1>
      <h2>{assignmentDetails.title}</h2>
      <p><strong>Due Date:</strong> {assignmentDetails.dueDate}</p>
      <p><strong>Question:</strong> {assignmentDetails.question}</p>
      <div>
        <label htmlFor="answer">Your Answer:</label>
        <textarea id="answer" rows="6" cols="50" placeholder="Write your answer here..." />
      </div>
      <button className="submit-button">Submit Assignment</button>
    </div>
  );
};

export default SubmitAssignment;
