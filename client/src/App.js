import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotesList from "./pages/NotesList";
import CreateNote from "./pages/CreateNote";
import ProtectedRoute from "./components/ProtectedRoute";
import "./css/Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">CollabNotes</div>
      <div className="navbar-links">
        {!token ? (
          <>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        ) : (
          <>
            <Link to="/notes" className="nav-link">My Notes</Link>
            <Link to="/notes/new" className="nav-link">Create Note</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/notes"
            element={
              <ProtectedRoute>
                <NotesList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notes/new"
            element={
              <ProtectedRoute>
                <CreateNote />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<h2>Welcome! Go to /register or /login</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;