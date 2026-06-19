<<<<<<< HEAD
# 🌟 Manasthiti - Mental Health Support Platform

<div align="center">

![Mental Health Support](https://img.shields.io/badge/Mental%20Health-Support-purple?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Realtime-FFCA28?style=for-the-badge&logo=firebase)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A safe, anonymous platform for mental health support, meditation, and community connection.**

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation)

</div>

---

## 📖 About

**Share Talk, Heal** is a comprehensive mental health support platform designed to provide a safe, anonymous space for individuals to share their feelings, connect with peers, and access mental wellness resources. Built with React and Firebase, it offers real-time community interaction, guided meditation, and curated self-care resources.

### 🎯 Mission

To create a judgment-free environment where anyone can find support, practice mindfulness, and begin their healing journey.

---

## ✨ Features

### 🔐 Anonymous Sharing
- **Private Expression**: Share your thoughts and feelings anonymously
- **Real-time Posts**: See community posts update in real-time
- **Safe Environment**: Complete privacy and security guaranteed

### 💬 Peer Support
- **Live Chat**: Connect with trained peer mentors
- **Community Notes**: Read and share supportive messages
- **24/7 Availability**: Support whenever you need it

### 🧘 Interactive Meditation Timer
- **3 Breathing Techniques**:
  - Box Breathing (4-4-4-4)
  - 4-7-8 Breathing
  - Calm Breathing (4-6)
- **Ambient Nature Sounds**: Rain, Ocean, Forest, Wind, Stream
- **Real-time Progress Tracking**: Breath counter, phase timer, progress bar
- **Session History**: Track your meditation journey
- **Volume Control**: Adjust ambient sounds on the fly
- **Completion Celebrations**: Celebrate your achievements

### 📚 Wellness Resources
- **Yoga Practices**: Guided poses with instructions and benefits
- **Music Therapy**: Curated playlists for relaxation
- **Self-Care Tips**: Daily practices for mental wellbeing
- **Inspirational Quotes**: Uplifting words for motivation

### 📊 Progress Tracking
- **Session History**: View past meditation sessions
- **Statistics**: Track breaths, duration, and techniques
- **Local Storage**: Data persists across sessions

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for backend features)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/share-talk-heal.git
cd share-talk-heal
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up Firebase**
   
   Create a `src/firebase/config.js` file:
```javascript
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
```

4. **Start the development server**
```bash
npm start
```

5. **Open your browser**
```
http://localhost:3000
```

---

## 🏗️ Project Structure

```
share-talk-heal/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js              # Navigation header
│   │   ├── Home.js                # Main landing page
│   │   ├── Resources.js           # Resource cards
│   │   ├── AnonymousNotes.js      # Community posts
│   │   ├── ShareModal.js          # Post creation modal
│   │   ├── ChatModal.js           # Live chat interface
│   │   └── MeditationSection.js   # Meditation preview
│   ├── pages/
│   │   ├── MeditationPage.js      # Full meditation timer
│   │   ├── YogaPage.js            # Yoga practices
│   │   ├── MusicPage.js           # Music therapy
│   │   ├── SelfCarePage.js        # Self-care tips
│   │   └── QuotesPage.js          # Inspirational quotes
│   ├── firebase/
│   │   └── config.js              # Firebase configuration
│   ├── services/
│   │   └── firebaseService.js     # Firebase operations
│   ├── App.js                     # Main app component
│   ├── App.css                    # Global styles
│   └── index.js                   # Entry point
├── FIREBASE_SETUP.md              # Firebase setup guide
├── MEDITATION_API_SETUP.md        # Meditation API guide
├── package.json
└── README.md
```

---

## 🎨 Tech Stack

### Frontend
- **React 18** - UI framework
- **React Router** - Navigation
- **CSS3** - Styling with animations

### Backend
- **Firebase Realtime Database** - Real-time data sync
- **Firebase Hosting** - Deployment

### APIs
- **Pixabay Audio** - Ambient meditation sounds

### Features
- **Local Storage** - Session history persistence
- **Web Audio API** - Sound playback and control
- **Responsive Design** - Mobile-first approach

---

## 🎯 Key Components

### Meditation Timer
The meditation timer is a fully interactive experience featuring:
- Visual breathing guide with animated circle
- Real-time breath counting
- Phase-by-phase timer
- Progress bar
- Volume control
- Session completion celebration
- History tracking

### Anonymous Notes
Community-driven support system with:
- Real-time post updates
- Anonymous posting
- Firebase integration
- Responsive card layout

### Resource Pages
Dedicated pages for:
- Yoga poses with detailed instructions
- Music therapy playlists
- Self-care practices
- Inspirational quotes

---

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project at [firebase.google.com](https://firebase.google.com)
2. Enable Realtime Database
3. Set up database rules:

```json
{
  "rules": {
    "posts": {
      ".read": true,
      ".write": true
    },
    "messages": {
      ".read": true,
      ".write": true
    }
  }
}
```

4. Add your Firebase config to `src/firebase/config.js`

See [FIREBASE_SETUP.md](FIREBASE_SETUP.md) for detailed instructions.

### Meditation Sounds

The app uses direct audio URLs from Pixabay. No API key required!

See [MEDITATION_API_SETUP.md](MEDITATION_API_SETUP.md) for more details.

---

## 📱 Responsive Design

The platform is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

---

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Purple theme throughout
- **Glassmorphism**: Modern frosted glass effects
- **Smooth Animations**: Hover effects and transitions
- **Professional Icons**: SVG icons for scalability
- **Accessibility**: WCAG compliant design

### User Experience
- **Intuitive Navigation**: Clear menu structure
- **Visual Feedback**: Interactive elements respond to user actions
- **Loading States**: Clear indicators for async operations
- **Error Handling**: Graceful error messages

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Unsplash** - Beautiful background images
- **Pixabay** - Free ambient sounds
- **Firebase** - Real-time database and hosting
- **React Community** - Amazing framework and ecosystem
- **Mental Health Advocates** - Inspiration and guidance

---

## 📞 Support

### Need Help?
- 📧 Email: support@sharetalkhe al.com
- 💬 Discord: [Join our community](#)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/share-talk-heal/issues)

### Crisis Resources
If you're in crisis, please reach out:
- **National Suicide Prevention Lifeline**: 1-800-273-8255
- **Crisis Text Line**: Text HOME to 741741
- **International**: [findahelpline.com](https://findahelpline.com)

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] User accounts and profiles
- [ ] Therapist directory
- [ ] Group meditation sessions
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] AI-powered mood tracking
- [ ] Integration with wearables
- [ ] Offline mode

---

## 📊 Statistics

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/yourusername/share-talk-heal?style=social)
![GitHub forks](https://img.shields.io/github/forks/yourusername/share-talk-heal?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/yourusername/share-talk-heal?style=social)

</div>

---

## 💖 Support the Project

If this project helped you, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📢 Sharing with others
- ☕ [Buy me a coffee](https://buymeacoffee.com/yourusername)

---

<div align="center">

**Made with 💜 for mental health awareness**

[Website](#) • [Twitter](#) • [Instagram](#) • [LinkedIn](#)

© 2025 Share Talk, Heal. All rights reserved.

</div>
=======
# Manasthiti
>>>>>>> 212f5902db58113657643a1355e4a8a18e3aa6a0
