import React, { useState, useEffect } from 'react';
import './AnonymousNotes.css';
import { getPosts, likePost } from '../services/apiService';

const AnonymousNotes = ({ refreshTrigger }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const formatTimeAgo = (timestamp) => {
    if (!timestamp) return 'Just now';
    const now = new Date();
    const postTime = new Date(timestamp);
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
      const data = await getPosts();
      setNotes(data);
    } catch (err) {
      console.error('Error fetching notes:', err);
      setError('Could not connect to server. Showing sample posts.');
      setNotes([
        { _id: 's1', content: 'Hi, how is everyone doing today?', mood: 'happy', likes: 3, createdAt: new Date(Date.now() - 2 * 60000) },
        { _id: 's2', content: 'Finding it hard to concentrate on my studies lately.', mood: 'anxious', likes: 7, createdAt: new Date(Date.now() - 5 * 60000) },
        { _id: 's3', content: 'Feeling lonely after the breakup. Need someone to talk to...', mood: 'sad', likes: 12, createdAt: new Date(Date.now() - 10 * 60000) }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (id) => {
    try {
      const updated = await likePost(id);
      setNotes(prev => prev.map(n => (n._id === id ? updated : n)));
    } catch {
      setNotes(prev => prev.map(n => n._id === id ? { ...n, likes: (n.likes || 0) + 1 } : n));
    }
  };

  useEffect(() => { fetchNotes(); }, [refreshTrigger]);

  const moodColors = { happy: '#dcfce7', sad: '#dbeafe', anxious: '#fef3c7', grateful: '#f3e8ff', neutral: '#f1f5f9' };
  const moodEmojis = { happy: '😊', sad: '😢', anxious: '😰', grateful: '🙏', neutral: '😐' };

  const filteredNotes = notes.filter(note =>
    (note.content || note.message || '').toLowerCase().includes(searchTerm.toLowerCase())
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

      {error && <div className="error-message">{error}</div>}

      <div className="notes-list">
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading posts...</p>
          </div>
        ) : filteredNotes.length === 0 ? (
          <div className="empty-state">
            <p>No posts found. {searchTerm ? 'Try a different search.' : 'Be the first to share!'}</p>
          </div>
        ) : (
          filteredNotes.map((note) => (
            <div
              key={note._id || note.id}
              className="note-item"
              style={{ borderLeft: `4px solid ${moodColors[note.mood] || '#e0e7ff'}` }}
            >
              <div className="note-user">
                <span className="user-avatar">{moodEmojis[note.mood] || '👤'}</span>
                <span className="username">Anonymous</span>
                <span className="note-time">{formatTimeAgo(note.createdAt)}</span>
              </div>
              <div className="note-message">{note.content || note.message}</div>
              <div className="note-actions">
                <button className="action-btn" onClick={() => handleLike(note._id || note.id)}>
                  💜 {note.likes || 0}
                </button>
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
