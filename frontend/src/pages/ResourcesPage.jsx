import React from 'react';
import Resources from '../components/Resources';
import './ResourcesPage.css';

const ResourcesPage = () => {
  return (
    <div className="resources-page">
      <div className="page-container">
        <div className="page-header">
          <h1>Resources</h1>
          <p>Explore self-care resources to help you relax and heal</p>
        </div>
        <div className="resources-content">
          <Resources />
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;