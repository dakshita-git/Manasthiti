import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h1>About</h1>
          <p>
            We provide a safe space for you to share your feelings, connect with peers, and find resources to help you up heal.
          </p>
          
          <div className="about-features">
            <div className="about-feature">
              <h3>Safe & Anonymous</h3>
              <p>Share your thoughts without fear of judgment. Your privacy is our priority.</p>
            </div>
            
            <div className="about-feature">
              <h3>Peer Support</h3>
              <p>Connect with others who understand what you're going through.</p>
            </div>
            
            <div className="about-feature">
              <h3>Professional Resources</h3>
              <p>Access curated self-care resources and professional guidance.</p>
            </div>
          </div>
          
          <div className="about-links">
            <a href="#" className="about-link">About</a>
            <a href="#" className="about-link">Contact</a>
            <a href="#" className="about-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;