import React, { useState } from 'react';
import './BooksPage.css';

const BooksPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const books = [
    {
      id: 1,
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      category: 'mindfulness',
      rating: 4.8,
      pages: 236,
      description: 'A guide to spiritual enlightenment that teaches living in the present moment and freeing yourself from the pain of the past and anxiety about the future.',
      keyLessons: ['Live in the present moment', 'Observe your thoughts without judgment', 'Find peace within yourself'],
      cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['mindfulness', 'spirituality', 'peace'],
      readTime: '6 hours',
      link: 'https://www.goodreads.com/book/show/6708.The_Power_of_Now'
    },
    {
      id: 2,
      title: 'Feeling Good: The New Mood Therapy',
      author: 'David D. Burns',
      category: 'anxiety',
      rating: 4.7,
      pages: 736,
      description: 'A clinically proven drug-free treatment for depression using cognitive behavioral therapy techniques to overcome negative thinking patterns.',
      keyLessons: ['Identify cognitive distortions', 'Challenge negative thoughts', 'Build self-esteem naturally'],
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['depression', 'CBT', 'therapy'],
      readTime: '12 hours',
      link: 'https://www.goodreads.com/book/show/46674.Feeling_Good'
    },
    {
      id: 3,
      title: 'The Anxiety and Worry Workbook',
      author: 'Clark & Beck',
      category: 'anxiety',
      rating: 4.6,
      pages: 312,
      description: 'A practical workbook based on cognitive therapy that provides tools and exercises to overcome anxiety and worry in daily life.',
      keyLessons: ['Understand anxiety triggers', 'Practical coping strategies', 'Build resilience'],
      cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['anxiety', 'workbook', 'CBT'],
      readTime: '8 hours',
      link: 'https://www.goodreads.com/book/show/7015672'
    },
    {
      id: 4,
      title: 'Man\'s Search for Meaning',
      author: 'Viktor E. Frankl',
      category: 'resilience',
      rating: 4.9,
      pages: 165,
      description: 'A Holocaust survivor\'s account of finding purpose and meaning even in the most extreme suffering, forming the basis of logotherapy.',
      keyLessons: ['Find meaning in suffering', 'Choose your attitude', 'Purpose drives survival'],
      cover: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['meaning', 'resilience', 'philosophy'],
      readTime: '4 hours',
      link: 'https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning'
    },
    {
      id: 5,
      title: 'The Body Keeps the Score',
      author: 'Bessel van der Kolk',
      category: 'trauma',
      rating: 4.8,
      pages: 464,
      description: 'Explores how trauma reshapes both body and brain, and offers innovative treatments for recovery including yoga, EMDR, and theater.',
      keyLessons: ['Trauma lives in the body', 'Multiple paths to healing', 'Reconnect with yourself'],
      cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['trauma', 'healing', 'neuroscience'],
      readTime: '14 hours',
      link: 'https://www.goodreads.com/book/show/18693771'
    },
    {
      id: 6,
      title: 'Atomic Habits',
      author: 'James Clear',
      category: 'self-improvement',
      rating: 4.8,
      pages: 320,
      description: 'An easy and proven way to build good habits and break bad ones using the science of tiny changes that lead to remarkable results.',
      keyLessons: ['1% better every day', 'Identity-based habits', 'Environment design'],
      cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['habits', 'productivity', 'growth'],
      readTime: '9 hours',
      link: 'https://www.goodreads.com/book/show/40121378'
    },
    {
      id: 7,
      title: 'Self-Compassion',
      author: 'Kristin Neff',
      category: 'self-love',
      rating: 4.7,
      pages: 320,
      description: 'The proven power of being kind to yourself, showing how self-compassion is the antidote to self-criticism and the key to resilience.',
      keyLessons: ['Be kind to yourself', 'Common humanity', 'Mindful awareness'],
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['self-compassion', 'kindness', 'healing'],
      readTime: '8 hours',
      link: 'https://www.goodreads.com/book/show/10127008'
    },
    {
      id: 8,
      title: 'Why Has Nobody Told Me This Before?',
      author: 'Dr. Julie Smith',
      category: 'mental-health',
      rating: 4.8,
      pages: 352,
      description: 'Essential tools for everyday mental health from a clinical psychologist, covering low mood, grief, anxiety, and building resilience.',
      keyLessons: ['Manage low mood', 'Build mental strength', 'Practical daily tools'],
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['mental health', 'practical', 'psychology'],
      readTime: '10 hours',
      link: 'https://www.goodreads.com/book/show/58536046'
    },
    {
      id: 9,
      title: 'The Gifts of Imperfection',
      author: 'Brené Brown',
      category: 'self-love',
      rating: 4.7,
      pages: 160,
      description: 'Let go of who you think you should be and embrace who you are. A guide to wholehearted living through courage, compassion, and connection.',
      keyLessons: ['Embrace vulnerability', 'Let go of perfectionism', 'Cultivate gratitude'],
      cover: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['vulnerability', 'authenticity', 'courage'],
      readTime: '5 hours',
      link: 'https://www.goodreads.com/book/show/6452796'
    },
    {
      id: 10,
      title: 'Lost Connections',
      author: 'Johann Hari',
      category: 'depression',
      rating: 4.6,
      pages: 336,
      description: 'Uncovers the real causes of depression and anxiety and the unexpected solutions, challenging conventional thinking about mental health.',
      keyLessons: ['Social connection matters', 'Meaningful work heals', 'Reconnect with nature'],
      cover: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['depression', 'connection', 'society'],
      readTime: '9 hours',
      link: 'https://www.goodreads.com/book/show/34921573'
    },
    {
      id: 11,
      title: 'Mindfulness in Plain English',
      author: 'Bhante Gunaratana',
      category: 'mindfulness',
      rating: 4.7,
      pages: 224,
      description: 'A clear, practical guide to mindfulness meditation that has helped millions of people develop a regular meditation practice.',
      keyLessons: ['Start a meditation practice', 'Observe without judgment', 'Cultivate inner peace'],
      cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['meditation', 'mindfulness', 'Buddhism'],
      readTime: '6 hours',
      link: 'https://www.goodreads.com/book/show/64369'
    },
    {
      id: 12,
      title: 'The Subtle Art of Not Giving a F*ck',
      author: 'Mark Manson',
      category: 'self-improvement',
      rating: 4.5,
      pages: 224,
      description: 'A counterintuitive approach to living a good life by focusing on what truly matters and letting go of what doesn\'t.',
      keyLessons: ['Choose your values wisely', 'Embrace uncertainty', 'Take responsibility'],
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      tags: ['values', 'perspective', 'growth'],
      readTime: '6 hours',
      link: 'https://www.goodreads.com/book/show/28257707'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Books', color: '#e0e7ff' },
    { id: 'mindfulness', name: 'Mindfulness', color: '#dcfce7' },
    { id: 'anxiety', name: 'Anxiety', color: '#fce7f3' },
    { id: 'depression', name: 'Depression', color: '#fef3c7' },
    { id: 'resilience', name: 'Resilience', color: '#fed7aa' },
    { id: 'trauma', name: 'Trauma', color: '#f3e8ff' },
    { id: 'self-love', name: 'Self-Love', color: '#fce7f3' },
    { id: 'self-improvement', name: 'Self-Improvement', color: '#d1fae5' },
    { id: 'mental-health', name: 'Mental Health', color: '#dbeafe' }
  ];

  const filtered = books.filter(book => {
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : i < rating ? 'half' : ''}`}>★</span>
    ));
  };

  return (
    <div className="books-page">
      {/* Hero */}
      <section className="books-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Self-Help Library</h1>
            <p>Curated books to guide your mental health and personal growth journey</p>
            <div className="hero-search">
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="books-categories">
        <div className="container">
          <div className="categories-scroll">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                style={{ '--cat-color': cat.color }}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="books-grid-section">
        <div className="container">
          <div className="results-count">
            Showing {filtered.length} book{filtered.length !== 1 ? 's' : ''}
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
          </div>
          <div className="books-grid">
            {filtered.map(book => (
              <div key={book.id} className="book-card" onClick={() => setSelectedBook(book)}>
                <div className="book-cover">
                  <img src={book.cover} alt={book.title} />
                  <div className="book-overlay">
                    <button className="view-btn">View Details</button>
                  </div>
                  <div className="book-category-badge">{book.category}</div>
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">by {book.author}</p>
                  <div className="book-meta">
                    <div className="book-rating">
                      {renderStars(book.rating)}
                      <span className="rating-num">{book.rating}</span>
                    </div>
                    <span className="book-pages">{book.pages} pages</span>
                  </div>
                  <p className="book-desc">{book.description.substring(0, 90)}...</p>
                  <div className="book-tags">
                    {book.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="book-tag">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div className="book-modal-overlay" onClick={() => setSelectedBook(null)}>
          <div className="book-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBook(null)}>✕</button>
            <div className="modal-body">
              <div className="modal-cover">
                <img src={selectedBook.cover} alt={selectedBook.title} />
                <div className="modal-rating">
                  {renderStars(selectedBook.rating)}
                  <span>{selectedBook.rating}/5</span>
                </div>
              </div>
              <div className="modal-details">
                <span className="modal-category">{selectedBook.category}</span>
                <h2>{selectedBook.title}</h2>
                <p className="modal-author">by {selectedBook.author}</p>
                <div className="modal-stats">
                  <div className="modal-stat">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/></svg>
                    <span>{selectedBook.readTime}</span>
                  </div>
                  <div className="modal-stat">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2"/></svg>
                    <span>{selectedBook.pages} pages</span>
                  </div>
                </div>
                <p className="modal-description">{selectedBook.description}</p>
                <div className="modal-lessons">
                  <h4>Key Lessons</h4>
                  <ul>
                    {selectedBook.keyLessons.map((lesson, i) => (
                      <li key={i}>
                        <span className="lesson-check">✓</span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="modal-tags">
                  {selectedBook.tags.map((tag, i) => (
                    <span key={i} className="book-tag">#{tag}</span>
                  ))}
                </div>
                <a
                  href={selectedBook.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-btn"
                >
                  <svg viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  View on Goodreads
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksPage;
