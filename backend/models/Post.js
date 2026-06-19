const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: { type: String, required: true, maxlength: 500 },
  mood: { type: String, enum: ['happy', 'sad', 'anxious', 'grateful', 'neutral'], default: 'neutral' },
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
