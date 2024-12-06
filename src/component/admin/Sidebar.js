import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/manage-users">Manage Users</Link></li>
        <li><Link to="/admin/manage-teachers">Manage Teachers</Link></li>
        <li><a href="#view-reports">View Reports</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="/login">Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
