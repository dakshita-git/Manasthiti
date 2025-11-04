import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ShareModal from './components/ShareModal';
import ChatModal from './components/ChatModal';
import YogaPage from './pages/YogaPage';
import MusicPage from './pages/MusicPage';
import SelfCarePage from './pages/SelfCarePage';
import QuotesPage from './pages/QuotesPage';

function App() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);

  return (
    <Router>
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