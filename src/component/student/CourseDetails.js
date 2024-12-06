import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './styleStudent/CourseDetails.css';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch course details by ID from the backend
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/course/${courseId}`);
        setCourse(response.data);
      } catch (error) {
        console.error('Error fetching course details', error);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  const handleRegister = () => {
    // Directly navigate to the course dashboard page
    navigate(`/course-dashboard/${courseId}`);
  };

  if (!course) {
    return <p>Loading course details...</p>;
  }

  return (
    <div className="course-details">
      <h1>{course.courseName}</h1>
      <p><strong>Course Code:</strong> {course.courseCode}</p>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Duration:</strong> {course.courseDuration} weeks</p>
      <p><strong>Start Date:</strong> {course.startDate}</p>
      <p><strong>End Date:</strong> {course.endDate}</p>
      <p><strong>Credits:</strong> {course.credits}</p>
      <p><strong>Category:</strong> {course.category}</p>
      <p><strong>Description:</strong> {course.courseDescription}</p>

      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default CourseDetails;
