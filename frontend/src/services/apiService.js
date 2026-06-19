const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// ── Posts (Anonymous Notes) ──────────────────────────────────────────────────

export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
};

export const createPost = async (content, mood = 'neutral') => {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content, mood })
  });
  if (!res.ok) throw new Error('Failed to create post');
  return res.json();
};

export const likePost = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}/like`, { method: 'PATCH' });
  if (!res.ok) throw new Error('Failed to like post');
  return res.json();
};

export const deletePost = async (id) => {
  const res = await fetch(`${BASE_URL}/posts/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete post');
  return res.json();
};

// ── Messages (Chat) ──────────────────────────────────────────────────────────

export const getMessages = async () => {
  const res = await fetch(`${BASE_URL}/messages`);
  if (!res.ok) throw new Error('Failed to fetch messages');
  return res.json();
};

export const sendMessage = async (text, sender = 'Anonymous') => {
  const res = await fetch(`${BASE_URL}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, sender })
  });
  if (!res.ok) throw new Error('Failed to send message');
  return res.json();
};
