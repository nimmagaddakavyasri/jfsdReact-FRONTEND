// src/component/admin/OfferedCourses.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/OfferedCourses.css'; // Optional, for custom styling
import { useNavigate } from 'react-router-dom';

const OfferedCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the list of offered courses from the backend
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/offeredCourses');
        setCourses(response.data); // Ensure response data includes all necessary fields
      } catch (error) {
        console.error('Error fetching offered courses', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="offered-courses-page">
      <h1>Offered Courses</h1>
      <div className="course-list">
        {courses.length === 0 ? (
          <p>No courses available at the moment.</p>
        ) : (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h2>{course.courseName}</h2>
              <p>Course Code: {course.courseCode}</p>
              <p>Duration: {course.duration}</p>
              <p>Instructor: {course.instructor}</p>
              <p>Description: {course.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OfferedCourses;
