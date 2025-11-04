import React, { useState } from 'react';
import './MusicPage.css';

const MusicPage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const musicCategories = [
    {
      id: 1,
      title: 'Nature Sounds',
      description: 'Peaceful sounds from nature to calm your mind',
      color: '#dcfce7',
      tracks: [
        { name: 'Ocean Waves', duration: '10:00', type: 'nature' },
        { name: 'Forest Rain', duration: '8:30', type: 'nature' },
        { name: 'Mountain Stream', duration: '12:15', type: 'nature' },
        { name: 'Bird Songs', duration: '15:00', type: 'nature' }
      ]
    },
    {
      id: 2,
      title: 'Meditation Music',
      description: 'Gentle melodies for deep meditation and mindfulness',
      color: '#e0e7ff',
      tracks: [
        { name: 'Tibetan Bowls', duration: '20:00', type: 'meditation' },
        { name: 'Zen Garden', duration: '18:45', type: 'meditation' },
        { name: 'Inner Peace', duration: '25:30', type: 'meditation' },
        { name: 'Mindful Moments', duration: '15:20', type: 'meditation' }
      ]
    },
    {
      id: 3,
      title: 'Sleep Sounds',
      description: 'Soothing sounds to help you drift into peaceful sleep',
      color: '#fef3c7',
      tracks: [
        { name: 'White Noise', duration: '60:00', type: 'sleep' },
        { name: 'Gentle Lullaby', duration: '45:00', type: 'sleep' },
        { name: 'Night Rain', duration: '30:00', type: 'sleep' },
        { name: 'Soft Piano', duration: '40:00', type: 'sleep' }
      ]
    },
    {
      id: 4,
      title: 'Focus Music',
      description: 'Instrumental music to enhance concentration and productivity',
      color: '#fed7aa',
      tracks: [
        { name: 'Study Beats', duration: '90:00', type: 'focus' },
        { name: 'Ambient Focus', duration: '75:00', type: 'focus' },
        { name: 'Classical Study', duration: '120:00', type: 'focus' },
        { name: 'Lo-Fi Chill', duration: '85:00', type: 'focus' }
      ]
    }
  ];

  const featuredPlaylists = [
    {
      title: 'Morning Motivation',
      description: 'Start your day with positive energy',
      duration: '45 minutes',
      tracks: 12,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Stress Relief',
      description: 'Calm your mind after a long day',
      duration: '60 minutes',
      tracks: 15,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Deep Focus',
      description: 'Enhance your concentration and productivity',
      duration: '120 minutes',
      tracks: 20,
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const handlePlayTrack = (track, category) => {
    setCurrentTrack({ ...track, category });
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-page">
      {/* Hero Section */}
      <section className="music-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Healing Through Music</h1>
            <p>Discover the therapeutic power of sound and melody for your mental wellbeing</p>
            <button className="cta-button">Explore Music</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>The Power of Music Therapy</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎵</div>
              <h3>Reduces Stress</h3>
              <p>Music lowers cortisol levels and promotes relaxation</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🧠</div>
              <h3>Improves Focus</h3>
              <p>Certain frequencies enhance concentration and cognitive function</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">😴</div>
              <h3>Better Sleep</h3>
              <p>Soothing sounds help regulate sleep patterns naturally</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h3>Emotional Balance</h3>
              <p>Music therapy supports emotional processing and healing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="playlists-section">
        <div className="container">
          <h2>Featured Playlists</h2>
          <div className="playlists-grid">
            {featuredPlaylists.map((playlist, index) => (
              <div key={index} className="playlist-card">
                <div className="playlist-image">
                  <img src={playlist.image} alt={playlist.title} />
                  <div className="play-overlay">
                    <button className="play-button">▶</button>
                  </div>
                </div>
                <div className="playlist-content">
                  <h3>{playlist.title}</h3>
                  <p>{playlist.description}</p>
                  <div className="playlist-meta">
                    <span>{playlist.tracks} tracks</span>
                    <span>{playlist.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Categories */}
      <section className="categories-section">
        <div className="container">
          <h2>Music Categories</h2>
          <div className="categories-grid">
            {musicCategories.map((category) => (
              <div key={category.id} className="category-card" style={{ backgroundColor: category.color }}>
                <div className="category-header">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="tracks-list">
                  {category.tracks.map((track, index) => (
                    <div 
                      key={index} 
                      className="track-item"
                      onClick={() => handlePlayTrack(track, category.title)}
                    >
                      <div className="track-info">
                        <span className="track-name">{track.name}</span>
                        <span className="track-duration">{track.duration}</span>
                      </div>
                      <button className="track-play-btn">▶</button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Player */}
      {currentTrack && (
        <div className="music-player">
          <div className="player-content">
            <div className="track-info">
              <span className="track-name">{currentTrack.name}</span>
              <span className="track-category">{currentTrack.category}</span>
            </div>
            <div className="player-controls">
              <button className="prev-btn">⏮</button>
              <button className="play-pause-btn" onClick={togglePlayPause}>
                {isPlaying ? '⏸' : '▶'}
              </button>
              <button className="next-btn">⏭</button>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '30%' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2>Music Therapy Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>Create a Routine</h3>
              <p>Listen to calming music at the same time each day to establish healthy patterns</p>
            </div>
            <div className="tip-card">
              <h3>Match Your Mood</h3>
              <p>Choose music that reflects your current emotional state, then gradually shift to your desired mood</p>
            </div>
            <div className="tip-card">
              <h3>Use Headphones</h3>
              <p>For deeper immersion and better therapeutic effects, use quality headphones</p>
            </div>
            <div className="tip-card">
              <h3>Combine with Breathing</h3>
              <p>Synchronize your breathing with the rhythm for enhanced relaxation benefits</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicPage;