import React, { useState } from 'react';
import './ShareModal.css';
import { createPost } from '../services/apiService';

const ShareModal = ({ onClose, onPostAdded }) => {
  const [message, setMessage] = useState('');
  const [mood, setMood] = useState('neutral');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const moods = [
    { id: 'happy', label: '😊 Happy' },
    { id: 'sad', label: '😢 Sad' },
    { id: 'anxious', label: '😰 Anxious' },
    { id: 'grateful', label: '🙏 Grateful' },
    { id: 'neutral', label: '😐 Neutral' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);
    setError('');
    try {
      const newPost = await createPost(message.trim(), mood);
      if (onPostAdded) onPostAdded(newPost);
      alert('Your post has been shared! 💜');
      onClose();
    } catch (err) {
      setError('Failed to share. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal share-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Share</h2>
        </div>

        <form onSubmit={handleSubmit} className="share-form">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="message">What's on your mind?</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your thoughts, feelings, or experiences..."
              rows={6}
              required
              disabled={isSubmitting}
            />
            <div className="character-count">
              {message.length}/500
            </div>
          </div>

          <div className="form-group">
            <label>How are you feeling?</label>
            <div className="mood-selector">
              {moods.map(m => (
                <button
                  key={m.id}
                  type="button"
                  className={`mood-btn ${mood === m.id ? 'active' : ''}`}
                  onClick={() => setMood(m.id)}
                  disabled={isSubmitting}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="share-submit-btn"
            disabled={isSubmitting || !message.trim() || message.length > 500}
          >
            {isSubmitting ? (
              <><span className="spinner"></span>Sharing...</>
            ) : (
              <>💜 Share Anonymously</>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareModal;