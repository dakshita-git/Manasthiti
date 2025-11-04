import React, { useState, useEffect } from 'react';
import './QuotesPage.css';

const QuotesPage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const quotes = [
    {
      id: 1,
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      category: "motivation",
      tags: ["work", "passion", "success"]
    },
    {
      id: 2,
      text: "In the middle of difficulty lies opportunity.",
      author: "Albert Einstein",
      category: "resilience",
      tags: ["challenges", "growth", "opportunity"]
    },
    {
      id: 3,
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      category: "self-love",
      tags: ["authenticity", "individuality", "confidence"]
    },
    {
      id: 4,
      text: "The present moment is the only time over which we have dominion.",
      author: "Thich Nhat Hanh",
      category: "mindfulness",
      tags: ["present", "awareness", "peace"]
    },
    {
      id: 5,
      text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
      category: "self-love",
      tags: ["inner strength", "potential", "self-worth"]
    },
    {
      id: 6,
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      category: "resilience",
      tags: ["perseverance", "courage", "strength"]
    },
    {
      id: 7,
      text: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
      category: "happiness",
      tags: ["joy", "actions", "mindset"]
    },
    {
      id: 8,
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      category: "motivation",
      tags: ["action", "dreams", "achievement"]
    },
    {
      id: 9,
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
      category: "mindfulness",
      tags: ["inner peace", "meditation", "wisdom"]
    },
    {
      id: 10,
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
      category: "motivation",
      tags: ["dreams", "goals", "age"]
    },
    {
      id: 11,
      text: "Self-compassion is simply giving the same kindness to ourselves that we would give to others.",
      author: "Christopher Germer",
      category: "self-love",
      tags: ["compassion", "kindness", "self-care"]
    },
    {
      id: 12,
      text: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
      category: "motivation",
      tags: ["journey", "beginning", "possibility"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Quotes', color: '#e0e7ff' },
    { id: 'motivation', name: 'Motivation', color: '#dcfce7' },
    { id: 'resilience', name: 'Resilience', color: '#fed7aa' },
    { id: 'self-love', name: 'Self-Love', color: '#fce7f3' },
    { id: 'mindfulness', name: 'Mindfulness', color: '#fef3c7' },
    { id: 'happiness', name: 'Happiness', color: '#f0fdf4' }
  ];

  const filteredQuotes = selectedCategory === 'all' 
    ? quotes 
    : quotes.filter(quote => quote.category === selectedCategory);

  const toggleFavorite = (quoteId) => {
    setFavoriteQuotes(prev => 
      prev.includes(quoteId) 
        ? prev.filter(id => id !== quoteId)
        : [...prev, quoteId]
    );
  };

  const shareQuote = (quote) => {
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: `"${quote.text}" - ${quote.author}`,
      });
    } else {
      navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      alert('Quote copied to clipboard!');
    }
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    setCurrentQuote(randomIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % filteredQuotes.length);
    }, 10000); // Change quote every 10 seconds

    return () => clearInterval(interval);
  }, [filteredQuotes.length]);

  return (
    <div className="quotes-page">
      {/* Hero Section */}
      <section className="quotes-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Words of Wisdom</h1>
            <p>Find inspiration, motivation, and peace through carefully curated quotes</p>
            <button className="cta-button" onClick={getRandomQuote}>Get Random Quote</button>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="featured-quote-section">
        <div className="container">
          <div className="featured-quote-card">
            <div className="quote-mark">"</div>
            <blockquote className="featured-quote-text">
              {filteredQuotes[currentQuote]?.text}
            </blockquote>
            <div className="quote-author">
              — {filteredQuotes[currentQuote]?.author}
            </div>
            <div className="quote-actions">
              <button 
                className={`favorite-btn ${favoriteQuotes.includes(filteredQuotes[currentQuote]?.id) ? 'favorited' : ''}`}
                onClick={() => toggleFavorite(filteredQuotes[currentQuote]?.id)}
              >
                ❤️ {favoriteQuotes.includes(filteredQuotes[currentQuote]?.id) ? 'Favorited' : 'Favorite'}
              </button>
              <button 
                className="share-btn"
                onClick={() => shareQuote(filteredQuotes[currentQuote])}
              >
                📤 Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <h2>Explore by Category</h2>
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

      {/* Quotes Grid */}
      <section className="quotes-grid-section">
        <div className="container">
          <h2>All Quotes</h2>
          <div className="quotes-grid">
            {filteredQuotes.map((quote) => (
              <div key={quote.id} className="quote-card">
                <div className="quote-content">
                  <div className="small-quote-mark">"</div>
                  <p className="quote-text">{quote.text}</p>
                  <div className="quote-author">— {quote.author}</div>
                </div>
                <div className="quote-footer">
                  <div className="quote-tags">
                    {quote.tags.map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                  </div>
                  <div className="quote-actions">
                    <button 
                      className={`favorite-btn-small ${favoriteQuotes.includes(quote.id) ? 'favorited' : ''}`}
                      onClick={() => toggleFavorite(quote.id)}
                    >
                      ❤️
                    </button>
                    <button 
                      className="share-btn-small"
                      onClick={() => shareQuote(quote)}
                    >
                      📤
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Quote Subscription */}
      <section className="subscription-section">
        <div className="container">
          <div className="subscription-card">
            <h2>Daily Inspiration</h2>
            <p>Get a motivational quote delivered to your inbox every morning</p>
            <div className="subscription-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="email-input"
              />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <p className="subscription-note">Join 10,000+ people who start their day with inspiration</p>
          </div>
        </div>
      </section>

      {/* Favorites Section */}
      {favoriteQuotes.length > 0 && (
        <section className="favorites-section">
          <div className="container">
            <h2>Your Favorite Quotes</h2>
            <div className="favorites-grid">
              {quotes
                .filter(quote => favoriteQuotes.includes(quote.id))
                .map((quote) => (
                  <div key={quote.id} className="favorite-quote-card">
                    <p className="quote-text">"{quote.text}"</p>
                    <div className="quote-author">— {quote.author}</div>
                    <button 
                      className="remove-favorite-btn"
                      onClick={() => toggleFavorite(quote.id)}
                    >
                      Remove from Favorites
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote of the Day Widget */}
      <section className="widget-section">
        <div className="container">
          <div className="widget-card">
            <h2>Quote Widget</h2>
            <p>Add our daily quote widget to your website or blog</p>
            <div className="widget-preview">
              <div className="widget-demo">
                <div className="widget-quote">"{filteredQuotes[0]?.text}"</div>
                <div className="widget-author">— {filteredQuotes[0]?.author}</div>
              </div>
            </div>
            <button className="get-widget-btn">Get Widget Code</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;