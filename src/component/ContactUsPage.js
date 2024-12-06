import React from 'react';
import Counter from './Counter';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h2>Contact Us</h2>
      <p>QSpiders, one of the biggest learning platforms for students, is here to assist you. If you have any questions or need support, feel free to reach out to us. We're dedicated to enhancing your learning experience!</p>

      {/* Use the Tagline component */}
      
      
      <div className="contact-info">
        <h3>Get in touch with QSpiders Learning System</h3>
        <p><strong>Email:</strong> support@qspiders.com</p>
        <p><strong>Phone:</strong> +123-456-7890</p>
        <p><strong>Address:</strong> QSpiders Learning System, 123 Learning St, Knowledge City, Educationland</p>
      </div>

      {/* Adding the image at the bottom */}
      <div className="contact-image">
        <img 
          src="https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2024/07/IST-BANNER-3.jpg" 
          alt="QSpiders Learning System"
          className="bottom-image"
        />
      </div>

      {/* Elemental Counter Numbers Below the Image */}
      <div className="counters-container">
        <Counter endValue={5000} label="Students Enrolled" />
        <Counter endValue={100} label="Courses Offered" />
        <Counter endValue={50} label="Qualified Instructors" />
      </div>
    </div>
  );
};

export default ContactUsPage;
