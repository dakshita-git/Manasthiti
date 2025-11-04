import React, { useState, useEffect } from 'react';
import './AnonymousNotes.css';
import { postsService } from '../services/firebaseService';

const AnonymousNotes = ({ refreshTrigger }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return 'Just now';
    
    const now = new Date();
    const postTime = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const diffInMinutes = Math.floor((now - postTime) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError('');
      const fetchedNotes = await postsService.getAnonymousPosts(10);
      setNotes(fetchedNotes);
    } catch (error) {
      console.error('Error fetching notes:', error);
      setError('Failed to load notes. Please try again.');
      // Fallback to sample data
      setNotes([
        {
          id: 'sample1',
          author: 'User123',
          message: 'Hi, how is everyone doing today?',
          createdAt: new Date(Date.now() - 2 * 60 * 1000),
          isAnonymous: false
        },
        {
          id: 'sample2',
          author: 'Student_456',
          message: 'Finding it hard to concentrate on my studies lately.',
          createdAt: new Date(Date.now() - 5 * 60 * 1000),
          isAnonymous: false
        },
        {
          id: 'sample3',
          author: 'Anonymous',
          message: 'Feeling lonely after the breakup. Need someone to talk to...',
          createdAt: new Date(Date.now() - 10 * 60 * 1000),
          isAnonymous: true
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, [refreshTrigger]);

  const filteredNotes = notes.filter(note =>
    note.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="anonymous-notes">
      <div className="notes-header">
        <h3>Community Notes</h3>
        <button className="refresh-btn" onClick={fetchNotes} disabled={loading}>
          {loading ? '⟳' : '↻'}
        </button>
      </div>
      
      <div className="notes-search">
        <input 
          type="text" 
          placeholder="Search posts..." 
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <div className="notes-list">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading posts...</p>
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="empty-state">
            <p>No posts found. {searchTerm ? 'Try a different search term.' : 'Be the first to share!'}</p>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div key={note.id} className="note-item">
              <div className="note-user">
                <span className="user-avatar">
                  {note.isAnonymous ? '🎭' : '👤'}
                </span>
                <span className="username">{note.author}</span>
                <span className="note-time">{formatTimeAgo(note.createdAt)}</span>
                <span className="note-arrow">›</span>
              </div>
              <div className="note-message">{note.message}</div>
              <div className="note-actions">
                <button className="action-btn">💜 Support</button>
                <button className="action-btn">💬 Reply</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnonymousNotes;