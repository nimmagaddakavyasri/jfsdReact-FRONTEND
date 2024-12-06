import React, { useEffect, useState } from 'react';
import './styleStudent/StudentHome.css';
import { Link, useNavigate } from 'react-router-dom';
import StudentSidebar from './StudentSidebar';

const StudentHome = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Retrieve the stored email from localStorage when the component mounts
    const storedEmail = localStorage.getItem('userEmail');
    
    if (storedEmail) {
      setEmail(storedEmail); // Set the email if it exists in localStorage
    } else {
      // Optionally, you can navigate the user to the login page if the email is not found
      navigate('/login');
    }
  }, [navigate]); // Empty dependency array means it runs once when the component mounts

  const handleLogout = () => {
    // Clear email from localStorage on logout
    localStorage.removeItem('userEmail');
    
    // Optionally, handle any other logout tasks (e.g., token removal)

    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="student-home">
      <header className="navbar">
        <h1>Student Portal</h1>
        <nav>
          <ul>
            <li><Link to="/assignments">Assignments</Link></li>
            <li><Link to="/student/profile">Profile</Link></li>
            <li><Link to="/student/offered-courses">Offered Courses</Link></li>
            <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        {/* Sidebar */}
        <StudentSidebar />
        
        <div className="student-info">
          {/* Displaying the email stored in localStorage */}
          <h3>Welcome, {email}</h3>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
