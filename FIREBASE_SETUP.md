# Firebase Setup Guide

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Name your project "share-talk-heal"
4. Enable Google Analytics (optional)
5. Create project

## 2. Setup Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location close to your users
5. Click "Done"

## 3. Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon (</>) to add a web app
4. Register your app with name "share-talk-heal"
5. Copy the configuration object

## 4. Update Configuration

Replace the configuration in `src/firebase/config.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id",
};
```

## 5. Firestore Security Rules (Development)

In Firestore Database > Rules, use these rules for development:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to all documents
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

## 6. Collections Structure

The app will automatically create these collections:

- `posts` - User posts and anonymous notes
- `messages` - Chat messages
- `resources` - Self-care resources

## 7. Install Dependencies

Run in your project directory:

```bash
npm install
```

## 8. Start Development Server

```bash
npm start
```

## Production Security Rules

For production, implement proper security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null || resource == null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.authorId;
    }

    match /messages/{messageId} {
      allow read, create: if request.auth != null || resource == null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
    }

    match /resources/{resourceId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## Features Implemented

✅ **Functional Share Modal** - Posts save to Firebase
✅ **Real-time Anonymous Notes** - Fetches from Firestore
✅ **Interactive Chat** - Messages save to Firebase with bot responses
✅ **Responsive Design** - Works on all devices
✅ **Error Handling** - Graceful fallbacks when offline
✅ **Loading States** - User feedback during operations
✅ **Search Functionality** - Filter posts and messages
✅ **Accessibility** - Screen reader friendly
✅ **Performance** - Optimized for mobile devices
