import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotesList from "./pages/NotesList";
import CreateNote from "./pages/CreateNote";

function App() {
  return (
    <Router>
      <div className="App">
                <nav>
          <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/notes/new" element={<CreateNote />} />
          <Route path="/" element={<h2>Welcome! Go to /register or /login</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;