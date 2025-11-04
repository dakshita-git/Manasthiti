import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  serverTimestamp,
  where
} from 'firebase/firestore';
import { db } from '../firebase/config';

// Posts Service
export const postsService = {
  // Add a new post
  async addPost(postData) {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        ...postData,
        createdAt: serverTimestamp(),
        likes: 0,
        replies: 0
      });
      return { id: docRef.id, ...postData };
    } catch (error) {
      console.error('Error adding post:', error);
      throw error;
    }
  },

  // Get all posts
  async getPosts(limitCount = 20) {
    try {
      const q = query(
        collection(db, 'posts'),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting posts:', error);
      throw error;
    }
  },

  // Get anonymous posts only
  async getAnonymousPosts(limitCount = 10) {
    try {
      const q = query(
        collection(db, 'posts'),
        where('isAnonymous', '==', true),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting anonymous posts:', error);
      throw error;
    }
  }
};

// Chat Service
export const chatService = {
  // Add a new chat message
  async addMessage(messageData) {
    try {
      const docRef = await addDoc(collection(db, 'messages'), {
        ...messageData,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...messageData };
    } catch (error) {
      console.error('Error adding message:', error);
      throw error;
    }
  },

  // Get chat messages
  async getMessages(limitCount = 50) {
    try {
      const q = query(
        collection(db, 'messages'),
        orderBy('createdAt', 'asc'),
        limit(limitCount)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting messages:', error);
      throw error;
    }
  }
};

// Resources Service
export const resourcesService = {
  // Add a new resource
  async addResource(resourceData) {
    try {
      const docRef = await addDoc(collection(db, 'resources'), {
        ...resourceData,
        createdAt: serverTimestamp()
      });
      return { id: docRef.id, ...resourceData };
    } catch (error) {
      console.error('Error adding resource:', error);
      throw error;
    }
  },

  // Get all resources
  async getResources() {
    try {
      const q = query(collection(db, 'resources'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting resources:', error);
      throw error;
    }
  }
};