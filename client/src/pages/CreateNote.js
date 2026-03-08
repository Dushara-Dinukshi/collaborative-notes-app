// src/pages/CreateNote.js
import React, { useState } from "react";
import { createNote } from "../api/notes";
import "../css/CreateNote.css";

const CreateNote = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote(formData, token);
    setMessage("Note created!");
    setFormData({ title: "", content: "" });
    setShowModal(false); // close popup after submit
  };

  return (
    <div className="create-note-container">
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        + New Note
      </button>

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
            {message && <p className="modal-message">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNote;