// src/pages/NotesList.js
import React, { useEffect, useState } from "react";
import { getNotes, deleteNote } from "../api/notes";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");

  const fetchNotes = async () => {
    const data = await getNotes(token);
    setNotes(data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id, token);
    fetchNotes(); // refresh list
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <h2>My Notes</h2>
      {notes.map((note) => (
        <div key={note._id} style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => handleDelete(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NotesList;