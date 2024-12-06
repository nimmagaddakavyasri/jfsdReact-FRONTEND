import React from 'react';
import '../style/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
       <header className="header">
        <div className="header-left">
          <div className="logo-container">
            <img 
              src="https://w7.pngwing.com/pngs/287/339/png-transparent-logo-companynamesideas-com-brand-business-company-name-logo-management-consulting-business.png" 
              alt="Logo" 
              className="logo"
            />
            <div className="header-title">
              <h1>QSpiders Learning Academy</h1>
              <p>Student Tracking and Learning Management System</p>
            </div>
          </div>
          
          <nav className="header-nav">
            <a href="/about">About Us</a>
            <a href="/contact">Contact Us</a>
            <a href="/login">Login</a>
          </nav>
        </div>
      </header>
      
      <div className="institution-image">
        <img 
          src="https://www.tohoku.ac.jp/en/news/images/135_university_for_international_research_excellence_t.jpg" 
          alt="Learning Institution" 
        />
      </div>
    </div>
  );
}

export default HomePage;
