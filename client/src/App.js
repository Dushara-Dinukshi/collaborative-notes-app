// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
          <Route path="/" element={<h2>Welcome! Go to /register or /login</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;