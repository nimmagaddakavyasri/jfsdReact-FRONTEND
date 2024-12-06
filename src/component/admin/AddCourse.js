// src/component/admin/AddCourse.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../style/AddCourse.css';

const AddCourse = () => {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [instructor, setInstructor] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseDuration, setCourseDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [credits, setCredits] = useState('');
  const [category, setCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/course/add-course', {
        courseName,
        courseCode,
        instructor,
        courseDescription,
        courseDuration,
        startDate,
        endDate,
        credits,
        category,
      });
      setSuccessMessage('Course added successfully!');
      setErrorMessage('');
      // Clear form fields
      setCourseName('');
      setCourseCode('');
      setInstructor('');
      setCourseDescription('');
      setCourseDuration('');
      setStartDate('');
      setEndDate('');
      setCredits('');
      setCategory('');
    } catch (error) {
      setErrorMessage('Error adding course. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="add-course-page">
      <h1>Add a New Course</h1>
      <form onSubmit={handleSubmit} className="add-course-form">
        
        <label>Course Name:
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
        </label>

        <label>Course Code:
          <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
        </label>
        
        <label>Instructor:
          <input type="text" value={instructor} onChange={(e) => setInstructor(e.target.value)} required />
        </label>

        <label>Course Description:
          <textarea value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} required />
        </label>
        
        <label>Course Duration (weeks):
          <input type="number" value={courseDuration} onChange={(e) => setCourseDuration(e.target.value)} required />
        </label>

        <label>Start Date:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </label>

        <label>End Date:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </label>

        <label>Credits:
          <input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} required />
        </label>

        <label>Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            <option value="Science">Science</option>
            <option value="Arts">Arts</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Technology">Technology</option>
          </select>
        </label>

        <button type="submit">Add Course</button>
        
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default AddCourse;
