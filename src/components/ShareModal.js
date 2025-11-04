import React, { useState } from 'react';
import './ShareModal.css';
import { postsService } from '../services/firebaseService';

const ShareModal = ({ onClose, onPostAdded }) => {
  const [message, setMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      const postData = {
        message: message.trim(),
        isAnonymous,
        author: isAnonymous ? 'Anonymous' : `User${Math.floor(Math.random() * 1000)}`,
        category: 'general'
      };

      const newPost = await postsService.addPost(postData);
      
      // Notify parent component about new post
      if (onPostAdded) {
        onPostAdded(newPost);
      }

      // Show success message
      alert('Your post has been shared successfully! 💜');
      onClose();
    } catch (error) {
      console.error('Error sharing post:', error);
      setError('Failed to share your post. Please try again.');
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
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                disabled={isSubmitting}
              />
              <span className="checkbox-custom"></span>
              Post as Anonymous
            </label>
            <small className="help-text">
              {isAnonymous ? 'Your identity will be completely hidden' : 'You will be shown as a random user'}
            </small>
          </div>

          <button 
            type="submit" 
            className="share-submit-btn"
            disabled={isSubmitting || !message.trim() || message.length > 500}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sharing...
              </>
            ) : (
              <>
                💜 Share
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareModal;