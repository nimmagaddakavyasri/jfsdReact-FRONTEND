import React from 'react';
import Sidebar from './Sidebar';  // Import Sidebar component
import '../../style/AdminHome.css';

const AdminHome = () => {
  return (
    <div className="admin-home-container">
      
      <Sidebar />  

      {/* Main Content Area */}
      <div className="main-content">
        <h1>Welcome to the Admin Home Page</h1>
        <p>Select an option from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default AdminHome;
