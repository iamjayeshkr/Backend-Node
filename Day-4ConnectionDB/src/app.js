const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('done');
});

app.post('/notes', async (req, res) => {
  try {
    const Note = require('./models/note.model');
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newNote = new Note({
      title,
      content,
    });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error('Error creating note:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = app;