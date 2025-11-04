import React, { useState } from 'react';
import './YogaPage.css';

const YogaPage = () => {
  const [selectedPose, setSelectedPose] = useState(null);

  const yogaPoses = [
    {
      id: 1,
      name: 'Child\'s Pose',
      sanskrit: 'Balasana',
      difficulty: 'Beginner',
      duration: '1-3 minutes',
      benefits: ['Reduces stress', 'Calms the mind', 'Relieves back tension'],
      instructions: [
        'Kneel on the floor with your big toes touching',
        'Sit back on your heels and separate your knees',
        'Fold forward, extending your arms in front',
        'Rest your forehead on the ground and breathe deeply'
      ],
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 2,
      name: 'Mountain Pose',
      sanskrit: 'Tadasana',
      difficulty: 'Beginner',
      duration: '30 seconds - 1 minute',
      benefits: ['Improves posture', 'Increases awareness', 'Builds confidence'],
      instructions: [
        'Stand with feet hip-width apart',
        'Ground through all four corners of your feet',
        'Engage your leg muscles and lengthen your spine',
        'Relax your shoulders and breathe steadily'
      ],
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 3,
      name: 'Warrior I',
      sanskrit: 'Virabhadrasana I',
      difficulty: 'Intermediate',
      duration: '30 seconds - 1 minute each side',
      benefits: ['Strengthens legs', 'Opens hips', 'Builds focus'],
      instructions: [
        'Step your left foot back 3-4 feet',
        'Turn your left foot out 45 degrees',
        'Bend your right knee over your ankle',
        'Raise your arms overhead and hold'
      ],
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 4,
      name: 'Corpse Pose',
      sanskrit: 'Savasana',
      difficulty: 'Beginner',
      duration: '5-10 minutes',
      benefits: ['Deep relaxation', 'Reduces anxiety', 'Restores energy'],
      instructions: [
        'Lie flat on your back with legs extended',
        'Let your feet fall open naturally',
        'Place arms at your sides, palms up',
        'Close your eyes and focus on your breath'
      ],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const yogaPrograms = [
    {
      title: 'Morning Energizer',
      duration: '15 minutes',
      level: 'All Levels',
      description: 'Start your day with gentle stretches and energizing poses'
    },
    {
      title: 'Stress Relief',
      duration: '20 minutes',
      level: 'Beginner',
      description: 'Calm your mind and release tension with restorative poses'
    },
    {
      title: 'Evening Wind Down',
      duration: '25 minutes',
      level: 'All Levels',
      description: 'Prepare for restful sleep with gentle, relaxing sequences'
    }
  ];

  return (
    <div className="yoga-page">
      {/* Hero Section */}
      <section className="yoga-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Find Peace Through Yoga</h1>
            <p>Discover inner calm and physical wellness through mindful movement and breathing</p>
            <button className="cta-button">Start Your Practice</button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Why Practice Yoga?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🧠</div>
              <h3>Mental Clarity</h3>
              <p>Improve focus and reduce mental clutter through mindful movement</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💪</div>
              <h3>Physical Strength</h3>
              <p>Build flexibility, balance, and core strength naturally</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">😌</div>
              <h3>Stress Relief</h3>
              <p>Release tension and find calm in your daily routine</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h3>Emotional Balance</h3>
              <p>Connect with your inner self and cultivate emotional wellness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Poses Section */}
      <section className="poses-section">
        <div className="container">
          <h2>Essential Yoga Poses</h2>
          <div className="poses-grid">
            {yogaPoses.map((pose) => (
              <div 
                key={pose.id} 
                className="pose-card"
                onClick={() => setSelectedPose(pose)}
              >
                <div className="pose-image">
                  <img src={pose.image} alt={pose.name} />
                  <div className="difficulty-badge">{pose.difficulty}</div>
                </div>
                <div className="pose-content">
                  <h3>{pose.name}</h3>
                  <p className="sanskrit">{pose.sanskrit}</p>
                  <p className="duration">{pose.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <h2>Guided Programs</h2>
          <div className="programs-grid">
            {yogaPrograms.map((program, index) => (
              <div key={index} className="program-card">
                <h3>{program.title}</h3>
                <div className="program-meta">
                  <span className="duration">{program.duration}</span>
                  <span className="level">{program.level}</span>
                </div>
                <p>{program.description}</p>
                <button className="program-button">Start Program</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pose Modal */}
      {selectedPose && (
        <div className="pose-modal-overlay" onClick={() => setSelectedPose(null)}>
          <div className="pose-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedPose(null)}>×</button>
            <div className="modal-content">
              <img src={selectedPose.image} alt={selectedPose.name} />
              <div className="modal-info">
                <h2>{selectedPose.name}</h2>
                <p className="sanskrit">{selectedPose.sanskrit}</p>
                <div className="pose-details">
                  <span className="difficulty">Difficulty: {selectedPose.difficulty}</span>
                  <span className="duration">Duration: {selectedPose.duration}</span>
                </div>
                <div className="benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {selectedPose.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                <div className="instructions">
                  <h4>Instructions:</h4>
                  <ol>
                    {selectedPose.instructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YogaPage;