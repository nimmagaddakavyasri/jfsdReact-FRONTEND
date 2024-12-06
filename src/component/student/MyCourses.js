import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch registered courses from the backend
    const fetchCourses = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
          const response = await axios.get(`http://localhost:8080/student/courses?email=${userEmail}`);
          setCourses(response.data);
        } else {
          console.log('User is not logged in');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="my-courses">
      <h2>My Registered Courses</h2>
      {courses.length === 0 ? (
        <p>You have not registered for any courses yet.</p>
      ) : (
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.courseName}</h3>
              <p>{course.courseDescription}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCourses;
