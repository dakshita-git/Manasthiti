import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ShareModal from './components/ShareModal';
import ChatModal from './components/ChatModal';
import YogaPage from './pages/YogaPage';
import MusicPage from './pages/MusicPage';
import SelfCarePage from './pages/SelfCarePage';
import QuotesPage from './pages/QuotesPage';
import MeditationPage from './pages/MeditationPage';
import BooksPage from './pages/BooksPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header 
          onShareClick={() => setIsShareModalOpen(true)}
          onChatClick={() => setIsChatModalOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yoga" element={<YogaPage />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/self-care" element={<SelfCarePage />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/books" element={<BooksPage />} />
        </Routes>
        
        {isShareModalOpen && (
          <ShareModal onClose={() => setIsShareModalOpen(false)} />
        )}
        
        {isChatModalOpen && (
          <ChatModal onClose={() => setIsChatModalOpen(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;