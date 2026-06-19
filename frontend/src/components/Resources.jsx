import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resources.css';

const Resources = () => {
  const navigate = useNavigate();

  const resources = [
    {
      id: 1,
      title: 'Practice Yoga',
      subtitle: 'Find inner peace through mindful movement',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" fill="currentColor"/>
        </svg>
      ),
      color: '#dcfce7',
      route: '/yoga'
    },
    {
      id: 2,
      title: 'Listen to Music',
      subtitle: 'Healing melodies for your mental wellbeing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" fill="currentColor"/>
        </svg>
      ),
      color: '#fed7aa',
      route: '/music'
    },
    {
      id: 3,
      title: 'Self-Care Tips',
      subtitle: 'Practical ways to nurture yourself daily',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
        </svg>
      ),
      color: '#e0e7ff',
      route: '/self-care'
    },
    {
      id: 4,
      title: 'Read Quotes',
      subtitle: 'Inspiring words to uplift your spirit',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" fill="currentColor"/>
        </svg>
      ),
      color: '#fef3c7',
      route: '/quotes'
    },
    {
      id: 5,
      title: 'Self-Help Books',
      subtitle: 'Curated books for mental wellness & growth',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: '#f3e8ff',
      route: '/books'
    }
  ];

  const handleResourceClick = (route) => {
    navigate(route);
  };

  return (
    <div className="resources">
      <div className="resources-header">
        <h3>Resources</h3>
      </div>
      
      <div className="resources-grid">
        {resources.map((resource) => (
          <div 
            key={resource.id} 
            className="resource-card clickable"
            style={{ backgroundColor: resource.color }}
            onClick={() => handleResourceClick(resource.route)}
          >
            <div className="resource-icon">{resource.icon}</div>
            <div className="resource-content">
              <h4 className="resource-title">{resource.title}</h4>
              <p className="resource-subtitle">{resource.subtitle}</p>
            </div>
            <div className="resource-arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;