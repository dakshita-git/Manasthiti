import React, { useState } from 'react';
import './SelfCarePage.css';

const SelfCarePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [completedTips, setCompletedTips] = useState([]);

  const selfCareTips = [
    {
      id: 1,
      title: 'Practice Deep Breathing',
      category: 'mental',
      difficulty: 'Easy',
      duration: '5 minutes',
      description: 'Simple breathing exercises to reduce stress and anxiety',
      steps: [
        'Find a comfortable seated position',
        'Close your eyes and relax your shoulders',
        'Breathe in slowly through your nose for 4 counts',
        'Hold your breath for 4 counts',
        'Exhale slowly through your mouth for 6 counts',
        'Repeat for 5-10 cycles'
      ],
      benefits: ['Reduces stress', 'Lowers blood pressure', 'Improves focus'],
      icon: '🫁'
    },
    {
      id: 2,
      title: 'Digital Detox Hour',
      category: 'mental',
      difficulty: 'Medium',
      duration: '60 minutes',
      description: 'Take a break from screens and digital devices',
      steps: [
        'Turn off all electronic devices',
        'Put your phone in another room',
        'Engage in offline activities like reading or drawing',
        'Spend time in nature if possible',
        'Practice mindfulness or meditation',
        'Reflect on your thoughts and feelings'
      ],
      benefits: ['Reduces eye strain', 'Improves sleep', 'Enhances creativity'],
      icon: '📱'
    },
    {
      id: 3,
      title: 'Gentle Morning Stretches',
      category: 'physical',
      difficulty: 'Easy',
      duration: '10 minutes',
      description: 'Start your day with gentle movements to awaken your body',
      steps: [
        'Stretch your arms overhead while lying in bed',
        'Gently twist your spine left and right',
        'Bring knees to chest and rock side to side',
        'Sit on the edge of bed and roll your shoulders',
        'Stand and reach for your toes',
        'Do gentle neck rolls'
      ],
      benefits: ['Increases flexibility', 'Boosts energy', 'Improves circulation'],
      icon: '🤸‍♀️'
    },
    {
      id: 4,
      title: 'Gratitude Journaling',
      category: 'emotional',
      difficulty: 'Easy',
      duration: '10 minutes',
      description: 'Write down things you\'re grateful for to boost positivity',
      steps: [
        'Get a notebook or journal',
        'Find a quiet, comfortable space',
        'Write the date at the top',
        'List 3-5 things you\'re grateful for today',
        'Be specific about why you\'re grateful',
        'Read your entries from previous days'
      ],
      benefits: ['Improves mood', 'Increases optimism', 'Better sleep quality'],
      icon: '📝'
    },
    {
      id: 5,
      title: 'Hydration Check',
      category: 'physical',
      difficulty: 'Easy',
      duration: 'All day',
      description: 'Maintain proper hydration for optimal health',
      steps: [
        'Start your day with a glass of water',
        'Keep a water bottle with you',
        'Set reminders to drink water every hour',
        'Add lemon or cucumber for flavor',
        'Monitor your urine color as a hydration indicator',
        'Aim for 8 glasses throughout the day'
      ],
      benefits: ['Boosts energy', 'Improves skin health', 'Aids digestion'],
      icon: '💧'
    },
    {
      id: 6,
      title: 'Social Connection',
      category: 'social',
      difficulty: 'Medium',
      duration: '30 minutes',
      description: 'Reach out to friends or family for meaningful connection',
      steps: [
        'Choose someone you haven\'t spoken to recently',
        'Call or video chat instead of texting',
        'Ask open-ended questions about their life',
        'Share something meaningful about your day',
        'Listen actively without distractions',
        'Plan a future activity together'
      ],
      benefits: ['Reduces loneliness', 'Improves mood', 'Strengthens relationships'],
      icon: '👥'
    },
    {
      id: 7,
      title: 'Mindful Eating',
      category: 'physical',
      difficulty: 'Medium',
      duration: '20 minutes',
      description: 'Practice awareness and appreciation while eating',
      steps: [
        'Choose a healthy snack or meal',
        'Sit at a table without distractions',
        'Look at your food and appreciate its colors',
        'Take small bites and chew slowly',
        'Notice the flavors, textures, and aromas',
        'Put your utensils down between bites'
      ],
      benefits: ['Better digestion', 'Increased satisfaction', 'Mindful awareness'],
      icon: '🍎'
    },
    {
      id: 8,
      title: 'Creative Expression',
      category: 'emotional',
      difficulty: 'Easy',
      duration: '20 minutes',
      description: 'Engage in creative activities to express yourself',
      steps: [
        'Choose a creative medium (drawing, writing, music)',
        'Set aside judgment and perfectionism',
        'Focus on the process, not the outcome',
        'Express your current emotions or thoughts',
        'Experiment with colors, words, or sounds',
        'Appreciate your unique creative expression'
      ],
      benefits: ['Reduces stress', 'Boosts self-esteem', 'Emotional release'],
      icon: '🎨'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tips', color: '#e0e7ff' },
    { id: 'mental', name: 'Mental Health', color: '#dcfce7' },
    { id: 'physical', name: 'Physical Health', color: '#fed7aa' },
    { id: 'emotional', name: 'Emotional Wellbeing', color: '#fef3c7' },
    { id: 'social', name: 'Social Connection', color: '#fce7f3' }
  ];

  const filteredTips = selectedCategory === 'all' 
    ? selfCareTips 
    : selfCareTips.filter(tip => tip.category === selectedCategory);

  const toggleTipCompletion = (tipId) => {
    setCompletedTips(prev => 
      prev.includes(tipId) 
        ? prev.filter(id => id !== tipId)
        : [...prev, tipId]
    );
  };

  return (
    <div className="selfcare-page">
      {/* Hero Section */}
      <section className="selfcare-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Self-Care Made Simple</h1>
            <p>Discover practical tips and techniques to nurture your mind, body, and soul</p>
            <button className="cta-button">Start Your Journey</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{selfCareTips.length}</div>
              <div className="stat-label">Self-Care Tips</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{completedTips.length}</div>
              <div className="stat-label">Completed Today</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <h2>Choose Your Focus</h2>
          <div className="categories-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                style={{ backgroundColor: category.color }}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips-section">
        <div className="container">
          <h2>Self-Care Tips</h2>
          <div className="tips-grid">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="tip-card">
                <div className="tip-header">
                  <div className="tip-icon">{tip.icon}</div>
                  <div className="tip-meta">
                    <span className="difficulty">{tip.difficulty}</span>
                    <span className="duration">{tip.duration}</span>
                  </div>
                </div>
                <h3>{tip.title}</h3>
                <p className="tip-description">{tip.description}</p>
                
                <div className="tip-benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {tip.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="tip-steps">
                  <h4>How to do it:</h4>
                  <ol>
                    {tip.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="tip-actions">
                  <button 
                    className={`complete-btn ${completedTips.includes(tip.id) ? 'completed' : ''}`}
                    onClick={() => toggleTipCompletion(tip.id)}
                  >
                    {completedTips.includes(tip.id) ? '✓ Completed' : 'Mark Complete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Challenge */}
      <section className="challenge-section">
        <div className="container">
          <div className="challenge-card">
            <h2>Today's Self-Care Challenge</h2>
            <div className="challenge-content">
              <div className="challenge-icon">🌟</div>
              <div className="challenge-text">
                <h3>Practice the 5-4-3-2-1 Grounding Technique</h3>
                <p>When feeling overwhelmed, name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.</p>
              </div>
            </div>
            <button className="challenge-btn">Accept Challenge</button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="container">
          <h2>Additional Resources</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>Self-Care Checklist</h3>
              <p>Download our comprehensive daily self-care checklist</p>
              <button className="resource-btn">Download PDF</button>
            </div>
            <div className="resource-card">
              <h3>Guided Meditations</h3>
              <p>Access our library of guided meditation sessions</p>
              <button className="resource-btn">Listen Now</button>
            </div>
            <div className="resource-card">
              <h3>Self-Care Journal</h3>
              <p>Track your self-care journey with our digital journal</p>
              <button className="resource-btn">Start Journaling</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelfCarePage;