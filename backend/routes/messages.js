const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// GET all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 }).limit(100);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// POST send a message
router.post('/', async (req, res) => {
  try {
    const { text, sender } = req.body;
    if (!text || text.trim().length === 0)
      return res.status(400).json({ error: 'Message text is required' });

    const message = new Message({ text: text.trim(), sender: sender || 'Anonymous' });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

module.exports = router;
