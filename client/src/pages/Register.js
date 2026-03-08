// src/pages/Register.js
import React, { useState } from "react";
import { registerUser } from "../api/auth";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser(formData);
    if (res.token) {
      setMessage("Registration successful!");
    } else {
      setMessage(res.message || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <br />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;