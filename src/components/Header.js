import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onShareClick, onChatClick }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ['home', 'resources', 'notes', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <div className="logo-icon-wrapper">
            <svg className="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
            <div className="logo-pulse"></div>
          </div>
          <div className="logo-text-wrapper">
            <span className="logo-text">Share Talk, Heal</span>
            <span className="logo-tagline">Mental Health Support</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <button 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/>
            </svg>
            <span className="nav-text">Home</span>
          </button>
          <button 
            className={`nav-link ${activeSection === 'resources' ? 'active' : ''}`}
            onClick={() => scrollToSection('resources')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
            </svg>
            <span className="nav-text">Resources</span>
          </button>
          <button 
            className={`nav-link ${location.pathname === '/meditation' ? 'active' : ''}`}
            onClick={() => {
              navigate('/meditation');
              setIsMobileMenuOpen(false);
            }}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" fill="currentColor"/>
            </svg>
            <span className="nav-text">Meditation</span>
          </button>
          <button 
            className={`nav-link ${activeSection === 'notes' ? 'active' : ''}`}
            onClick={() => scrollToSection('notes')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor"/>
            </svg>
            <span className="nav-text">Community</span>
          </button>
          <button 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
            </svg>
            <span className="nav-text">About</span>
          </button>
          <button className="nav-button primary" onClick={onShareClick}>
            <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
            </svg>
            <span className="button-text">Start Chat</span>
            <div className="button-glow"></div>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <button 
              className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Home</span>
            </button>
            <button 
              className={`mobile-nav-link ${activeSection === 'resources' ? 'active' : ''}`}
              onClick={() => scrollToSection('resources')}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Resources</span>
            </button>
            <button 
              className={`mobile-nav-link ${location.pathname === '/meditation' ? 'active' : ''}`}
              onClick={() => {
                navigate('/meditation');
                setIsMobileMenuOpen(false);
              }}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Meditation</span>
            </button>
            <button 
              className={`mobile-nav-link ${activeSection === 'notes' ? 'active' : ''}`}
              onClick={() => scrollToSection('notes')}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" fill="currentColor"/>
              </svg>
              <span className="nav-text">Community</span>
            </button>
            <button 
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
              </svg>
              <span className="nav-text">About</span>
            </button>
            <button className="mobile-nav-button" onClick={onShareClick}>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1 .2 0 .5-.1.7-.3L14.6 18H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor"/>
              </svg>
              <span className="button-text">Start Chat</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;