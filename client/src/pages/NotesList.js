// src/pages/NotesList.js
import React, { useEffect, useState } from "react";
import { getNotes, deleteNote, createNote } from "../api/notes";
import "../css/NotesList.css";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const token = localStorage.getItem("token");

  const fetchNotes = async () => {
    const data = await getNotes(token);
    setNotes(data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id, token);
    fetchNotes();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote(formData, token);
    setFormData({ title: "", content: "" });
    setShowModal(false);
    fetchNotes(); // refresh list after creating
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="notes-container">
      <h2 className="notes-title">My Notes</h2>

      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        + New Note
      </button>

      {notes.length === 0 ? (
        <p className="notes-empty">No notes yet. Create your first one!</p>
      ) : (
        notes.map((note) => (
          <div key={note._id} className="note-card">
            <h3 className="note-title">{note.title}</h3>
            <p className="note-content">{note.content}</p>
            <button
              onClick={() => handleDelete(note._id)}
              className="note-delete"
            >
              Delete
            </button>
          </div>
        ))
      )}

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2 className="modal-title">Create Note</h2>
            <form onSubmit={handleSubmit} className="modal-form">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <textarea
                name="content"
                placeholder="Content"
                value={formData.content}
                onChange={handleChange}
                required
              />
              <div className="modal-actions">
                <button type="submit" className="modal-submit">
                  Save
                </button>
                <button
                  type="button"
                  className="modal-cancel"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesList;