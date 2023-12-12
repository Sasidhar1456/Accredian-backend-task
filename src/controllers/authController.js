// src/controllers/authController.js
const db = require('../database/db').promise(); // Use promise-based

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  try {
    const [results] = await db.query(query, [email, password]);
    
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  try {
    const [results] = await db.query(query, [username, email, password]);
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};
