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
      icon: '🧘‍♀️',
      color: '#dcfce7',
      route: '/yoga'
    },
    {
      id: 2,
      title: 'Listen to Music',
      subtitle: 'Healing melodies for your mental wellbeing',
      icon: '🎵',
      color: '#fed7aa',
      route: '/music'
    },
    {
      id: 3,
      title: 'Self-Care Tips',
      subtitle: 'Practical ways to nurture yourself daily',
      icon: '💜',
      color: '#e0e7ff',
      route: '/self-care'
    },
    {
      id: 4,
      title: 'Read Quotes',
      subtitle: 'Inspiring words to uplift your spirit',
      icon: '📖',
      color: '#fef3c7',
      route: '/quotes'
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