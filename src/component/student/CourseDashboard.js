// src/component/student/CourseDashboard.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styleStudent/CourseDashboard.css';

const CourseDashboard = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [learningLinks, setLearningLinks] = useState([
    { title: 'C Basics', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps' },
    { title: 'Implementation Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
    { title: 'Intro to Functions', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction' },
    { title: 'Axios Guide', url: 'https://axios-http.com/docs/intro' },
  ]);

  useEffect(() => {
    // Fetch course details
    axios.get(`/api/courses/${courseId}`)
      .then(response => setCourse(response.data))
      .catch(error => console.error("Error fetching course details:", error));

    // Fetch course modules or topics
    axios.get(`/api/courses/${courseId}/modules`)
      .then(response => setModules(response.data))
      .catch(error => console.error("Error fetching course modules:", error));
  }, [courseId]);

  const handleBackToCourses = () => {
    navigate('/student/offered-courses');
  };

  return (
    <div className="course-dashboard">
      <h1 className="title">Course Dashboard</h1>
      {course ? (
        <div className="course-info">
          <h2>{course.name}</h2>
          <p><strong>Description:</strong> {course.description}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duration:</strong> {course.duration} hours</p>
        </div>
      ) : (
        <p className="loading">Loading course details...</p>
      )}

      <h3 className="section-title">Modules</h3>
      {modules.length > 0 ? (
        <ul className="modules-list">
          {modules.map(module => (
            <li key={module.id} className="module-item">
              <strong>{module.title}</strong> - {module.description}
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading">Loading modules...</p>
      )}

      <button className="back-button" onClick={handleBackToCourses}>Back to Courses</button>

      <h3 className="section-title">Learning Links</h3>
      <ul className="links-list">
        {learningLinks.map((link, index) => (
          <li key={index} className="link-item">
            <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
          </li>
        ))}
      </ul>

      <h3 className="section-title">Things to Learn</h3>
      <ul className="learning-list">
        <li>JavaScript fundamentals, such as ES6 features (let, const, arrow functions)</li>
        <li>React component lifecycle and hooks (useState, useEffect)</li>
        <li>Working with REST APIs using Axios</li>
        <li>Client-side routing with React Router</li>
        <li>Basic web design principles to enhance UI/UX</li>
      </ul>
    </div>
  );
};

export default CourseDashboard;
