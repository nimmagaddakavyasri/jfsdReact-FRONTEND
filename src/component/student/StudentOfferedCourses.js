// src/component/student/StudentOfferedCourses.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styleStudent/StudentOfferedCourses.css';

const StudentOfferedCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch offered courses data from the backend
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/offeredCourses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching offered courses', error);
      }
    };

    fetchCourses();
  }, []);

  const handleViewDetails = (courseId) => {
    // Navigate to the CourseDetails page with the selected course ID
    navigate(`/course/details/${courseId}`);
  };

  return (
    <div className="student-offered-courses">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.length === 0 ? (
          <p>No courses are available at the moment.</p>
        ) : (
          courses.map((course) => (
            <div className="course-card" key={course.id}>
              <h2>{course.courseName}</h2>
              <p><strong>Course Code:</strong> {course.courseCode}</p>
              <button onClick={() => handleViewDetails(course.id)}>View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StudentOfferedCourses;
