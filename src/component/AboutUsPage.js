import React from 'react';
import '../style/AboutUsPage.css';
const AboutUsPage = () => {
    return (
        <div className="about-us-page">
            <h2>About Us</h2>
            <p>
                Welcome to our Student Tracking and Management System! Our platform is dedicated to helping educational institutions streamline their processes and enhance student engagement. We believe that every student deserves a personalized learning experience, and our system is designed to make that a reality.
            </p>

            <section className="mission-section">
                <h3>Our Mission</h3>
                <p>
                    Our mission is to provide educational institutions with an intuitive and efficient platform for tracking student progress and managing academic records. We aim to empower educators with the tools they need to support each student's unique learning journey.
                </p>
            </section>

            <section className="features-section">
                <h3>Key Features</h3>
                <ul className="features-list">
                    <li>Real-time Student Tracking</li>
                    <li>Comprehensive Grade Management</li>
                    <li>Attendance Monitoring</li>
                    <li>Customizable Reports</li>
                    <li>Integrated Communication Tools</li>
                    <li>Data Analytics and Insights</li>
                </ul>
            </section>

            <section className="team-section">
                <h3>Meet Our Team</h3>
                <div className="team-members">
                    <div className="team-member">
                        <h4>Jane Doe</h4>
                        <p>CEO & Founder</p>
                        <p>With over a decade of experience in educational technology, Jane leads our team with a passion for innovation.</p>
                    </div>
                    <div className="team-member">
                        <h4>John Smith</h4>
                        <p>CTO</p>
                        <p>John oversees our technology strategy, ensuring that our platform remains cutting-edge and user-friendly.</p>
                    </div>
                    <div className="team-member">
                        <h4>Emily Johnson</h4>
                        <p>Product Manager</p>
                        <p>Emily works closely with users to gather feedback and improve our system, making it better for everyone.</p>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h3>What Our Users Say</h3>
                <blockquote>
                    "The Student Tracking and Management System has transformed how we manage our students. The real-time tracking feature is invaluable!"
                    <footer>- Mark Lee, Principal</footer>
                </blockquote>
                <blockquote>
                    "Our educators have found it easier to communicate and support students thanks to this platform."
                    <footer>- Sarah Wong, Teacher</footer>
                </blockquote>
            </section>

            <section className="contact-section">
                <h3>Get in Touch</h3>
                <p>If you have any questions or would like to learn more about our system, feel free to contact us!</p>
                <p><strong>Email:</strong> info@studentmanagement.com</p>
                <p><strong>Phone:</strong> +123-456-7890</p>
            </section>
        </div>
    );
};

export default AboutUsPage;
