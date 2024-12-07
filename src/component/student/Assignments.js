import React from 'react';
import { Link } from 'react-router-dom';
import './styleStudent/Assignments.css';

const Assignments = () => {
  const assignmentData = [
    {
      id: 1,
      title: 'Aptitude Assignments',
      dueDate: '2024-12-15',
      questions: ['What is 2 + 2?', 'Solve 3x + 4 = 10'],
    },
    {
      id: 2,
      title: 'C Assignments',
      dueDate: '2024-12-20',
      questions: ['Write a program to implement a linked list.', 'Explain the use of pointers.'],
    },
    {
      id: 3,
      title: 'React Assignments',
      dueDate: '2024-12-18',
      questions: ['Create a React component that displays a list of items.', 'Write a React hook for form validation.'],
    },
  ];

  return (
    <div className="assignments">
      <header className="assignments-header">
        <h1>Assignments</h1>
      </header>

      <div className="assignments-list">
        {assignmentData.map((assignment) => (
          <div key={assignment.id} className="assignment-card">
            <h2>{assignment.title}</h2>
            <p>Due Date: {assignment.dueDate}</p>
            <Link to={`/assignment-details/${assignment.id}`} state={{ assignment }}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
