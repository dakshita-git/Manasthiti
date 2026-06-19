import React from 'react';
import AnonymousNotes from '../components/AnonymousNotes';
import './AnonymousNotesPage.css';

const AnonymousNotesPage = () => {
  return (
    <div className="notes-page">
      <div className="page-container">
        <div className="page-header">
          <h1>Anonymous Notes</h1>
          <p>Read and connect with anonymous thoughts from the community</p>
        </div>
        <div className="notes-content">
          <AnonymousNotes />
        </div>
      </div>
    </div>
  );
};

export default AnonymousNotesPage;