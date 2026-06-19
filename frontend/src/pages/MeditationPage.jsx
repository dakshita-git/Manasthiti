import React, { useState, useEffect, useRef } from 'react';
import './MeditationPage.css';

const MeditationPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes default
  const [selectedDuration, setSelectedDuration] = useState(5);
  const [selectedTechnique, setSelectedTechnique] = useState('box');
  const [breathPhase, setBreathPhase] = useState('inhale');
  const [ambientSound, setAmbientSound] = useState(null);
  const [isLoadingSound, setIsLoadingSound] = useState(false);
  const [availableSounds, setAvailableSounds] = useState([]);
  const [selectedSound, setSelectedSound] = useState('rain');
  const [breathCount, setBreathCount] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [showCompletion, setShowCompletion] = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);
  const [phaseTimer, setPhaseTimer] = useState(0);
  
  const audioRef = useRef(null);
  const intervalRef = useRef(null);
  const breathIntervalRef = useRef(null);
  const phaseIntervalRef = useRef(null);

  const breathingTechniques = {
    box: {
      name: 'Box Breathing',
      description: 'Equal counts for inhale, hold, exhale, hold',
      pattern: [
        { phase: 'inhale', duration: 4, instruction: 'Breathe In' },
        { phase: 'hold', duration: 4, instruction: 'Hold' },
        { phase: 'exhale', duration: 4, instruction: 'Breathe Out' },
        { phase: 'hold', duration: 4, instruction: 'Hold' }
      ],
      benefits: ['Reduces stress', 'Improves focus', 'Calms nervous system']
    },
    '478': {
      name: '4-7-8 Breathing',
      description: 'Relaxing breath technique for sleep',
      pattern: [
        { phase: 'inhale', duration: 4, instruction: 'Breathe In' },
        { phase: 'hold', duration: 7, instruction: 'Hold' },
        { phase: 'exhale', duration: 8, instruction: 'Breathe Out' }
      ],
      benefits: ['Promotes sleep', 'Reduces anxiety', 'Lowers blood pressure']
    },
    calm: {
      name: 'Calm Breathing',
      description: 'Simple relaxation technique',
      pattern: [
        { phase: 'inhale', duration: 4, instruction: 'Breathe In' },
        { phase: 'exhale', duration: 6, instruction: 'Breathe Out' }
      ],
      benefits: ['Quick relaxation', 'Easy to learn', 'Reduces tension']
    }
  };

  const soundOptions = [
    { 
      id: 'rain', 
      name: 'Rain', 
      query: 'rain forest', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1zm8-4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1v-7c0-.55-.45-1-1-1zm-4 2c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1v-5c0-.55-.45-1-1-1zm10-2c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1v-7c0-.55-.45-1-1-1zm-1-7.92L4 4v2h.02L3 6.21V8h.02L2 8.21V10h8.26c1.47-2.76 4.4-4.66 7.74-4.92z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'ocean', 
      name: 'Ocean Waves', 
      query: 'ocean waves', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 16.99c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-4.45c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-8.08c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V5.04c-.9 0-1.4-.25-2.05-.58zM17 8.09c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8V9.49c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'forest', 
      name: 'Forest', 
      query: 'forest birds', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 12c.83 0 1.5-.67 1.5-1.5S17.33 9 16.5 9 15 9.67 15 10.5s.67 1.5 1.5 1.5zm-9 0c.83 0 1.5-.67 1.5-1.5S8.33 9 7.5 9 6 9.67 6 10.5 6.67 12 7.5 12zm4.5 9c2.97 0 5.46-2.23 5.93-5.11-.35.07-.7.11-1.07.11-2.18 0-4.04-1.57-4.92-3.87C11.1 10.42 9.45 9 7.5 9c-.37 0-.72.04-1.07.11C6.54 6.23 9.03 4 12 4c.95 0 1.85.21 2.65.59L17 2.24C15.57 1.45 13.84 1 12 1 7.03 1 3 5.03 3 10c0 3.54 2.29 6.53 5.47 7.59.4 2.01 1.98 3.66 4.03 4.24.5.14 1 .17 1.5.17z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'wind', 
      name: 'Wind', 
      query: 'wind chimes', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5 17c0 1.65-1.35 3-3 3s-3-1.35-3-3h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1H2v-2h9.5c1.65 0 3 1.35 3 3zM19 6.5C19 4.57 17.43 3 15.5 3S12 4.57 12 6.5h2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 8 15.5 8H2v2h13.5c1.93 0 3.5-1.57 3.5-3.5zm-.5 4.5H2v2h16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5v2c1.93 0 3.5-1.57 3.5-3.5S20.43 11 18.5 11z" fill="currentColor"/>
        </svg>
      )
    },
    { 
      id: 'stream', 
      name: 'Stream', 
      query: 'water stream', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.69l5.66 5.66c3.12 3.12 3.12 8.19 0 11.31C15.54 21.78 13.77 22.5 12 22.5s-3.54-.72-5.66-2.83c-3.12-3.12-3.12-8.19 0-11.31L12 2.69m0 2.83l-4.24 4.24c-2.34 2.34-2.34 6.14 0 8.49 1.17 1.17 2.7 1.76 4.24 1.76s3.07-.59 4.24-1.76c2.34-2.34 2.34-6.14 0-8.49L12 5.52z" fill="currentColor"/>
        </svg>
      )
    }
  ];

  // Direct ambient sound URLs (fallback solution)
  const directSoundUrls = {
    rain: 'https://cdn.pixabay.com/audio/2022/05/13/audio_257112ce99.mp3',
    ocean: 'https://cdn.pixabay.com/audio/2022/06/07/audio_1808fbf07a.mp3',
    forest: 'https://cdn.pixabay.com/audio/2022/03/10/audio_4dedf2bf94.mp3',
    wind: 'https://cdn.pixabay.com/audio/2021/08/04/audio_0625c1539c.mp3',
    stream: 'https://cdn.pixabay.com/audio/2022/03/24/audio_c8d6e2c3ff.mp3'
  };

  // Fetch ambient sounds - using direct URLs for reliability
  const fetchAmbientSound = async (soundType) => {
    setIsLoadingSound(true);
    try {
      // Use direct sound URLs for immediate playback
      const soundUrl = directSoundUrls[soundType];
      if (soundUrl) {
        setAmbientSound(soundUrl);
        console.log('Sound loaded:', soundType);
      } else {
        console.log('Sound not found for:', soundType);
        setAmbientSound(null);
      }
    } catch (error) {
      console.error('Error loading sound:', error);
      setAmbientSound(null);
    } finally {
      setIsLoadingSound(false);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      handleSessionComplete();
    }
    
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPaused, timeLeft]);

  // Breathing pattern animation with phase timer
  useEffect(() => {
    if (isActive && !isPaused) {
      const technique = breathingTechniques[selectedTechnique];
      let currentStep = 0;
      
      const runBreathingCycle = () => {
        const step = technique.pattern[currentStep];
        setBreathPhase(step.phase);
        setPhaseTimer(step.duration);
        
        // Count breaths when completing exhale
        if (step.phase === 'exhale') {
          setBreathCount(prev => prev + 1);
        }
        
        // Phase countdown timer
        let phaseTime = step.duration;
        phaseIntervalRef.current = setInterval(() => {
          phaseTime -= 1;
          setPhaseTimer(phaseTime);
          if (phaseTime <= 0) {
            clearInterval(phaseIntervalRef.current);
          }
        }, 1000);
        
        breathIntervalRef.current = setTimeout(() => {
          currentStep = (currentStep + 1) % technique.pattern.length;
          runBreathingCycle();
        }, step.duration * 1000);
      };
      
      runBreathingCycle();
    }
    
    return () => {
      clearTimeout(breathIntervalRef.current);
      clearInterval(phaseIntervalRef.current);
    };
  }, [isActive, isPaused, selectedTechnique]);

  // Audio control with volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (ambientSound) {
        if (isActive && !isPaused) {
          audioRef.current.play().catch(e => console.log('Audio play error:', e));
        } else {
          audioRef.current.pause();
        }
      }
    }
  }, [isActive, isPaused, ambientSound, volume]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setBreathCount(0);
    setShowCompletion(false);
    if (!ambientSound) {
      fetchAmbientSound(selectedSound);
    }
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(selectedDuration * 60);
    setBreathPhase('inhale');
    setBreathCount(0);
    setPhaseTimer(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleSessionComplete = () => {
    const session = {
      date: new Date().toISOString(),
      duration: selectedDuration,
      technique: breathingTechniques[selectedTechnique].name,
      breaths: breathCount
    };
    
    const history = JSON.parse(localStorage.getItem('meditationHistory') || '[]');
    history.unshift(session);
    localStorage.setItem('meditationHistory', JSON.stringify(history.slice(0, 10)));
    setSessionHistory(history.slice(0, 10));
    
    setShowCompletion(true);
    setIsActive(false);
    setIsPaused(false);
    
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    setTimeout(() => {
      setTimeLeft(selectedDuration * 60);
      setBreathPhase('inhale');
      setBreathCount(0);
    }, 3000);
  };

  const handleDurationChange = (minutes) => {
    setSelectedDuration(minutes);
    setTimeLeft(minutes * 60);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getCurrentInstruction = () => {
    const technique = breathingTechniques[selectedTechnique];
    const step = technique.pattern.find(p => p.phase === breathPhase);
    return step?.instruction || 'Breathe';
  };

  const getProgress = () => {
    const totalSeconds = selectedDuration * 60;
    const elapsed = totalSeconds - timeLeft;
    return (elapsed / totalSeconds) * 100;
  };

  // Load session history on mount
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('meditationHistory') || '[]');
    setSessionHistory(history.slice(0, 10));
  }, []);

  return (
    <div className="meditation-page">
      {/* Hero Section */}
      <section className="meditation-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Meditation & Breathing</h1>
            <p>Find your calm with guided breathing exercises and ambient sounds</p>
          </div>
        </div>
      </section>

      {/* Main Meditation Timer */}
      <section className="meditation-timer-section">
        <div className="container">
          <div className="timer-container">
            {/* Progress Bar */}
            {isActive && (
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${getProgress()}%` }}></div>
              </div>
            )}

            {/* Stats Display */}
            {isActive && (
              <div className="session-stats">
                <div className="stat-item">
                  <span className="stat-label">Breaths</span>
                  <span className="stat-value">{breathCount}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Phase</span>
                  <span className="stat-value">{phaseTimer}s</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Progress</span>
                  <span className="stat-value">{Math.round(getProgress())}%</span>
                </div>
              </div>
            )}

            {/* Breathing Circle */}
            <div className={`breathing-circle ${isActive ? breathPhase : ''} ${isActive && !isPaused ? 'active' : ''}`}>
              <div className="circle-inner">
                <div className="breath-instruction">
                  {isActive ? getCurrentInstruction() : 'Ready to Begin'}
                </div>
                <div className="timer-display">
                  {formatTime(timeLeft)}
                </div>
                {isActive && (
                  <div className="breath-counter">
                    {breathCount} breaths
                  </div>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="timer-controls">
              {!isActive ? (
                <button className="control-btn start-btn" onClick={handleStart}>
                  <span className="btn-icon">▶</span>
                  Start Session
                </button>
              ) : (
                <>
                  <button className="control-btn pause-btn" onClick={handlePause}>
                    <span className="btn-icon">{isPaused ? '▶' : '⏸'}</span>
                    {isPaused ? 'Resume' : 'Pause'}
                  </button>
                  <button className="control-btn stop-btn" onClick={handleStop}>
                    <span className="btn-icon">⏹</span>
                    Stop
                  </button>
                </>
              )}
            </div>

            {/* Volume Control */}
            {isActive && ambientSound && (
              <div className="volume-control">
                <span className="volume-icon">🔊</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="volume-slider"
                />
                <span className="volume-value">{Math.round(volume * 100)}%</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Completion Modal */}
      {showCompletion && (
        <div className="completion-modal">
          <div className="completion-content">
            <div className="completion-icon">🎉</div>
            <h2>Session Complete!</h2>
            <p>Great job! You completed {selectedDuration} minutes of meditation.</p>
            <div className="completion-stats">
              <div className="completion-stat">
                <span className="stat-number">{breathCount}</span>
                <span className="stat-text">Total Breaths</span>
              </div>
              <div className="completion-stat">
                <span className="stat-number">{selectedDuration}</span>
                <span className="stat-text">Minutes</span>
              </div>
            </div>
            <button className="completion-btn" onClick={() => setShowCompletion(false)}>
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Session History */}
      {!isActive && sessionHistory.length > 0 && (
        <section className="history-section">
          <div className="container">
            <h2>Recent Sessions</h2>
            <div className="history-grid">
              {sessionHistory.slice(0, 5).map((session, index) => (
                <div key={index} className="history-card">
                  <div className="history-date">
                    {new Date(session.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  <div className="history-details">
                    <span className="history-technique">{session.technique}</span>
                    <span className="history-duration">{session.duration} min</span>
                    <span className="history-breaths">{session.breaths} breaths</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Settings Section */}
      {!isActive && (
        <section className="settings-section">
          <div className="container">
            <div className="settings-grid">
              {/* Duration Selection */}
              <div className="setting-card">
                <h3>Session Duration</h3>
                <div className="duration-options">
                  {[3, 5, 10, 15, 20].map(duration => (
                    <button
                      key={duration}
                      className={`duration-btn ${selectedDuration === duration ? 'active' : ''}`}
                      onClick={() => handleDurationChange(duration)}
                    >
                      {duration} min
                    </button>
                  ))}
                </div>
              </div>

              {/* Breathing Technique */}
              <div className="setting-card">
                <h3>Breathing Technique</h3>
                <div className="technique-options">
                  {Object.entries(breathingTechniques).map(([key, technique]) => (
                    <div
                      key={key}
                      className={`technique-option ${selectedTechnique === key ? 'active' : ''}`}
                      onClick={() => setSelectedTechnique(key)}
                    >
                      <h4>{technique.name}</h4>
                      <p>{technique.description}</p>
                    </div>
                  ))}
                </div>
                
                {/* Benefits of Selected Technique */}
                <div className="technique-benefits">
                  <h4>Benefits:</h4>
                  <div className="benefits-list">
                    {breathingTechniques[selectedTechnique].benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item-inline">
                        <span className="benefit-check">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ambient Sound */}
              <div className="setting-card">
                <h3>Ambient Sound</h3>
                {isLoadingSound && (
                  <div className="loading-indicator">
                    <span>Loading sound...</span>
                  </div>
                )}
                <div className="sound-options">
                  {soundOptions.map(sound => (
                    <button
                      key={sound.id}
                      className={`sound-btn ${selectedSound === sound.id ? 'active' : ''}`}
                      onClick={() => setSelectedSound(sound.id)}
                      disabled={isLoadingSound}
                    >
                      <span className="sound-icon">{sound.icon}</span>
                      <span className="sound-name">{sound.name}</span>
                    </button>
                  ))}
                </div>
                {ambientSound && !isActive && (
                  <div className="sound-ready">
                    <span>✓ Sound ready to play</span>
                    <button 
                      className="test-sound-btn"
                      onClick={() => {
                        if (audioRef.current) {
                          if (audioRef.current.paused) {
                            audioRef.current.play();
                          } else {
                            audioRef.current.pause();
                            audioRef.current.currentTime = 0;
                          }
                        }
                      }}
                    >
                      {audioRef.current && !audioRef.current.paused ? '⏸ Stop Preview' : '▶ Preview Sound'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Audio Element */}
      {ambientSound && (
        <audio 
          ref={audioRef} 
          src={ambientSound} 
          loop 
          preload="auto"
          onError={(e) => console.error('Audio error:', e)}
          onLoadedData={() => console.log('Audio loaded successfully')}
        />
      )}
    </div>
  );
};

export default MeditationPage;
