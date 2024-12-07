import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styleteacher/Courses.css';
import { FaArrowLeft } from 'react-icons/fa'; // Importing an icon for the back button

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/course/offeredCourses');
        setCourses(response.data);
      } catch (err) {
        setError('Error fetching courses');
      }
    };

    fetchCourses();
  }, []);

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };

  return (
    <div className="courses-page">
      {/* Back Button */}
      <div className="back-button" onClick={goBack}>
        <FaArrowLeft className="back-icon" />
      </div>

      <h1>Manage Courses</h1>
      {error && <p className="error-message">{error}</p>}

      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        <div className="courses-table-wrapper">
          <table className="courses-table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.courseName}</td>
                  <td>{course.instructor}</td>
                  <td>
                    <button>View</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Courses;
