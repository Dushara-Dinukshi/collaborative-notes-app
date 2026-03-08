// controllers/noteController.js
const Note = require("../models/Note");

// GET /api/notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/notes
const createNote = async (req, res) => {
  try {
    const note = await Note.create({ ...req.body, user: req.user.id });
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// PUT /api/notes/:id
const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE /api/notes/:id
const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getNotes, createNote, updateNote, deleteNote };