import React, { useState } from 'react';
import './Home.css';
import ShareModal from './ShareModal';
import ChatModal from './ChatModal';
import Resources from './Resources';
import AnonymousNotes from './AnonymousNotes';

const Home = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [refreshNotes, setRefreshNotes] = useState(0);

  const handlePostAdded = (newPost) => {
    // Trigger refresh of anonymous notes
    setRefreshNotes(prev => prev + 1);
  };

  const SUPPORT_NUMBER = '18008425523'; // 1-800-HEAL-NOW mapped to digits

  const handleCallConnect = () => {
    // Try to initiate a real phone call
    const telLink = document.createElement('a');
    telLink.href = `tel:+${SUPPORT_NUMBER}`;
    telLink.click();
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="floating-elements">
          <div className="floating-element"></div>
          <div className="floating-element"></div>
          <div className="floating-element"></div>
        </div>
        <div className="container">
          <h1 className="hero-title">
            Feeling <span className="gradient-text">stressed</span>?<br />
            You're not alone
          </h1>
          <p className="hero-subtitle">
            Share your thoughts, connect with others, and find support in our safe community.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary pulse"
              onClick={() => setIsShareModalOpen(true)}
            >
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
              </svg>
              Share your feelings
            </button>
            <button 
              className="btn-secondary glass"
              onClick={() => setIsChatModalOpen(true)}
            >
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
              </svg>
              Chat with someone
            </button>
            <button 
              className="btn-tertiary"
              onClick={handleCallConnect}
            >
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
              </svg>
              Connect via Call
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Share Anonymously</h3>
              <p>Express yourself safely without revealing your identity.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Talk with Peers</h3>
              <p>Connect with mentors with peer skills when you're going through.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Relax & Heal</h3>
              <p>Listen to destressing music and explore self-care resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">People Helped</div>
              <div className="stat-description">Individuals who found support and healing</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available Support</div>
              <div className="stat-description">Round-the-clock community and resources</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">95%</div>
              <div className="stat-label">Feel Better</div>
              <div className="stat-description">Users report improved mental wellbeing</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Anonymous & Safe</div>
              <div className="stat-description">Complete privacy and security guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>🌟 Resources</h2>
            <p>Discover curated self-care resources designed to help you relax, heal, and grow</p>
          </div>
          <Resources />
          

        </div>
      </section>



      {/* Anonymous Notes Section */}
      <section id="notes" className="notes-section">
        <div className="container">
          <div className="section-header">
            <h2>💭 Anonymous Notes</h2>
            <p>Read heartfelt thoughts and connect with our supportive community</p>
          </div>
          <div className="notes-wrapper">
            <AnonymousNotes refreshTrigger={refreshNotes} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Community Says</h2>
            <p>Real stories from people who found hope and healing</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"This platform gave me the courage to speak up about my struggles. The anonymous feature made me feel safe to share my deepest thoughts."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <span className="author-name">Anonymous User</span>
                  <span className="author-role">Community Member</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The resources here are incredible. The yoga and meditation guides helped me develop healthy coping mechanisms."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <span className="author-name">Sarah M.</span>
                  <span className="author-role">Regular User</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Finding people who truly understand what I'm going through has been life-changing. This community is my safe haven."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <span className="author-name">Alex K.</span>
                  <span className="author-role">Active Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>About Share Talk, Heal</h2>
            <p>
              We provide a safe, welcoming space for you to share your feelings, connect with understanding peers, and discover resources that support your mental health journey.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7ZM12 17C10.33 17 8.94 16.16 8.24 14.9C8.24 13.65 10.74 13 12 13S15.76 13.65 15.76 14.9C15.06 16.16 13.67 17 12 17Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Safe & Anonymous</h3>
                <p>Share your thoughts without fear of judgment. Your privacy and safety are our top priorities.</p>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4ZM8 14C11.3 14 18 15.7 18 19V21H-2V19C-2 15.7 4.7 14 8 14ZM16 14C19.3 14 26 15.7 26 19V21H20V19C20 17.4 18.9 15.9 16.7 14.9C16.5 14.9 16.2 14 16 14Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Peer Support</h3>
                <p>Connect with compassionate individuals who truly understand your experiences and challenges.</p>
              </div>
              
              <div className="about-feature">
                <div className="feature-icon-wrapper">
                  <svg className="feature-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 12H7V10H17V12ZM15 16H7V14H15V16ZM17 8H7V6H17V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3>Professional Resources</h3>
                <p>Access carefully curated self-care tools, resources, and professional guidance for your wellbeing.</p>
              </div>
            </div>
            
            <div className="about-links">
              <a href="#" className="about-link">Contact Us</a>
              <a href="#" className="about-link">Privacy Policy</a>
              <a href="#" className="about-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>

      {isShareModalOpen && (
        <ShareModal 
          onClose={() => setIsShareModalOpen(false)} 
          onPostAdded={handlePostAdded}
        />
      )}
      
      {isChatModalOpen && (
        <ChatModal onClose={() => setIsChatModalOpen(false)} />
      )}
    </div>
  );
};

export default Home;