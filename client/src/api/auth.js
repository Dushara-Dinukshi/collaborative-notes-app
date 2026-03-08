// src/api/auth.js
import axios from "axios";

// Backend base URL
const API_URL = "http://localhost:5000/api/auth";

// Register user
export const registerUser = async (formData) => {
  try {
    const res = await axios.post(${API_URL}/register, formData);
    return res.data; // Returns token and user info
  } catch (err) {
    console.error(err.response?.data || err.message);
    return { message: err.response?.data?.message || "Server error" };
  }
};

// Login user
export const loginUser = async (formData) => {
  try {
    const res = await axios.post(${API_URL}/login, formData);
    return res.data; // Returns token and user info
  } catch (err) {
    console.error(err.response?.data || err.message);
    return { message: err.response?.data?.message || "Server error" };
  }
};