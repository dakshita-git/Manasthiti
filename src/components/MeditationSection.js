import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MeditationSection.css';

const MeditationSection = () => {
  const navigate = useNavigate();

  return (
    <section className="meditation-section" id="meditation">
      <div className="meditation-content">
        <div className="meditation-text">
          <h2>Meditation & Breathing</h2>
          <p className="meditation-subtitle">
            Find your inner peace with guided breathing exercises and calming ambient sounds
          </p>
          <div className="meditation-features">
            <div className="feature-item">
              <span className="feature-icon">🧘</span>
              <span>Guided Breathing Techniques</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌊</span>
              <span>Ambient Nature Sounds</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⏱️</span>
              <span>Customizable Timer Sessions</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Visual Breathing Guide</span>
            </div>
          </div>
          <button 
            className="meditation-cta-btn"
            onClick={() => navigate('/meditation')}
          >
            Start Meditation Session
          </button>
        </div>
        <div className="meditation-visual">
          <div className="breathing-demo">
            <div className="demo-circle pulse">
              <div className="demo-inner">
                <span className="demo-text">Breathe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationSection;
