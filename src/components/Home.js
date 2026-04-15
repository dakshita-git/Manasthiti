import React, { useState } from 'react';
import './Home.css';
import ShareModal from './ShareModal';
import ChatModal from './ChatModal';
import Resources from './Resources';
import AnonymousNotes from './AnonymousNotes';

const Home = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [refreshNotes, setRefreshNotes] = useState(0);

  const handlePostAdded = (newPost) => {
    setRefreshNotes(prev => prev + 1);
  };

  const handleCallConnect = () => {
    alert('📞 Call Support Available!\n\nOur trained counselors are available:\n• Monday-Friday: 9 AM - 9 PM\n• Saturday-Sunday: 10 AM - 6 PM\n\nCall: 1-800-HEAL-NOW\n\nNote: This is a demo.');
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
              Share your feelings
            </button>

            <button 
              className="btn-secondary glass"
              onClick={() => setIsChatModalOpen(true)}
            >
              Chat with someone
            </button>

            <button 
              className="btn-tertiary"
              onClick={handleCallConnect}
            >
              Connect via Call
            </button>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="features">

            <div className="feature-card">
              <div className="feature-icon">✏️</div>
              <h3>Share Anonymously</h3>
              <p>Express yourself safely without revealing your identity.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Talk with Peers</h3>
              <p>Connect with mentors with peer skills when you're going through.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Relax & Heal</h3>
              <p>Listen to destressing music and explore self-care resources.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Resources */}
      <section id="resources" className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>🌟 Resources</h2>
            <p>Discover curated self-care resources designed to help you relax, heal, and grow</p>
          </div>
          <Resources />
        </div>
      </section>

      {/* Notes */}
      <section id="notes" className="notes-section">
        <div className="container">
          <div className="section-header">
            <h2>💭 Anonymous Notes</h2>
            <p>Read heartfelt thoughts and connect with our supportive community</p>
          </div>
          <AnonymousNotes refreshTrigger={refreshNotes} />
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">

            <h2>About Share Talk, Heal</h2>

            <p>
              We provide a safe, welcoming space for you to share your feelings,
              connect with understanding peers, and discover resources that support your mental health journey.
            </p>

           <div className="about-links">
           <button className="about-link">Contact Us</button>
          <button className="about-link">Privacy Policy</button>
           <button className="about-link">Terms of Service</button>
         </div>

          </div>
        </div>
      </section>

      {/* Modals */}
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
